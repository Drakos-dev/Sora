// components/ui/Tooltip.tsx
// Prosty tooltip – pokazuje etykietę po najechaniu, po prawej stronie z offsetem

'use client'

import { ReactNode, useState, useRef } from 'react'
import clsx from 'clsx'

type TooltipProps = {
  content: string
  children: ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  sideOffset?: number
}

export function Tooltip({
  content,
  children,
  side = 'right',
  sideOffset = 8,
}: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // Pozycjonowanie tooltipa – tylko dla 'right' na razie
  const positionClasses = {
    top: 'bottom-full mb-2 left-1/2 transform -translate-x-1/2',
    right: `left-full ml-[${sideOffset}px] top-1/2 -translate-y-1/2`,
    bottom: 'top-full mt-2 left-1/2 transform -translate-x-1/2',
    left: `right-full mr-[${sideOffset}px] top-1/2 -translate-y-1/2`,
  }

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div
          className={clsx(
            'absolute z-50 rounded-md bg-slate-800 px-2 py-1 text-xs text-white whitespace-nowrap select-none',
            positionClasses[side]
          )}
          role="tooltip"
        >
          {content}
          <div
            className={clsx(
              'absolute w-2 h-2 bg-slate-800 rotate-45',
              {
                'top-1/2 -left-1/2 -translate-y-1/2': side === 'right',
                'top-1/2 -right-1/2 -translate-y-1/2': side === 'left',
                'left-1/2 -bottom-1/2 -translate-x-1/2': side === 'top',
                'left-1/2 -top-1/2 -translate-x-1/2': side === 'bottom',
              }
            )}
          />
        </div>
      )}
    </div>
  )
}
