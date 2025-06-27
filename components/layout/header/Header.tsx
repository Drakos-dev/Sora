'use client'

import { Clock } from './Clock'
import { LastEventWidget } from './LastEventWidget'
import { ThemeSwitch } from './ThemeSwitch'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 w-full bg-gradient-to-b from-white to-white/95 dark:from-[#1d283a] dark:to-[#1d283a]/90 border-b border-slate-200 dark:border-slate-700 pr-6 py-3">
      <div className="flex justify-between items-start px-6">
        {/* Lewa część: komunikat */}
        <div className="flex flex-col justify-center">
  <h1 className="text-3xl font-semibold leading-snug text-black dark:text-white">
    Roboczo SoraApp
  </h1>
  <p className="text-[20px] leading-normal text-slate-700 dark:text-slate-300">
    Testowy tekst czy napewno działa
  </p>
</div>

        {/* Prawa część: zegar i widżety */}
        <div className="w-[200px] flex flex-col items-start gap-2">
          <Clock />
          <div className="flex w-full gap-2">
            <div className="w-[117px] translate-x-[-2px]">
              <LastEventWidget />
            </div>
            <div className="w-[80px]">
              <div className="translate-x-[-4px]">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
