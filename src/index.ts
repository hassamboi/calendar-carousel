import Calendar from "./containers/Calendar"

export { useCalendar, CalendarConfigProvider } from "./hooks"
export * from "./shared/types"
export { getDates, getDurationInHours, getFormattedDate, getFormattedTime } from "./utils"

export default Calendar
