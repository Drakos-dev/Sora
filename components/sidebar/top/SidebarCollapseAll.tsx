// components/sidebar/top/SidebarCollapseAll.tsx
// Komponent SidebarCollapseAll – przycisk „Zwiń wszystkie”, zwija wszystkie rozwinięte sekcje sidebara

'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'
import { useSidebar } from '../../../context/SidebarContext'

export default function SidebarCollapseAll() {
  const { expandedItems, toggleItem } = useSidebar()
  const anyExpanded = expandedItems.length > 0

  return (
    <motion.button
      key="collapseAll"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      onClick={() => expandedItems.forEach(toggleItem)}
      title="Zwiń wszystkie"
      className={clsx(
        'absolute left-[8px] flex items-center h-full pl-[3px] pr-[20px] gap-[8px]',
        'text-[14px] text-slate-600 dark:text-slate-300 rounded-[10px]',
        'hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors'
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          'w-[12px] h-[12px] text-slate-500 transition-transform duration-300',
          anyExpanded ? 'rotate-0' : 'rotate-180'
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
      <span className="whitespace-nowrap">Zwiń wszystkie</span>
    </motion.button>
  )
}
