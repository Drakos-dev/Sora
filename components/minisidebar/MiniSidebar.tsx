// components/MiniSidebar/MiniSidebar.tsx
// Komponent MiniSidebar – miniaturowa wersja sidebara z ikonami i uproszczoną strukturą (bez animacji szerokości)

'use client'

import { sidebarItems } from '../../data/SidebarData'
import SidebarItem from './middle/SidebarItemMini'
import SidebarSettings from './bottom/SidebarSettings'
import clsx from 'clsx'

export default function MiniSidebar() {
  return (
    <div
      className={clsx(
        'flex flex-col min-h-screen w-[64px] overflow-visible',
        'bg-white dark:bg-slate-900 text-black dark:text-white',
        'shadow-md border-r border-slate-200 dark:border-slate-700',
        'transition-none'
      )}
    >
      {/* Ikony główne */}
      <div className="flex flex-col pt-[10px] gap-[8px] px-[8px]">
        {sidebarItems.map(item => (
          <SidebarItem key={item.key} item={item} collapsed={true} isMini />
        ))}
      </div>

      {/* Separator przed ustawieniami */}
      <div className="mt-auto px-[8px] pt-[10px] pb-[6px]">
        <div className="h-[1px] w-full bg-slate-300 dark:bg-slate-700 mb-[6px]" />
        <SidebarSettings collapsed={true} />
      </div>
    </div>
  )
}
