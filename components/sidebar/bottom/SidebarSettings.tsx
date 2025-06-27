// components/sidebar/bottom/SidebarSettings.tsx
// Komponent SidebarSettings – dolna sekcja sidebaru zawierająca przycisk do ustawień i komponent wersji aplikacji

'use client'

import SidebarItem from '../middle/SidebarItemBig'
import SidebarVersion from './SidebarVersion'

type Props = {
  collapsed: boolean
}

export default function SidebarSettings({ collapsed }: Props) {
  return (
    <div className="mt-auto px-[8px] pt-[0px] pb-[6px] flex flex-col gap-[6px]">
      <SidebarItem
        item={{
          key: 'ustawienia',
          label: 'Ustawienia',
          baseRoute: '/ustawienia',
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 w-[20px] h-[20px]"
            >
              <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            </svg>
          ),
        }}
        collapsed={collapsed}
      />
      <SidebarVersion collapsed={collapsed} />
    </div>
  )
}
