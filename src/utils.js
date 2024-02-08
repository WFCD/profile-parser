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
