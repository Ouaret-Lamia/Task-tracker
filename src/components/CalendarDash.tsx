"use client"

import type { Deadlines } from "@/app/dashboard/page"
import { Calendar } from "@/components/ui/calendar"
import * as React from "react"

const CalendarDash = ({doneDates, progDates, queueDates}: Deadlines) => {
  const [date, setDate] = React.useState<Date | undefined>(
    new Date()
  )
  
  return (
    <Calendar
      mode="single"
      defaultMonth={date}
      numberOfMonths={3}
      selected={date}
      onSelect={setDate}
      className="rounded-lg border shadow-sm"
      doneDates={doneDates}
      progDates={progDates}
      queueDates={queueDates}
    />
  )
}

export default CalendarDash