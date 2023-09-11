import dayjs, { Dayjs } from 'dayjs'
import { ClosedDate, DateRange, IDate } from '../shared/types'
import { DATE_FORMAT } from '../shared/constants'

/**
 * Generates a list of dates along with their closure status.
 * @param {number} amountOfDays - The number of days to generate.
 * @param {ClosedDate} closedDate - Callback for closed date.
 * @returns {Array<IDate>} An array of IDate objects representing dates and their closure status.
 */
const getDates = (amountOfDays: number, closedDate: ClosedDate): Array<IDate> => {
  const dateList: Array<IDate> = []
  const today = dayjs(new Date())

  for (let i = 0; i < amountOfDays; i++) {
    const currDate = today.add(i, 'days')
    dateList.push({
      date: currDate,
      closed: closedDate(currDate),
    })
  }

  return dateList
}

/**
 * Generates a list of dates from a range of dates.
 * @param {DateRange} range - The number of days to generate.
 * @param {ClosedDate} closedDate - Callback for closed date.
 * @returns {Array<IDate>} An array of IDate objects representing dates and their closure status.
 */
const getDatesFromRange = (range: DateRange, closedDate: ClosedDate): Array<IDate> => {
  const dates: Array<IDate> = []
  let currDate = range.start

  while (!currDate.isAfter(range.end)) {
    dates.push({ date: currDate, closed: closedDate(currDate) })
    currDate = currDate.add(1, 'day')
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
  if (date?.format(DATE_FORMAT) === dayjs().format(DATE_FORMAT)) return 'Today'
  return date?.format(format) || ''
}

export { getDates, getFormattedDate, getDatesFromRange }
