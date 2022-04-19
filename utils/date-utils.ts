export const getDateRange = (startDate: number, endDate: number) => {
  let dates: Date[] = [];
  const theDate = new Date(new Date(startDate).setHours(0, 0, 0, 0));
  while (theDate < new Date(new Date(endDate).setHours(0, 0, 0, 0))) {
    dates = [...dates, new Date(theDate)];
    theDate.setDate(theDate.getDate() + 1);
  }
  return [...dates, new Date(endDate)];
};
