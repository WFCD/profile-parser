/**
 * Map base10 int colors to hex color strings
 * @param {Record<string, number | undefined>} colors color map
 * @returns {Record<string, string>}
 */
export default function mapToHex(colors) {
  const hex = {};
  Object.entries(colors).forEach(([key, /** @type {undefined | number}  */ value]) => {
    hex[key] = Math.abs(value).toString(16).toUpperCase();
  });
  return hex;
}
