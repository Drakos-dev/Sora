// components/MiniSidebar/submenu/MiniSubmenu.tsx
// Komponent MiniSubmenu – rozwijane submenu w MiniSidebarze (w bok, na prawo), odpowiednik dropdowna z avatara

'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { motion } from 'framer-motion'

type Item = {
  href: string
  label: string
}

type Props = {
  items: Item[]
  position?: 'right' | 'left'
}

export default function MiniSubmenu({ items, position = 'right' }: Props) {
  const sideClass = position === 'right' ? 'left-full ml-[6px]' : 'right-full mr-[6px]'

  return (
    <motion.div
      initial={{ opacity: 0, x: 6 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 6 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={clsx(
        'absolute top-0 z-[999] w-[192px]',
        'bg-white dark:bg-slate-800 rounded-[12px] shadow-lg border',
        'border-slate-200 dark:border-slate-700',
        sideClass
      )}
    >
      <div className="p-[10px] text-[14px] text-slate-700 dark:text-slate-300">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block py-[6px] hover:underline"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </motion.div>
  )
}
