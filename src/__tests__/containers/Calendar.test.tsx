import { fireEvent, render } from "@testing-library/react"
import Calendar, { CalendarConfigProvider, getDates } from "../../"
import dayjs from "dayjs"

describe("containers/Calendar", () => {
  it("renders correctly", () => {
    render(
      <CalendarConfigProvider>
        <Calendar />
      </CalendarConfigProvider>
    )
  })
  it("renders correctly with custom props", () => {
    const props = {
      dates: getDates(30),
      durationStep: 30,
      formats: {
        date: "D M YY",
        time: "Z",
        clock: "24h" as const,
      },
      minDuration: 15,
      maxDuration: 210,
      cards: { xs: 3, sm: 3, md: 3, lg: 3, xl: 3, xxl: 3 },
      closedDates: ["Sunday"],
      closedHours: { start: 17, end: 8 },
      theme: { isDark: true },
    }

    render(
      <CalendarConfigProvider {...props}>
        <Calendar />
      </CalendarConfigProvider>
    )
  })
  it("handles date change", () => {
    const { getByText } = render(
      <CalendarConfigProvider>
        <Calendar />
      </CalendarConfigProvider>
    )

    const dateCard = getByText(dayjs().format("DD"))
    expect(dateCard).toBeInTheDocument()
    fireEvent.click(dateCard)
  })
  it("handles duration increase and decrease", () => {
    const { getAllByTestId } = render(
      <CalendarConfigProvider>
        <Calendar />
      </CalendarConfigProvider>
    )

    const buttons = getAllByTestId("duration-update-btn")

    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])
  })
})
