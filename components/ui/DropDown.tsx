// components/ui/Dropdown.tsx
// Uniwersalny komponent Dropdown – obsługuje rozwijanie menu z animacjami i zamykaniem po kliknięciu poza

'use client'

import { ReactNode, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useClickOutside } from '../../hooks/useClickOutside'
import clsx from 'clsx'

type DropdownProps = {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  className?: string
  position?: 'bottom' | 'right' | 'left' | 'top'
  style?: React.CSSProperties
}

export function Dropdown({
  children,
  isOpen,
  onClose,
  className,
  position = 'bottom',
  style,
}: DropdownProps) {
  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(ref, () => {
    if (isOpen) onClose()
  })

  // Pozycjonowanie - uproszczone, można rozszerzyć
  const positionClasses = {
    bottom: 'origin-top',
    right: 'origin-left',
    left: 'origin-right',
    top: 'origin-bottom',
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          className={clsx(
            'absolute z-[999] rounded-md bg-white dark:bg-slate-800 shadow-lg',
            positionClasses[position],
            className
          )}
          style={style}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
