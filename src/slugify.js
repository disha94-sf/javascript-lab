/**
 * Turn any string into a URL-friendly slug.
 * Accents are removed, so "Crème Brûlée!" becomes "creme-brulee".
 *
 * @param {string} text
 * @param {{ separator?: string }} [options]
 * @returns {string}
 */
export function slugify(text, { separator = '-' } = {}) {
  if (typeof text !== 'string') {
    throw new TypeError('slugify: text must be a string');
  }

  return text
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '') // strip accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, separator)
    .replace(new RegExp(`^${escape(separator)}+|${escape(separator)}+$`, 'g'), '');
}

function escape(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
