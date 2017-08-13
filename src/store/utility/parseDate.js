export const parseDate = (date) => {
  date = new Date(date).toDateString()
  console.log(date)
  return date
}

