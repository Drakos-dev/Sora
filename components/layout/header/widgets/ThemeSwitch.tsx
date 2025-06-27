'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [fadeVisible, setFadeVisible] = useState(true)
  const [fullyHidden, setFullyHidden] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (router.pathname === '/ustawienia') {
      setFadeVisible(false)
      setTimeout(() => setFullyHidden(true), 300)
    } else {
      setFullyHidden(false)
      setTimeout(() => setFadeVisible(true), 10)
    }
  }, [router.pathname])

  if (!mounted) return <></>

  return (
    <div>
      <div
        className={`transition-opacity duration-300 ${
          fadeVisible ? 'opacity-100' : 'opacity-0'
        } ${fullyHidden ? 'invisible pointer-events-none' : 'visible pointer-events-auto'}`}
      >
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="w-20 h-10 bg-gray-300 dark:bg-gray-700 rounded-full p-1 flex items-center transition-colors select-none shadow-md border border-zinc-300 dark:border-black"
        >
          <div
            className={`w-8 h-8 rounded-full bg-gray-700 dark:bg-gray-300 transition-transform duration-200 transform ${
              theme === 'dark' ? 'translate-x-0' : 'translate-x-10'
            }`}
          ></div>
        </button>
      </div>
    </div>
  )
}
