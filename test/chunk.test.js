import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chunk } from '../src/index.js';

test('splits an array into even groups', () => {
  assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});

test('puts leftovers in the last group', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});

test('returns an empty array for empty input', () => {
  assert.deepEqual(chunk([], 3), []);
});

test('rejects invalid input', () => {
  assert.throws(() => chunk('abc', 2), TypeError);
  assert.throws(() => chunk([1], 0), RangeError);
  assert.throws(() => chunk([1], 1.5), RangeError);
});
