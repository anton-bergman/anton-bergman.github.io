/**
 * Calculates the number of months between two dates.
 *
 * @param {Date} d1
 * @param {Date} d2
 * @returns {number}
 */
export function monthDiff(d1: Date, d2: Date): number {
  const isDate_d1: Boolean = d1 instanceof Date;
  const isDate_d2: Boolean = d2 instanceof Date;

  if (!isDate_d1 || !isDate_d2) {
    throw new Error("Error: Invalid date input to function monthDiff().");
  }

  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();

  return months <= 0 ? 0 : months;
}

export function parseDateString(dateString: string): Date {
  const [month, year] = dateString.split(" ");
  const monthIndex = "JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC".indexOf(month) / 3;

  if (isNaN(monthIndex) || !year) {
    throw new Error(
      "Invalid date string format. Please provide a valid 'MMM YYYY' format."
    );
  }

  const parsedDate = new Date(Date.UTC(parseInt(year), monthIndex, 1));
  return parsedDate;
}
