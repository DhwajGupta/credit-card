export const getMonthList = () => {
  const monthsList = []

  const getMonthObj = (monthNum) => ({
    label: monthNum < 10 ? `0${monthNum}` : `${monthNum}`,
    value: monthNum
  })

  for (let i = 1; i <= 12 ;i++) monthsList.push(getMonthObj(i))
  return monthsList
}

export const getNextTenYearsList = () => {
  const yearList = []
  const currentYear = new Date().getFullYear()

  for (let i = 0; i <= 9 ;i++) yearList.push(currentYear + i)
  return yearList
}