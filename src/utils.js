import Pixel from './Pixel';

const epochZero = { $date: { $numberLong: 0 } };

/**
 * Returns a new Date constructed from a worldState date object
 * @param {Object} d The worldState date object
 * @returns {Date}
 */
export function parseDate(d) {
  const safeD = d || epochZero;
  const dt = safeD.$date || epochZero.$date;
  return new Date(safeD.$date ? Number(dt.$numberLong) : 1000 * d.sec);
}

export function translatePolarity(pol = '') {
  if (pol.includes('AP_ATTACK')) {
    return 'Madurai';
  }
  if (pol.includes('AP_DEFENSE')) {
    return 'Varazin';
  }
  if (pol.includes('AP_TACTIC')) {
    return 'Naramon';
  }
  if (pol.includes('AP_POWER')) {
    return 'Zenurik';
  }
  if (pol.includes('AP_WARD')) {
    return 'Unairu';
  }
  return 'None';
}

/**
 * Safely map a color to a pixel
 * @param {string|undefined} color hex value to check for existence
 * @returns {Pixel|undefined}
 */
const safeColor = (color) => (color ? new Pixel(color) : undefined);

/**
 * Common Color Map
 * @typedef {Object} ColorMap
 * @property {Pixel} [primary]
 * @property {Pixel} [secondary]
 * @property {Pixel} [tertiary]
 * @property {Pixel} [accents]
 * @property {Array<Pixel>} [emissive]
 * @property {Array<Pixel>} [energy]
 */

/**
 * @typedef {Object} RawColors
 * @property {string} [t0] primary color hex
 * @property {string} [t1] secondary color hex
 * @property {string} [t2] tertiary color hex
 * @property {string} [t3] accent color hex
 * @property {string} [m0] first emissive color hex
 * @property {string} [m1] second emissive color hex
 * @property {string} [en] first energy color hex
 * @property {string} [en1] second energy color hex
 */

/**
 * Map DE Colors to common named colors
 * @param {RawColors} colors raw colors from api
 * @returns {ColorMap|undefined}
 */
export function mapColors(colors = undefined) {
  if (!colors) return undefined;
  return {
    primary: safeColor(colors.t0),
    secondary: safeColor(colors.t1),
    tertiary: safeColor(colors.t2),
    accents: safeColor(colors.t3),
    emissive: [safeColor(colors.m0), safeColor(colors.m1)].filter((c) => c),
    energy: [safeColor(colors.en), safeColor(colors.en1)].filter((c) => c),
  };
}
