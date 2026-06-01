import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const source = readFileSync(new URL('../index.html', import.meta.url), 'utf8');

test('scan animation fades out and returns to idle for repeat runs', () => {
  assert.match(source, /sweepState\s*=\s*"transitionOut"/);
  assert.match(source, /scanAlpha\s*-=/);
  assert.match(source, /sweepProgress\s*=\s*0\.0?/);
});

test('slice indices are uploaded so the shader can scan and hide foreground slices', () => {
  assert.match(source, /customSliceIndices\[sIdx\+\+\]\s*=\s*j/);
  assert.match(source, /customSliceIndex\.needsUpdate\s*=\s*true/);
  assert.match(source, /aheadMask\s*=\s*smoothstep/);
  assert.match(source, /visibility\s*=\s*mix/);
});

test('progressive baking uses draw ranges and longitudinal segments from the old working version', () => {
  assert.match(source, /geometry\.setDrawRange\(0,\s*0\)/);
  assert.match(source, /geometry\.setDrawRange\(0,\s*currentSegments\s*\*\s*2\)/);
  assert.match(source, /if\s*\(lastPts\)/);
});

test('new background-to-rib control is preserved', () => {
  assert.match(source, /opacityRatio:\s*0\.15/);
  assert.match(source, /Bg\/Rib Ratio/);
  assert.match(source, /return params\.opacityRatio/);
});

test('front depth gradient defaults to flat brightness and remains slider-controlled', () => {
  assert.match(source, /frontDepthGradient:\s*0\.0/);
  assert.match(source, /Front Depth Gradient/);
  assert.match(source, /function getDepthGradientFactor/);
  assert.match(source, /return 1\.0 - params\.frontDepthGradient \+ params\.frontDepthGradient \* gradient/);
});

test('curve type dropdown rebuilds immediately on selection change', () => {
  assert.match(source, /geomFolder\.add\(params,\s*'curveType'[\s\S]*?\)\.name\('Curve Type'\)\.onChange\(rebuild\)/);
});
