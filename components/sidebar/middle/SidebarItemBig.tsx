// components/sidebar/middle/SidebarItemBig.tsx
// Komponent SidebarItemBig – pojedynczy kafelek dużego sidebaru z obsługą submenu, animacjami i aktywnego stanu

'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { SidebarItem as ItemType } from '../../../data/SidebarData'
import { useSidebar } from '../../../context/SidebarContext'

type Props = {
  item: ItemType
  collapsed: boolean
  wrapperClassName?: string
  isMini?: boolean // ← to dodaj
}

export default function SidebarItem({ item, collapsed, wrapperClassName, isMini }: Props) {
  const pathname = usePathname() || ''
  const router = useRouter()
  const { expandedItems, toggleItem } = useSidebar()

  const isExpandable = !!item.children?.length
  const isExpanded = expandedItems.includes(item.key)
  const isActiveRoute = pathname.startsWith(item.baseRoute)

  const handleClick = (e: React.MouseEvent) => {
    if (isExpandable) {
      e.preventDefault()
      toggleItem(item.key)
    } else {
      e.preventDefault()
      router.push(item.baseRoute)
    }
  }

  return (
    <div className={clsx('relative', wrapperClassName)}>
      <Link
        href={item.baseRoute}
        onClick={handleClick}
        className={clsx(
          'flex items-center h-[48px] w-full px-[12px] rounded-[16px] transition-colors transition-transform duration-300',
          (isActiveRoute || (!isMini && isExpanded))
            ? clsx(
                'bg-gray-200 dark:bg-slate-700 text-black dark:text-white',
                isMini ? 'translate-x-[2px]' : 'translate-x-[5px]'
              )
            : 'bg-[#f1f5f9] dark:bg-slate-800 text-slate-700 dark:text-slate-300',
          'hover:bg-slate-200 dark:hover:bg-slate-700'
        )}
      >
        <div className="flex-shrink-0">{item.icon}</div>

        <AnimatePresence initial={false}>
          {!collapsed && (
            <motion.span
              key="label"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="ml-[10px] whitespace-nowrap font-medium text-[15px]"
            >
              {item.label}
            </motion.span>
          )}
        </AnimatePresence>

        {isExpandable && !collapsed && (
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx(
              'w-[10px] h-[10px] ml-auto transition-transform duration-200',
              isExpanded ? 'rotate-180' : 'rotate-0'
            )}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 1.67a2.914 2.914 0 0 0 -2.492 1.403l-8.11 13.537a2.914 2.914 0 0 0 2.484 4.385h16.225a2.914 2.914 0 0 0 2.503 -4.371l-8.116 -13.546a2.917 2.917 0 0 0 -2.494 -1.408z" />
          </motion.svg>
        )}
      </Link>

      <AnimatePresence initial={false}>
        {isExpandable && isExpanded && !collapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-visible"
          >
            <div className="flex flex-col gap-[2px] mt-[6px] pl-[9px] relative">
              <div className="absolute left-0 top-0 h-full border-l-[3px] border-slate-300 dark:border-slate-600 rounded-full" />
              {item.children!.map(child => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={clsx(
                    'block pl-0 py-[4px] text-[14px] text-slate-600 dark:text-slate-300 hover:underline',
                    pathname === child.href && 'font-semibold underline'
                  )}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
