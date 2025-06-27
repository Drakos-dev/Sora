// context/SidebarContext.tsx
// Kontekst dla dużego sidebaru – zarządza stanem rozwiniętych zakładek i trybem zwinięcia

'use client'

import { createContext, useContext, useEffect, useState } from 'react'

// 🧩 Typ danych przechowywanych w kontekście
type SidebarContextType = {
  expandedItems: string[]
  toggleItem: (key: string) => void
  isCollapsed: boolean
  toggleCollapsed: () => void
}

// 🧩 Utworzenie kontekstu
const SidebarContext = createContext<SidebarContextType | undefined>(undefined)

// 🧩 Provider – zarządza stanem sidebaru (rozwinięcie i zwinięcie)
export const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  useEffect(() => {
    const stored = localStorage.getItem('sidebarCollapsed')
    if (stored !== null) setIsCollapsed(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('sidebarCollapsed', JSON.stringify(isCollapsed))
  }, [isCollapsed])

  const toggleItem = (key: string) => {
    setExpandedItems((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [key]
    )
  }

  const toggleCollapsed = () => {
    setIsCollapsed((prev) => !prev)
  }

  return (
    <SidebarContext.Provider value={{ expandedItems, toggleItem, isCollapsed, toggleCollapsed }}>
      {children}
    </SidebarContext.Provider>
  )
}

// 🧩 Hook do użycia kontekstu w komponentach
export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
