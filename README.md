# react-calendar-carousel

Calendar carousal is a mobile friendly component which give emphasis on selected date and time, you might have seen similar examples in booking related websites where selected dates must remain visible at all times for good UX.

## Installation

You can install `react-calendar-carousel` using npm.

```sh
npm i react-calendar-carousel --save
```

## Usage

```typescript
import { CalendarConfigProvider } from  "react-calendar-carousel"

const App = () => {
  return (
    <CalendarConfigProvider>
      {...}
    </CalendarConfigProvider>
  )
}

export default App
```

```typescript
import Calendar from  "react-calendar-carousel"

const MyComponent = () => {
  return (
    {...}
      <Calendar />
    {...}
  )
}

export default MyComponent
```

## API

The `Calendar` component can be used by wrapping it in the `CalendarConfigProvider`, both imported from `react-calendar-carousel`. All of the calendar’s state management and date logic are bundled in `useCalendar` custom hook.

## Components&nbsp;

## `CalendarConfigProvider`

| Prop         | Description                                                  | Type                                     | Default |
| :----------- | :----------------------------------------------------------- | :--------------------------------------- | :------ |
| dates        | The dates displayed in the Carousel                          | [IDate[]](#idate)                        | `Today` |
| durationStep | The minutes by which duration should increase or decrease by | `number`                                 | `15`    |
| formats      | The display format for date, time, and clock                 | [Formats](#formats)                      | -       |
| minDuration  | Lower threshold for the duration **(in minutes)**            | `number`                                 | `60`    |
| maxDuration  | Upper threshold for the duration **(in minutes)**            | `number`                                 | `180`   |
| cards        | Amount of cards per screen to be displayed                   | [CardBreakpoint](#card-breakpoint)       | -       |
| closedDates  | Dates that should be closed                                  | `string` \| [Dayjs](https://day.js.org/) | -       |
| closedHours  | Hours that should be closed                                  | [ClosedHoursRange](#closed-hours-range)  | -       |
| theme        | Theme for the calendar and the components within             | [CalendarTheme](#calendar-theme)         | -       |

## `Calendar`

| Prop              | Description                                         | Type                 | Default      |
| :---------------- | :-------------------------------------------------- | :------------------- | :----------- |
| activePanels      | What panels should initially be opened              | `string \| string[]` | `['1', '2']` |
| dateComponent     | Component that will replace the **card carousel**   | `ReactNode`          | -            |
| timeComponent     | Component that will replace the **time picker**     | `ReactNode`          | -            |
| durationComponent | Component that will replace the **duration setter** | `ReactNode`          | -            |

## Hooks&nbsp;

## `useCalendar`

This custom hook provides access to all the state values of the package, along with the functions to update the state.

| Name             | Description                                                  | Type                                     |
| :--------------- | :----------------------------------------------------------- | :--------------------------------------- |
| selected         | Selected date, time, and duration                            | [Selected](#selected)                    |
| setDate          | Function to update the selected date                         | `(date:  Dayjs) =>  void`                |
| setTime          | Function to update the selected time                         | `(time:  Dayjs) =>  void`                |
| increaseDuration | Function to increase the selected duration                   | `(offset:  number) =>  number`           |
| decreaseDuration | Function to decrease the selected duration                   | `(offset:  number) =>  number`           |
| dates            | The dates displayed in the carousel                          | [IDate[]](#idate)                        |
| durationStep     | The minutes by which duration should increase or decrease by | `number`                                 |
| formats          | The display format for date, time, and clock                 | [Formats](#formats)                      |
| minDuration      | Lower threshold for the duration **(in minutes)**            | `number`                                 |
| maxDuration      | Upper threshold for the duration **(in minutes)**            | `number`                                 |
| cards            | Amount of cards per screen to be displayed                   | [CardBreakpoint](#card-breakpoint)       |
| closedDates      | Dates that should be closed                                  | `string` \| [Dayjs](https://day.js.org/) |
| closedHours      | Hours that should be closed                                  | [ClosedHoursRange](#closed-hours-range)  |

## Custom Types

### <a name="idate"></a>`IDate`

Date entry with its associated information.

```typescript
type IDate = {
  date: Dayjs
  closed?: boolean
}
```

### <a name="formats"></a>`Formats`

Display format for the date, time and allow the selection of `12` or `24` hour format.

```ts
type Formats = {
  date: string /** @default "DD MMMM YYYY"*/
  time: string /** @default "hh:mm a" */
  clock: "12h" | "24h" /** @default "12h" */
}
```

### <a name="card-breakpoint"></a>`CardBreakpoint`

Number of cards to display per slide based on the different screen sizes.

```typescript
export type CardBreakpoint = {
  xs: number /** @default 1 */
  sm: number /** @default 4 */
  md: number /** @default 6 */
  lg: number /** @default 8 */
  xl: number /** @default 10 */
  xxl: number /** @default 14 */
}
```

### <a name="closed-hours-range"></a>`ClosedHoursRange`

Range of closed hours, including `start` and `end`.

```typescript
type ClosedHoursRange = {
  start: number
  end: number
}
```

### <a name="selected"></a>`Selected`

```typescript
export type Selected = {
  date: Dayjs | null
  time: Dayjs | null
  duration: number /** @default average(minDuration, maxDuration)*/
}
```

## <a name="calendar-theme"></a>`CalendarTheme`

```typescript
type CalendarTheme = {
  isDark: boolean /**@default false */
  general?: Partial<AliasToken>
  custom?: Partial<CustomStyles>
}
```

### `AliasToken`

`general` styles are applied using _Ant Design tokens_. More info [here](https://ant.design/docs/react/customize-theme#seedtoken). _The general styles are inherited if a custom property is not provided_.

### `CustomStyles`

`custom` styles allow for component-specific customization. Below are the styles that can be applied.
| Name | Description | Type |
| :--- | :--- | :--- |
| colorCardHeader | Header color for **open** date cards | `string`
| colorCardHeaderDisabled | Header color for **closed** date cards | `string`
| colorCardHeaderText | Text color for date card header | `string`
| colorCardBodyText | Text color for date card body | `string`
| colorButton | Color for the buttons that update duration | `string`
| colorTimePicker | Color for the `TimePicker` component | `string`
| cardGap | Gap between the date cards in the carousel | `number`
| buttonBorderRadius | Border radius of buttons that update duration | `number`
| carouselWidth | Width of the entire `Calendar` component | `number`
