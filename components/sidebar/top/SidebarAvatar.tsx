// components/sidebar/top/SidebarAvatar.tsx
// Komponent SidebarAvatar – awatar użytkownika z rozwijanym menu (profil, wyloguj) w dużym sidebarze

'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useClickOutside } from '../../../hooks/useClickOutside'
import clsx from 'clsx'
import { useSidebar } from '../../../context/SidebarContext'
import AvatarCircle from '../../avatar/AvatarCircle'
import AvatarLabel from '../../avatar/AvatarLabel'
import { AnimatePresence, motion } from 'framer-motion'

export default function SidebarAvatar() {
  const { isCollapsed } = useSidebar()
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const toggleDropdown = () => setShowDropdown(prev => !prev)
  useClickOutside(dropdownRef, () => setShowDropdown(false))

  const userName = 'Abcdefghijklmnoprstuw'

  const wrapperClasses = clsx(
    'relative flex p-[10px] mt-[25px] h-[56px]'
  )

  return (
    <div ref={dropdownRef} className={wrapperClasses}>
      <motion.div
        layoutId="sidebar-avatar"
        className="flex-shrink-0"
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      >
        <AvatarCircle onClick={toggleDropdown} />
      </motion.div>

      <AnimatePresence initial={false} mode="sync">
        {!isCollapsed && (
          <motion.div
            key="avatar-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-[15px]"
          >
            <AvatarLabel userName={userName} onClick={toggleDropdown} />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            key="avatar-dropdown"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute left-5 top-full mt-[6px] w-[192px] z-[999]
                       bg-white dark:bg-slate-800 rounded-[12px] shadow-lg
                       border border-slate-200 dark:border-slate-700"
          >
            <div className="p-[10px] text-[14px] text-slate-700 dark:text-slate-300">
              <Link
                href="/profil"
                className="flex items-center gap-[8px] py-[6px] hover:underline"
                onClick={() => setShowDropdown(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] h-[16px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5a9 9 0 0 1 15 0" />
                </svg>
                Profil
              </Link>

              <button
                className="flex items-center gap-[8px] py-[6px] text-red-500 hover:underline"
                onClick={() => setShowDropdown(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[16px] h-[16px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m0 0l4-4m-4 4l4 4m13-6v6a2 2 0 0 1-2 2H9" />
                </svg>
                Wyloguj
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
