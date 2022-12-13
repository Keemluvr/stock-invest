export const subtractDays = (date: Date, days: number): Date => {
  const result = new Date(date)
  result.setDate(date.getDate() - days)
  return result
}
