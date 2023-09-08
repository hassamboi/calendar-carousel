import { fireEvent, render } from '@testing-library/react'
import Calendar, { CalendarConfigProvider } from '../../'
import dayjs from 'dayjs'

describe('containers/Calendar', () => {
  it('renders correctly', () => {
    render(
      <CalendarConfigProvider>
        <Calendar />
      </CalendarConfigProvider>
    )
  })
  it('renders correctly with custom props', () => {
    const props = {
      dates: { start: dayjs(), end: dayjs().add(30, 'day') },
      durationStep: 30,
      formats: {
        date: 'D M YY',
        time: 'Z',
        clock: '24h' as const,
      },
      minDuration: 15,
      maxDuration: 210,
      cards: { xs: 3, sm: 3, md: 3, lg: 3, xl: 3, xxl: 3 },
      closedDates: ['Sunday'],
      closedHours: { start: 17, end: 8 },
      theme: { isDark: true },
    }

    render(
      <CalendarConfigProvider {...props}>
        <Calendar />
      </CalendarConfigProvider>
    )
  })
  it('handles date change', () => {
    const { getAllByTestId } = render(
      <CalendarConfigProvider>
        <Calendar />
      </CalendarConfigProvider>
    )

    const dateCards = getAllByTestId('card')
    expect(dateCards[0]).toBeInTheDocument()
    fireEvent.click(dateCards[0])
  })
  it('handles button clicks', () => {
    const { getAllByTestId } = render(
      <CalendarConfigProvider>
        <Calendar />
      </CalendarConfigProvider>
    )

    const buttons = getAllByTestId('btn')

    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])
    fireEvent.click(buttons[2])
    fireEvent.click(buttons[3])
  })
  it('renders calendar without any panels', () => {
    const { container } = render(
      <CalendarConfigProvider>
        <Calendar panelsToShow={{ date: false, time: false, duration: false }} />
      </CalendarConfigProvider>
    )

    const panels = container.getElementsByClassName('ant-collapse-item')
    expect(panels).toHaveLength(0)
  })
})
