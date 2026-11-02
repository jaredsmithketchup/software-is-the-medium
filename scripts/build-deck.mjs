import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const deckMd = join(root, 'Presentation', 'slide-deck.md');
const cardsMd = join(root, 'Presentation', 'speaker-cards.md');
const outHtml = join(root, 'docs', 'index.html');

function inlineMd(s) {
  let t = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  t = t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
  t = t.replace(/(?<!\*)\*([^*\s][^*]*)\*(?!\*)/g, '<em>$1</em>');
  return t;
}

function blocksMd(md) {
  const out = [];
  let list = null;
  const closeList = () => {
    if (list) {
      out.push('<ul>' + list.join('') + '</ul>');
      list = null;
    }
  };
  for (const raw of md.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;
    if (/^[-•]\s+/.test(line)) {
      list = list || [];
      list.push('<li>' + inlineMd(line.replace(/^[-•]\s+/, '')) + '</li>');
    } else if (/^\*\*/.test(line) || /^>/.test(line)) {
      closeList();
      if (line.startsWith('>')) out.push('<blockquote>' + inlineMd(line.replace(/^>\s?/, '')) + '</blockquote>');
      else out.push('<p>' + inlineMd(line) + '</p>');
    } else if (list) {
      list[list.length - 1] = list[list.length - 1].slice(0, -5) + ' ' + inlineMd(line) + '</li>';
    } else {
      const prev = out[out.length - 1];
      if (prev && prev.startsWith('<p>')) out[out.length - 1] = prev.slice(0, -4) + ' ' + inlineMd(line) + '</p>';
      else if (prev && prev.startsWith('<blockquote>')) out[out.length - 1] = prev.slice(0, -12) + ' ' + inlineMd(line) + '</blockquote>';
      else out.push('<p>' + inlineMd(line) + '</p>');
    }
  }
  closeList();
  return out.join('\n');
}

function contentBullets(content) {
  return content
    .split(/(?:\. |; )/)
    .map((s) => s.trim().replace(/\.$/, ''))
    .filter(Boolean);
}

function parseSlides(md) {
  const slides = [];
  let act = '';
  let actLabel = '';
  let current = null;
  for (const raw of md.split(/\r?\n/)) {
    const line = raw.trim();
    const actM = line.match(/^# ACT ([A-D])\s*[—\-–]\s*(.+)$/i);
    if (actM) {
      act = actM[1].toUpperCase();
      actLabel = `${actM[1].toUpperCase()} — ${actM[2]}`;
      continue;
    }
    const slideM = line.match(/^## S(\d+)\s*[—\-–]\s*(.+)$/);
    if (slideM) {
      if (current) slides.push(current);
      current = { num: +slideM[1], rawTitle: slideM[2], act, actLabel, bullets: [] };
      continue;
    }
    if (!current) continue;
    if (line.startsWith('---') || line.startsWith('#')) continue;
    current.bullets.push(raw);
  }
  if (current) slides.push(current);

  for (const s of slides) {
    const fields = { goal: '', content: '', visual: '', refs: '' };
    let cur = null;
    for (const raw of s.bullets) {
      const line = raw.trim();
      if (!line) continue;
      const m = line.match(/^-\s+\*\*(Goal|Content|Visual|Refs):\*\*\s*(.*)$/i);
      if (m) {
        cur = m[1].toLowerCase();
        fields[cur] = m[2];
        continue;
      }
      if (cur && !line.startsWith('-')) fields[cur] += ' ' + line;
    }
    Object.assign(s, fields);
    s.isDivider = /\*\(divider\)\*/.test(s.rawTitle);
    const sec = s.rawTitle.match(/^Section (\d+) intro:\s*(.*)$/);
    if (sec) {
      s.section = +sec[1];
      s.title = sec[2].replace(/\s*\*\(divider\)\*$/, '');
    } else {
      s.section = null;
      s.title = s.rawTitle.replace(/\s*\*\(divider\)\*$/, '');
    }
  }
  return slides;
}

function parseCards(md) {
  const cards = new Map();
  let num = null;
  let buf = [];
  const flush = () => {
    if (num !== null) cards.set(num, buf.join('\n').trim());
  };
  for (const raw of md.split(/\r?\n/)) {
    const line = raw.trim();
    const m = line.match(/^## S(\d+)\s*[—\-–]\s*(.+)$/);
    if (m) {
      flush();
      num = +m[1];
      buf = [];
    } else if (num !== null) {
      if (line.startsWith('---')) continue;
      buf.push(raw);
    }
  }
  flush();
  return cards;
}

const slides = parseSlides(readFileSync(deckMd, 'utf8'));
const cards = parseCards(readFileSync(cardsMd, 'utf8'));

function slideDiagram(num) {
  const f = join(root, 'docs', 'diagrams', 's' + num + '.svg');
  if (!existsSync(f)) return '';
  return readFileSync(f, 'utf8').trim();
}

function slideHtml(s) {
  const sourceNotes = [
    s.goal ? '- **Goal:** ' + s.goal : '',
    s.content ? '- **Content:** ' + s.content : '',
    s.visual ? '- **Visual:** ' + s.visual : '',
    s.refs ? '- **Refs:** ' + s.refs : '',
  ].filter(Boolean).join('\n');
  const notes = [
    cards.has(s.num) ? '<div class="cards"><h5>Speaker card — S' + s.num + '</h5>' + blocksMd(cards.get(s.num)) + '</div>' : '',
    sourceNotes ? '<div class="decknotes"><h5>Slide source notes</h5>' + blocksMd(sourceNotes) + '</div>' : '',
  ].filter(Boolean).join('\n');
  const diagram = slideDiagram(s.num);
  const claims = contentBullets(s.content).map((x) => '<li>' + inlineMd(x) + '</li>').join('');

  if (s.isDivider) {
    const kicker = s.section ? '<p class="kicker">Section ' + s.section + '</p>' : '';
    return [
      '<section data-num="' + s.num + '" data-state="act-' + s.act.toLowerCase() + '" data-background-color="#111827">',
      '  <div class="divider"><span class="chip">' + s.actLabel + '</span>' + kicker,
      '    <h2>' + inlineMd(s.title) + '</h2>',
      diagram ? '<div class="diagram divider-diagram">' + diagram + '</div>' : '',
      claims ? '    <ul class="divider-claims">' + claims + '</ul>' : '',
      '  </div>',
      '  <aside class="notes">\n' + notes + '\n  </aside>',
      '</section>',
    ].join('\n');
  }

  const refsText = s.refs.replace(/^.*?refs:\s*/i, '');
  const hasDiag = !!diagram;
  return [
    '<section data-num="' + s.num + '" data-state="act-' + s.act.toLowerCase() + '"' + (hasDiag ? ' class="has-diagram"' : '') + '>',
    '  <span class="chip">' + s.actLabel + '</span>',
    '  <h2>' + inlineMd(s.title) + '</h2>',
    hasDiag
      ? '  <div class="diagram-row">' + (claims ? '<ul class="content">' + claims + '</ul>' : '') + '<div class="diagram">' + diagram + '</div></div>'
      : (claims ? '  <ul class="content">' + claims + '</ul>' : ''),
    refsText ? '<p class="refs">' + inlineMd(refsText) + '</p>' : '',
    '  <aside class="notes">\n' + notes + '\n  </aside>',
    '</section>',
  ].join('\n');
}

const sections = slides.map(slideHtml).join('\n\n');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Software is the Medium — Game Engines are Software</title>
<link rel="stylesheet" href="vendor/reveal/dist/reveal.css">
<link rel="stylesheet" href="vendor/reveal/dist/theme/black.css">
<link rel="stylesheet" href="theme.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
</head>
<body>
<div class="reveal">
  <div class="slides">
${sections}
  </div>
</div>
<script src="vendor/reveal/dist/reveal.js"></script>
<script src="vendor/reveal/plugin/notes/notes.js"></script>
<script src="vendor/reveal/plugin/zoom/zoom.js"></script>
<script>
  Reveal.initialize({
    hash: true,
    slideNumber: 'c/t',
    transition: 'fade',
    controls: true,
    progress: true,
    center: true,
    width: 960,
    height: 540,
    margin: 0.04,
    plugins: [RevealNotes, RevealZoom]
  });
</script>
</body>
</html>
`;

mkdirSync(dirname(outHtml), { recursive: true });
writeFileSync(outHtml, html, 'utf8');
console.log('wrote ' + outHtml);
console.log('slides parsed: ' + slides.length);
console.log('cards parsed: ' + cards.size);
const missing = slides.filter((s) => !cards.has(s.num));
console.log('slides without a card: ' + (missing.length ? missing.map((s) => s.num).join(',') : 'none'));
console.log('dividers: ' + slides.filter((s) => s.isDivider).length);
