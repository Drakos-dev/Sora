// components/MiniSidebar/top/SidebarAvatar.tsx
// Komponent SidebarAvatar (mini) – avatar z rozwijanym menu w mini sidebarze (z kontekstem mini)

'use client'

import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickOutside } from '../../../hooks/useClickOutside'
import AvatarCircle from '../../avatar/AvatarCircle'
import MiniSubmenu from '../submenu/MiniSubmenu'

export default function SidebarAvatar() {
  const [showDropdown, setShowDropdown] = useState(false)
  const ref = useRef(null)

  useClickOutside(ref, () => setShowDropdown(false))

  return (
    <div ref={ref} className="relative px-[8px] pt-[10px]">
      <motion.div layoutId="sidebar-avatar" transition={{ type: 'spring', stiffness: 500, damping: 30 }}>
        <AvatarCircle onClick={() => setShowDropdown(prev => !prev)} />
      </motion.div>

      <AnimatePresence>
        {showDropdown && (
          <MiniSubmenu
            items={[
              { href: '/profil', label: 'Profil' },
              { href: '/wyloguj', label: 'Wyloguj' }
            ]}
            position="right"
          />
        )}
      </AnimatePresence>
    </div>
  )
}
