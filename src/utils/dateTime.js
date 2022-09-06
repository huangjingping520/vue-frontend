export function dateTime(date) {
  const old = new Date(date)
  const now = new Date()

  let oldHour = old.getHours()
  let oldMin = old.getMinutes()
  const oldYear = old.getFullYear()
  const oldMonth = old.getMonth() + 1
  const oldDay = old.getDate()

  const nowYear = now.getFullYear()
  const nowMonth = now.getMonth() + 1
  const nowDay = now.getDate()

  if (nowDay === oldDay && nowMonth === oldMonth && nowYear === oldYear) {
    if (oldHour < 10)
      oldHour = `0${oldHour}`
    if (oldMin < 10)
      oldMin = `0${oldMin}`

    return `${oldHour} : ${oldMin}`
  }
  else if (nowDay === oldDay + 1 && nowMonth === oldMonth && nowYear === oldYear) {
    if (oldHour < 10)
      oldHour = `0${oldHour}`
    if (oldMin < 10)
      oldMin = `0${oldMin}`

    return `昨天 ${oldHour} : ${oldMin}`
  }
  else {
    return `${oldYear} / ${oldMonth} / ${oldDay}`
  }
}
