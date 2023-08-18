export * from "./calendar.constant"
export * from "./duration.constant"
export * from "./theme.constant"

import * as calendarConstants from "./calendar.constant"
import * as durationConstants from "./duration.constant"
import * as themeConstants from "./theme.constant"

const Constants = {
  ...calendarConstants,
  ...durationConstants,
  ...themeConstants,
}

export default Constants
