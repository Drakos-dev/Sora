'use client'

export function LastEventWidget() {
  const eventTime = '00:00'
  const eventType = 'abcdefghijklm'

  return (
    <div className="h-10 bg-white dark:bg-[#243142] px-3 rounded-2xl shadow-md border border-zinc-300 dark:border-black flex items-center w-full">
      {/* Ikona ❌ */}
      <div className="w-4 text-[11px] text-red-500 flex-shrink-0 flex items-center justify-center">❌</div>

      {/* Tekst + godzina */}
      <div className="pl-2 flex flex-col justify-center leading-none items-start">
        <span className="font-medium text-[10px] text-black dark:text-white whitespace-nowrap">
          {eventType}
        </span>
        <span className="text-[px] text-zinc-500 dark:text-zinc-400 mt-[1px]">
          {eventTime}
        </span>
      </div>
    </div>
  )
}
