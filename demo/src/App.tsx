import Calendar, { useCalendar } from "react-calendar-carousel"

function App() {
  const { selected } = useCalendar()

  return (
    <div>
      <Calendar />
      <h2>Selected Date: {selected.date?.format("DD MMMM YYYY")}</h2>
      <h2>Selected Time: {selected.time?.format("h:mm a")}</h2>
      <h2>Selected Duration: {`${selected.duration} minutes`}</h2>
    </div>
  )
}

export default App
