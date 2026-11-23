/**
 * Split an array into groups of `size` items.
 *
 * @example chunk([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 * @param {Array} array
 * @param {number} size - Must be a positive integer.
 * @returns {Array[]}
 */
export function chunk(array, size) {
  if (!Array.isArray(array)) {
    throw new TypeError('chunk: first argument must be an array');
  }
  if (!Number.isInteger(size) || size < 1) {
    throw new RangeError('chunk: size must be a positive integer');
  }

  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}
