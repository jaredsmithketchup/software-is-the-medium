import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const file = join(root, 'docs', 'vendor', 'reveal', 'plugin', 'notes', 'notes.js');
const MARKER = 'deck-custom-speaker-layout';

let src = readFileSync(file, 'utf8');
if (src.includes(MARKER)) {
  console.log('speaker view already patched — nothing to do');
  process.exit(0);
}

// CSS is injected inside the plugin's speaker-window <style> template, so it must
// use escaped \n/\t (no real newlines) and avoid double quotes.
const rules = `
\t\t\t/* ${MARKER}: current/next slides side-by-side on top; references left (large), speaker card right */
\t\t\tbody[data-speaker-layout=default] #current-slide {
\t\t\t\tposition: absolute; top: 0; left: 0; width: 50%; height: 44%;
\t\t\t}
\t\t\tbody[data-speaker-layout=default] #upcoming-slide {
\t\t\t\tposition: absolute; top: 0; right: 0; width: 50%; height: 44%;
\t\t\t}
\t\t\tbody[data-speaker-layout=default] #speaker-controls {
\t\t\t\tposition: absolute; top: 44%; left: 0; right: 0; width: auto; height: 56%; overflow: auto;
\t\t\t}
\t\t\tbody[data-speaker-layout=default] .speaker-controls-notes .value {
\t\t\t\tdisplay: grid;
\t\t\t\tgrid-template-columns: 3fr 2fr;
\t\t\t\tgap: 16px;
\t\t\t\talign-items: start;
\t\t\t\tfont-size: 13px;
\t\t\t\tline-height: 1.45;
\t\t\t}
\t\t\tbody[data-speaker-layout=default] .speaker-controls-notes .value .decknotes {
\t\t\t\tfont-size: 12px;
\t\t\t\tborder-right: 1px solid #ddd;
\t\t\t\tpadding-right: 16px;
\t\t\t}
\t\t\tbody[data-speaker-layout=default] .speaker-controls-notes .value .cards {
\t\t\t\tfont-size: 13px;
\t\t\t}
\t\t\tbody[data-speaker-layout=default] .speaker-controls-notes .value h5 {
\t\t\t\ttext-transform: uppercase; letter-spacing: .12em; font-size: .78em; color: #4d7c0f;
\t\t\t\tmargin: .2em 0 .4em;
\t\t\t}
\t\t\tbody[data-speaker-layout=default] .speaker-controls-notes .value h5:first-child { color: #5b6caf; }
\t\t\tbody[data-speaker-layout=default] .speaker-controls-notes .value p { margin: .4em 0; }
\t\t\tbody[data-speaker-layout=default] .speaker-controls-notes .value ul { margin: .3em 0 .5em; padding-left: 1.15em; }
\t\t\tbody[data-speaker-layout=default] .speaker-controls-notes .value li { margin: .18em 0; }
\t\t\tbody[data-speaker-layout=default] .speaker-controls-notes .value strong { color: #111; }
\t\t\tbody[data-speaker-layout=default] .speaker-controls-notes .value blockquote {
\t\t\t\tmargin: .3em 0; padding: .1em .6em; border-left: 3px solid #999; color: #444;
\t\t\t}
\t\t\tbody[data-speaker-layout=default] .speaker-controls-notes .value code {
\t\t\t\tfont-family: Consolas, Monaco, monospace; font-size: .92em;
\t\t\t\tbackground: #f1f3f5; padding: .05em .3em; border-radius: 3px;
\t\t\t}
`;
const escaped = rules.split('\n').map((l) => l + '\\n').join('');
const css = '/* ' + MARKER + ' */\\n' + escaped;

const idx = src.indexOf('</style>');
if (idx < 0) {
  console.error('could not find speaker template style tag');
  process.exit(1);
}
const out = src.slice(0, idx) + css + '</style>' + src.slice(idx + '</style>'.length);
writeFileSync(file, out, 'utf8');
console.log('patched speaker view template (inserted ' + out.length + ' chars total)');
