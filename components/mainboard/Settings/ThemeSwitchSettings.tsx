'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitchSettings() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-10 h-5 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition-colors select-none"
      aria-label="Przełącz motyw"
    >
      <div
        className={`w-4 h-4 rounded-full bg-gray-700 dark:bg-gray-300 transition-transform duration-200 transform ${
          theme === 'dark' ? 'translate-x-0' : 'translate-x-4'
        }`}
      />
    </button>
  )
}
