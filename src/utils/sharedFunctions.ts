/**
 * Calculates the number of months between two dates.
 *
 * @param {Date} d1
 * @param {Date} d2
 * @returns {number}
 */
export function monthDiff(d1: Date, d2: Date): number {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
