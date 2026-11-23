import { test } from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/index.js';

test('lowercases and joins words with dashes', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('removes accents and punctuation', () => {
  assert.equal(slugify('Crème Brûlée!'), 'creme-brulee');
});

test('trims separators from both ends', () => {
  assert.equal(slugify('  --Open Source--  '), 'open-source');
});

test('supports a custom separator', () => {
  assert.equal(slugify('my blog post', { separator: '_' }), 'my_blog_post');
});

test('rejects non-strings', () => {
  assert.throws(() => slugify(null), TypeError);
});
