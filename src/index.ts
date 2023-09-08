import Calendar from './containers/Calendar'

export { useCalendar, CalendarConfigProvider } from './hooks'
export * from './shared/types'
export {
  getDatesFromRange,
  getDurationInHours,
  getFormattedDate,
  getFormattedTime,
} from './utils'

export default Calendar
