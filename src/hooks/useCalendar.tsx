import { createContext, useState, useContext, ReactNode } from "react"
import Constants from "../shared/constants"
import { Dayjs } from "dayjs"
import { getDates, getDurationAverage, getThemeAlgorithm } from "../utils"
import { ConfigProvider } from "antd"
import {
  ClosedDate,
  Formats,
  IDate,
  Selected,
  CalendarTheme,
  CustomStyles,
  CardBreakpoint,
  ClosedHoursRange,
} from "../shared/types"

type CalendarContext = {
  selected: Selected
  setDate: (date: Dayjs) => void
  setTime: (time: Dayjs) => void
  increaseDuration: (offset: number) => number
  decreaseDuration: (offset: number) => number
  dates: Array<IDate>
  durationStep: number
  formats: Formats
  minDuration: number
  maxDuration: number
  cards: CardBreakpoint
  closedDates: Array<ClosedDate>
  closedHours: ClosedHoursRange
  styles?: Partial<CustomStyles>
}

const CalendarContext = createContext<CalendarContext | undefined>(undefined)

type CalendarConfigProviderProps = {
  children: ReactNode
  dates?: Array<IDate>
  durationStep?: number
  formats?: Formats
  minDuration?: number
  maxDuration?: number
  cards?: CardBreakpoint
  closedDates?: Array<ClosedDate>
  closedHours?: ClosedHoursRange
  theme?: CalendarTheme
}

export function CalendarConfigProvider({
  children,
  dates,
  durationStep,
  formats,
  minDuration,
  maxDuration,
  cards,
  closedDates,
  closedHours,
  theme,
}: CalendarConfigProviderProps) {
  const [selected, setSelected] = useState<Selected>({
    date: null,
    time: null,
    duration: getDurationAverage(minDuration, maxDuration),
  })

  const setDate = (date: Dayjs) => {
    setSelected({ ...selected, date })
  }

  const setTime = (time: Dayjs) => {
    /* istanbul ignore next -- @preserve */
    setSelected({ ...selected, time })
  }

  const increaseDuration = (offset: number) => {
    const duration = selected.duration + offset
    const limit = maxDuration || Constants.MAX_DURATION

    if (duration <= limit) {
      setSelected({ ...selected, duration })
      return duration
    }

    return selected.duration
  }

  const decreaseDuration = (offset: number) => {
    const duration = selected.duration - offset
    const limit = minDuration || Constants.MIN_DURATION

    if (duration >= limit) {
      setSelected({ ...selected, duration })
      return duration
    }

    return selected.duration
  }

  const contextValue: CalendarContext = {
    selected,
    setDate,
    setTime,
    increaseDuration,
    decreaseDuration,
    dates: dates || getDates(1, closedDates || Constants.CLOSED_DATES),
    durationStep: durationStep || Constants.DURATION_STEP,
    formats: formats || Constants.FORMATS,
    minDuration: minDuration || Constants.MIN_DURATION,
    maxDuration: maxDuration || Constants.MAX_DURATION,
    cards: cards || Constants.CARD_BREAKPOINT,
    closedDates: closedDates || Constants.CLOSED_DATES,
    closedHours: closedHours || Constants.CLOSED_HOURS,
    styles: theme?.custom || Constants.CALENDAR_THEME.custom,
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: getThemeAlgorithm(theme),
        token: theme?.general || Constants.CALENDAR_THEME.general,
      }}
    >
      <CalendarContext.Provider value={contextValue}>{children}</CalendarContext.Provider>
    </ConfigProvider>
  )
}

const useCalendar = () => {
  const context = useContext(CalendarContext)

  /* istanbul ignore if -- @preserve */
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarConfig")
  }
  return context
}

export default useCalendar
