import { getDurationAverage, getDurationInHours } from "../../utils"

describe("utils/duration", () => {
  /** getDurationAverage */
  test("getDurationAverage returns the floored average", () => {
    expect(getDurationAverage(1, 4)).toBe(2)
  })
  test("getDurationAverage with default values with no input", () => {
    expect(getDurationAverage()).toBeGreaterThan(0)
  })

  /** getDurationInHours */
  test("getDurationInHours converts minutes to hour format", () => {
    expect(getDurationInHours(30)).toBe("0:30")
    expect(getDurationInHours(90)).toBe("1:30")
  })
})
