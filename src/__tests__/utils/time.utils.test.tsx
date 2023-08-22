import dayjs from "dayjs"
import { getDisabledTime, getFormattedTime } from "../../utils"

describe("utils/time", () => {
  /** getFormattedTime */
  test("getFormattedTime returns the formatted time", () => {
    expect(getFormattedTime(dayjs(new Date()), "h:mm a")).toBeTruthy()
  })
  test("getFormattedTime returns '' with no date", () => {
    expect(getFormattedTime(null, "")).toBeFalsy()
  })

  /** getDisabledTime */
  test("getDisabledTime returns list of disabled hours", () => {
    expect(getDisabledTime({ start: 17, end: 8 }).disabledHours()).toHaveLength(16)
  })
  test("getDisabledTime with invalid input returns empty list", () => {
    expect(getDisabledTime({ start: -1, end: 12 }).disabledHours()).toHaveLength(0)
  })
})
