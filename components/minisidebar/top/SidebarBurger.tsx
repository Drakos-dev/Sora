// components/MiniSidebar/top/SidebarBurger.tsx
// Komponent SidebarBurger (mini) – hamburger do przełączania mini sidebaru

'use client'

import { useSidebar } from '../../../context/SidebarContext'

export default function SidebarBurger() {
  const { toggleCollapsed } = useSidebar()

  return (
    <div className="px-[8px] pt-[6px] pb-[4px]">
      <button
        onClick={toggleCollapsed}
        title="Przełącz sidebar"
        className="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[20px] h-[20px] stroke-[1.8] text-slate-600 dark:text-slate-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </svg>
      </button>
    </div>
  )
}
