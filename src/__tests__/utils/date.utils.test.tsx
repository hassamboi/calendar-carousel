import dayjs from 'dayjs'
import { getDates, getDatesFromRange, getFormattedDate } from '../../utils'
import { CLOSED_DATE } from '../../shared/constants'

describe('utils/date', () => {
  /** getDates*/
  test('getDates returns 30 dates with 30 as arg', () => {
    expect(getDates(30, CLOSED_DATE)).toHaveLength(30)
  })
  test('getDates returns an empty array with 0 or a negative number as arg', () => {
    expect(getDates(0, CLOSED_DATE)).toHaveLength(0)
    expect(getDates(-1, CLOSED_DATE)).toHaveLength(0)
  })

  /** getDatesFromRange*/
  test('getDatesFromRange returns 30 dates when given a range of 30 dates', () => {
    expect(
      getDatesFromRange({ start: dayjs(), end: dayjs().add(29, 'day') }, CLOSED_DATE)
    ).toHaveLength(30)
  })
  test('getDatesFromRange returns an 1 day when both start and end set to Today', () => {
    expect(getDatesFromRange({ start: dayjs(), end: dayjs() }, CLOSED_DATE)).toHaveLength(1)
  })
  test('getDatesFromRange returns no dates when range is invalid', () => {
    expect(
      getDatesFromRange({ start: dayjs(), end: dayjs().subtract(1, 'day') }, CLOSED_DATE)
    ).toHaveLength(0)
  })

  /** getFormattedDate */
  test('getFormattedDate returns the correct format', () => {
    expect(getFormattedDate(dayjs('2023/07/03'), 'dddd')).toBe('Monday')
  })
  test("getFormattedDate returns `Today` for today's date", () => {
    expect(getFormattedDate(dayjs(), '')).toBe('Today')
  })
  test('getFormattedDate returns `` with no date', () => {
    expect(getFormattedDate(null, '')).toBe('')
  })
})
