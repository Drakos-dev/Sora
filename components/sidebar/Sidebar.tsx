// components/sidebar/Sidebar.tsx
// Komponent Sidebar – główny kontener dużego sidebaru z logiką rozwijania, awatarem, hamburgerem, separatorami i listą zakładek

'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { sidebarItems } from '../../data/SidebarData'
import { useSidebar } from '../../context/SidebarContext'
import SidebarAvatar from './top/SidebarAvatar'
import SidebarItem from './middle/SidebarItemBig'
import SidebarSettings from './bottom/SidebarSettings'
import { AnimatePresence, motion } from 'framer-motion'

export default function Sidebar() {
  const pathname = usePathname() || ''
  const { expandedItems, toggleItem, isCollapsed, toggleCollapsed } = useSidebar()

  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])

  const anyExpanded = expandedItems.length > 0

  return (
    <div
      className={clsx(
        'flex flex-col min-h-screen overflow-visible',
        'bg-white dark:bg-slate-900 text-black dark:text-white',
        'shadow-md border-r border-slate-200 dark:border-slate-700',
        'transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-[64px]' : 'w-[256px]'
      )}
    >
      <SidebarAvatar />

      {/* Zwiń wszystkie + hamburger */}
      <div className="relative h-[36px] px-[10px] py-[6px] mt-[25px]">
        <AnimatePresence>
          {!isCollapsed && (
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
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => {
            if (!isCollapsed) expandedItems.forEach(toggleItem)
            toggleCollapsed()
          }}
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
      </div>

      {/* Separator Nawigacja */}
      {isCollapsed ? (
        <div className="px-[10px] mt-[10px] mb-[0px] h-[20px] flex items-center">
          <div className="h-[1px] w-full bg-slate-300 dark:bg-slate-700" />
        </div>
      ) : (
        <div className="px-[10px] mt-[10px] mb-[0px] h-[20px] flex items-center">
          <div className="flex items-center gap-[6px] w-full text-[12px] text-slate-500 dark:text-slate-400 select-none">
            <span className="h-[1px] flex-1 bg-slate-300 dark:bg-slate-700" />
            <AnimatePresence mode="wait">
              <motion.span
                key="label"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                Nawigacja
              </motion.span>
            </AnimatePresence>
            <span className="h-[1px] flex-1 bg-slate-300 dark:bg-slate-700" />
          </div>
        </div>
      )}

      {/* Nawigacja */}
      <div className="flex-1 px-[8px] pt-[10px] flex flex-col gap-[10px] overflow-y-auto scrollbar-none">
        {sidebarItems.map(item => (
          <SidebarItem key={item.key} item={item} collapsed={isCollapsed} isMini={isCollapsed} />
        ))}
      </div>

      {/* Separator przed Ustawieniami (bez etykiety) */}
      <AnimatePresence>
        <motion.div
          key="sepSettings"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="px-[10px] mt-[0px] mb-[0px] h-[20px] flex items-center"
        >
          <div className="h-[1px] w-full bg-slate-300 dark:bg-slate-700" />
        </motion.div>
      </AnimatePresence>

      <SidebarSettings collapsed={isCollapsed} />
    </div>
  )
}
