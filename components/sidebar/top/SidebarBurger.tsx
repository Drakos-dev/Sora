// components/sidebar/top/SidebarBurger.tsx
// Komponent SidebarBurger – przycisk hamburgera do zwijania/rozwijania sidebaru

'use client'

import { motion } from 'framer-motion'
import { useSidebar } from '../../../context/SidebarContext'

export default function SidebarBurger() {
  const { isCollapsed, toggleCollapsed, expandedItems, toggleItem } = useSidebar()

  const handleClick = () => {
    if (!isCollapsed) expandedItems.forEach(toggleItem)
    toggleCollapsed()
  }

  return (
    <motion.button
      onClick={handleClick}
      title={isCollapsed ? 'Rozwiń sidebar' : 'Zwiń sidebar'}
      animate={{ x: isCollapsed ? -4 : 0 }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="absolute right-[8px] flex items-center justify-center w-[36px] h-[36px] rounded-full group transition-colors"
    >
      <span className="absolute inset-0 rounded-full bg-slate-100 dark:bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="relative w-[20px] h-[20px] stroke-[1.8] text-slate-600 dark:text-slate-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </svg>
    </motion.button>
  )
}
