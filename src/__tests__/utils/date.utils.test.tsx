import dayjs from "dayjs"
import { getDates, getFormattedDate, isDateClosed } from "../../utils"

describe("utils/date", () => {
  /** isDateClosed */
  test("isDateClosed is false when there are no closed dates", () => {
    expect(isDateClosed(dayjs(new Date()))).toBe(false)
  })
  test("isDateClosed is false when date is not a closed date", () => {
    expect(isDateClosed(dayjs(new Date()), [dayjs(new Date("2023/07/03"))])).toBe(false)
  })
  test("isDateClosed is true when date is a closed date", () => {
    expect(isDateClosed(dayjs(new Date()), [dayjs(new Date())])).toBe(true)
  })

  /** getDates */
  test("getDates returns 30 dates with 30 as arg", () => {
    expect(getDates(30)).toHaveLength(30)
  })
  test("getDates returns an empty array with 0 or a negative number as arg", () => {
    expect(getDates(0)).toHaveLength(0)
    expect(getDates(-1)).toHaveLength(0)
  })

  /** getFormattedDate */
  test("getFormattedDate returns the correct format", () => {
    expect(getFormattedDate(dayjs("2023/07/03"), "dddd")).toBe("Monday")
  })
  test("getFormattedDate returns `Today` for today's date", () => {
    expect(getFormattedDate(dayjs(), "")).toBe("Today")
  })
  test("getFormattedDate returns `` with no date", () => {
    expect(getFormattedDate(null, "")).toBe("")
  })
})
