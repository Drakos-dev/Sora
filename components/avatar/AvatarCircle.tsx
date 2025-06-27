// components/avatar/AvatarCircle.tsx
// Komponent AvatarCircle – okrągły awatar użytkownika z możliwością kliknięcia (np. do rozwijania dropdownu)

'use client'

import clsx from 'clsx'

type Props = {
  onClick?: () => void
}

export default function AvatarCircle({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'w-[40px] h-[40px] rounded-full bg-slate-300 dark:bg-slate-600',
        'flex items-center justify-center cursor-pointer',
        'hover:ring-2 hover:ring-blue-500 transition-all'
      )}
      aria-label="User avatar"
    >
      {/* Tu można dodać inicjały lub obraz */}
      <span className="text-white font-semibold select-none">U</span>
    </button>
  )
}
