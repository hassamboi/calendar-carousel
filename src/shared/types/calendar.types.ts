import { Dayjs } from 'dayjs'

/**
 * @description Represents a date entry with its associated information.
 * @property {Dayjs} date - The Dayjs object representing the date.
 * @property {boolean} [closed] - A boolean indicating whether the date is closed (unavailable).
 */
export type IDate = {
  date: Dayjs

  /** @default false*/
  closed?: boolean
}

/**
 * @description Represents the date range for dates
 * @property {Dayjs} start - The Dayjs object representing the start date.
 * @property {Dayjs} end - The Dayjs object representing the end date.
 */
export type DateRange = {
  start: Dayjs
  end: Dayjs
}

/**
 * @description Represents the selected date, time and duration.
 * @property {Dayjs} date The Dayjs object representing the date.
 * @property {Dayjs} time The Dayjs object representing the time.
 * @property {number} duration The number representing the duration.
 */
export type Selected = {
  /** @default null */
  date: Dayjs | null
  /** @default null */
  time: Dayjs | null
  /** @default [avg(minDuration, maxDuration).floor()] */
  duration: number
}

/**
 * @description Represents the display format for date, time and clock.
 * @property {string} date The Dayjs object representing the date.
 * @property {string} time string representing the time format.
 * @property {"12h" | "24h"} clock Representing the clock format as 12 or 24 hours.
 */
export type Formats = {
  /**
   * @default "DD MMMM YYYY"
   * @example "03 July 2023"
   */
  date: string
  /**
   * @default "hh:mm a"
   * @example "12:00 pm"
   */
  time: string
  /** @default "12h" */
  clock: '12h' | '24h'
}

/**
 * @description Defines the number of cards to display per slide based on breakpoints.
 * @property {number} sm - Breakpoint for small screens.
 * @property {number} md - Breakpoint for medium screens.
 * @property {number} lg - Breakpoint for large screens.
 * @property {number} xl - Breakpoint for extra-large screens.
 * @property {number} xxl - Breakpoint for extra-extra-large screens.
 */
export type CardBreakpoint = {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
}

/**
 * @description Callback for a closed date
 */
export type ClosedDate = (date: Dayjs) => boolean

/**
 * @description Represents disabled time range in hours
 * @property {number} start - Start of the range (first disabled hour)
 * @property {number} end - End of the range (last disabled hour)
 */
export type ClosedHoursRange = {
  start: number
  end: number
}

/**
 * @description Represents panels that can be used
 * @property {boolean} date - Whether to show the date panel or not
 * @property {boolean} time - Whether to show the time panel or not
 * @property {boolean} duration - Whether to show the duration panel or not
 */
export type PanelsToShow = { date?: boolean; time?: boolean; duration?: boolean }
