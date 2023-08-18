import { Dayjs } from "dayjs"
import { ClosedHoursRange } from "../shared/types"

/**
 * Converts a Dayjs time object to a formatted time string.
 * @param {Dayjs} time - The Dayjs time object to format.
 * @param {string} format - The format string to use for formatting.
 * @returns {string} The formatted time string.
 * @example time = `18:23:23 GMT+0500`, format = "hh:mm a" => returns "6:23 pm"
 */
const getFormattedTime = (time: Dayjs | null, format: string): string => {
  return time?.format(format) || ""
}

/**
 * Converts range of closed hours to a list of hours.
 * @param {ClosedHoursRange} range - The range for disabled hours.
 * @returns The disabled hours in the form of  a number[].
 * @example range = {start: 1, end: 4} => returns {disabledHours: [1, 2, 3, 4]}
 */
const getDisabledTime = ({ start, end }: ClosedHoursRange) => {
  const disabledHours: Array<number> = []
  let hoursRemain: boolean = true
  let i: number = start

  while (hoursRemain) {
    if (i > 23) i = 0
    disabledHours.push(i)
    if (i === end) hoursRemain = false
    i++
  }

  return {
    disabledHours: () => disabledHours,
  }
}

export { getFormattedTime, getDisabledTime }
