import test from 'ava';
import fs from 'fs';

test('dev build contains asserts', (t) => {
    t.assert(fs.readFileSync('dist/maplibre-gl-dev.js', 'utf8').indexOf('canary assert') !== -1);
    t.assert(fs.readFileSync('dist/maplibre-gl-dev.js', 'utf8').indexOf('canary debug run') !== -1);
    t.end();
});
