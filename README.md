# <a name="project-name"></a>react-calendar-carousel

<a href="https://www.npmjs.com/package/react-calendar-carousel">
  <img alt="downloads" src="https://img.shields.io/badge/npm-v1.1.7-blue" target="_blank" />
</a>
<a href="https://github.com/hassamboi/calendar-carousel/blob/main/LICENSE">
  <img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-yellow.svg" target="_blank" />
</a>
<br /> <br /> 
Calendar carousal is a mobile friendly component which give emphasis on selected date and time, you might have seen similar examples in booking related websites where selected dates must remain visible at all times for good UX.

## <a name="table-of-contents"></a>Table of contents

- [Project Name](#project-name)
  - [Table of contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API](#api)
    - [Components](#components)
      - [CalendarConfigProvider](#calendar-config-provider)
      - [Calendar](#calendar)
    - [Hooks](#hooks)
      - [useCalendar](#use-calendar)
    - [Custom Types](#custom-types)
      - [IDate](#idate)
      - [Formats](#formats)
      - [CardBreakpoint](#card-breakpoint)
      - [ClosedHoursRange](#closed-hours-range)
      - [Selected](#selected)
      - [CalendarTheme](#calendar-theme)
        - [AliasToken](#alias-token)
        - [CustomStyles](#custom-styles)
    - [Utils](#utils)
      - [getDates](#get-dates)
      - [getDurationInHours](#get-duration-in-hours)
      - [getFormattedDate](#get-formatted-date)
      - [getFormattedTime](#get-formatted-time)
  - [Built With](#built-with)
  - [License](#license)

## <a name="installation"></a>Installation

You can install `react-calendar-carousel` using npm.

```sh
npm i react-calendar-carousel --save
```

## <a name="usage"></a>Usage

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

## <a name="api"></a>API

The `Calendar` component can be used by wrapping it in the `CalendarConfigProvider`, both imported from `react-calendar-carousel`. All of the calendar’s state management and date logic are bundled in `useCalendar` custom hook.

## <a name="components"></a>Components&nbsp;

### <a name="calendar-config-provider"></a>`CalendarConfigProvider`

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

### <a name="calendar"></a>`Calendar`

| Prop              | Description                                         | Type                 | Default      |
| :---------------- | :-------------------------------------------------- | :------------------- | :----------- |
| activePanels      | What panels should initially be opened              | `string \| string[]` | `['1', '2']` |
| dateComponent     | Component that will replace the **card carousel**   | `ReactNode`          | -            |
| timeComponent     | Component that will replace the **time picker**     | `ReactNode`          | -            |
| durationComponent | Component that will replace the **duration setter** | `ReactNode`          | -            |

## <a name="hooks"></a>Hooks&nbsp;

### <a name="use-calendar"></a>`useCalendar`

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

## <a name="custom-types"></a>Custom Types

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
  clock: '12h' | '24h' /** @default "12h" */
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

### <a name="calendar-theme"></a>`CalendarTheme`

```typescript
type CalendarTheme = {
  isDark: boolean /**@default false */
  general?: Partial<AliasToken>
  custom?: Partial<CustomStyles>
}
```

#### <a name="alias-token"></a>`AliasToken`

`general` styles are applied using _Ant Design tokens_. More info [here](https://ant.design/docs/react/customize-theme#seedtoken). _The general styles are inherited if a custom property is not provided_.

#### <a name="custom-styles"></a>`CustomStyles`

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

## <a name="utils"></a>Utils

### <a name="get-dates"></a>`getDates`

_returns:_ [IDate[]](#idate)<br />
Get a list of dates starting from today by providing the number of required days.
| Param | Description | Type |
| :--- | :--- | :--- |
| amountOfDays | The total number of days starting **from today** | `number`
| closedDates | Dates that should be closed | `string` \| [Dayjs](https://day.js.org/)

### <a name="get-duration-in-hours"></a>`getDurationInHours`

_returns:_ `string`<br />
Convert minutes into hour representation.
| Param | Description | Type |
| :--- | :--- | :--- |
| minutes | The duration in minutes | `number`

### <a name="get-formatted-date"></a>`getFormattedDate`

_returns:_ `string`<br />
Convert date to a formatted string.
| Param | Description | Type |
| :--- | :--- | :--- |
| date | The date to format | [IDate[]](#idate) \| `null`
| format | The format to return | `string`

### <a name="get-formatted-time"></a>`getFormattedTime`

_returns:_ `string`<br />
Convert time to a formatted string.
| Param | Description | Type |
| :--- | :--- | :--- |
| time | The time to format | [Dayjs](https://day.js.org/) \| `null`
| format | The format to return | `string`

## <a name="built-with"></a>Built With

- React + TypeScript using [Vite](https://vitejs.dev/)
- [Dayjs](https://day.js.org/)
- [Ant Design](https://ant.design/)

## <a name="built-with"></a>License

Copyright © 2023 [Hassam Ud Din](https://github.com/hassamboi).<br />
This project is [MIT](https://github.com/hassamboi/calendar-carousel/blob/main/LICENSE) licensed.
