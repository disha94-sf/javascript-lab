/**
 * Delay calling `fn` until `wait` ms have passed since the last call.
 * The returned function has `.cancel()` and `.flush()` helpers.
 *
 * @example
 * const save = debounce(() => console.log('saved'), 300);
 * save(); save(); save(); // logs "saved" once, 300ms after the last call
 *
 * @param {Function} fn
 * @param {number} wait - Delay in milliseconds.
 * @returns {Function & { cancel(): void, flush(): unknown }}
 */
export function debounce(fn, wait = 0) {
  if (typeof fn !== 'function') {
    throw new TypeError('debounce: first argument must be a function');
  }

  let timer = null;
  let lastArgs = null;
  let lastThis = null;

  function invoke() {
    const args = lastArgs;
    const ctx = lastThis;
    timer = null;
    lastArgs = lastThis = null;
    return fn.apply(ctx, args);
  }

  function debounced(...args) {
    lastArgs = args;
    lastThis = this;
    clearTimeout(timer);
    timer = setTimeout(invoke, wait);
  }

  debounced.cancel = () => {
    clearTimeout(timer);
    timer = null;
    lastArgs = lastThis = null;
  };

  debounced.flush = () => {
    if (timer === null) return undefined;
    clearTimeout(timer);
    return invoke();
  };

  return debounced;
}
