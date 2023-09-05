import dayjs, { Dayjs } from 'dayjs'
import { ClosedDate, DateRange, IDate } from '../shared/types'
import isToday from 'dayjs/plugin/isToday'
dayjs.extend(isToday)

/**
 * Checks if a given date is closed based on the closedDates array.
 * @param {Dayjs} date - The date to check for closure.
 * @param {Array<ClosedDate>} closedDates - An array of closed dates (day names or specific dates).
 * @returns {boolean} `true` if the date is closed, `false` otherwise.
 */
function isDateClosed(date: Dayjs, closedDates?: Array<ClosedDate>): boolean {
  const dayName = date.format('dddd')
  if (
    closedDates?.includes(dayName) ||
    closedDates?.some((closedDate) => dayjs(closedDate).isSame(date, 'day'))
  )
    return true

  return false
}

/**
 * Generates a list of dates along with their closure status.
 * @param {number} amountOfDays - The number of days to generate.
 * @param {Array<ClosedDate> | undefined} closedDates - An array of closed dates (day names or specific dates).
 * @returns {Array<IDate>} An array of IDate objects representing dates and their closure status.
 */
const getDates = (amountOfDays: number, closedDates?: Array<ClosedDate>): Array<IDate> => {
  const dateList: Array<IDate> = []
  const today = dayjs(new Date())

  for (let i = 0; i < amountOfDays; i++) {
    const currDate = today.add(i, 'days')
    dateList.push({
      date: currDate,
      closed: isDateClosed(currDate, closedDates),
    })
  }

  return dateList
}

/**
 * Generates a list of dates from a range of dates.
 * @param {DateRange} range - The number of days to generate.
 * @param {Array<ClosedDate> | undefined} closedDates - An array of closed dates (day names or specific dates).
 * @returns {Array<IDate>} An array of IDate objects representing dates and their closure status.
 */
const getDatesFromRange = (
  range: DateRange,
  closedDates?: Array<ClosedDate>
): Array<IDate> => {
  const dates: Array<IDate> = []
  let currentDate = range.start

  while (!currentDate.isAfter(range.end)) {
    dates.push({ date: currentDate, closed: isDateClosed(currentDate, closedDates) })
    currentDate = currentDate.add(1, 'day')
  }

  return dates
}

/**
 * Gets the formatted date string based on the provided format.
 * If the date is today, it returns "Today".
 * @param {Dayjs} date - The date to format.
 * @param {string} format - The format string to use for formatting.
 * @returns {string} The formatted date string.
 */
const getFormattedDate = (date: Dayjs | null, format: string): string => {
  if (date?.isToday()) return 'Today'
  return date?.format(format) || ''
}

export { getDates, isDateClosed, getFormattedDate, getDatesFromRange }
