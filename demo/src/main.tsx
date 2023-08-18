import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import { CalendarConfigProvider, getDates } from "react-calendar-carousel"

const calendarConfig = {
  theme: {
    isDark: true,
    general: { colorPrimary: "orange" },
    custom: { buttonBorderRadius: 50 },
  },

  dates: getDates(7, ["Sunday"]),
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CalendarConfigProvider {...calendarConfig}>
      <App />
    </CalendarConfigProvider>
  </React.StrictMode>
)
