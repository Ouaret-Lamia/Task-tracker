"use client"

import { Calendar } from "@/components/ui/calendar"
import * as React from "react"

const CalendarDash = () => {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )

  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      numberOfMonths={2}
      selected={date}
      onSelect={setDate}
      className="rounded-lg border shadow-sm"
    />
  )
}

export default CalendarDash