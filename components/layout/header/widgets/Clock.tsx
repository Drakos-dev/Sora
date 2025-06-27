'use client'

import { useEffect, useState } from 'react'

export function Clock() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()

      setTime(
        now.toLocaleTimeString('pl-PL', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )

      setDate(
        now.toLocaleDateString('pl-PL', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="px-6 py-3 rounded-2xl text-center select-none w-fit bg-white dark:bg-[#243142] text-black dark:text-white shadow-md border border-zinc-300 dark:border-black">
      <div className="text-3xl font-semibold">{time}</div>
      <div className="text-sm mt-1">{date}</div>
    </div>
  )
}
