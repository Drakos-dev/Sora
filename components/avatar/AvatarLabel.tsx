// components/avatar/AvatarLabel.tsx
// Komponent AvatarLabel – etykieta z nazwą użytkownika obok awatara, z możliwością kliknięcia

'use client'

import clsx from 'clsx'

type Props = {
  userName: string
  onClick?: () => void
}

export default function AvatarLabel({ userName, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'text-[15px] font-medium cursor-pointer',
        'text-black dark:text-white',
        'select-none',
        'hover:underline'
      )}
      aria-label={`User name: ${userName}`}
    >
      {userName}
    </button>
  )
}
