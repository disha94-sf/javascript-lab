import { test } from 'node:test';
import assert from 'node:assert/strict';
import { debounce } from '../src/index.js';

test('calls the function once after rapid calls', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const calls = [];
  const fn = debounce((x) => calls.push(x), 100);

  fn(1);
  fn(2);
  fn(3);
  t.mock.timers.tick(99);
  assert.deepEqual(calls, []);
  t.mock.timers.tick(1);
  assert.deepEqual(calls, [3]);
});

test('cancel() stops a pending call', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  let count = 0;
  const fn = debounce(() => count++, 50);

  fn();
  fn.cancel();
  t.mock.timers.tick(100);
  assert.equal(count, 0);
});

test('flush() runs a pending call immediately and returns its result', (t) => {
  t.mock.timers.enable({ apis: ['setTimeout'] });
  const fn = debounce((a, b) => a + b, 50);

  fn(2, 3);
  assert.equal(fn.flush(), 5);
  assert.equal(fn.flush(), undefined); // nothing pending any more
});

test('rejects a non-function', () => {
  assert.throws(() => debounce(42), TypeError);
});
