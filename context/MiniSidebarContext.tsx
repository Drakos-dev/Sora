// context/MiniSidebarContext.tsx
// Kontekst MiniSidebaru – zarządza rozwiniętym submenu (tylko jedno aktywne naraz)

'use client'

import { createContext, useContext, useState } from 'react'

// 🧩 Typ danych przechowywanych w kontekście MiniSidebaru
type MiniSidebarContextType = {
  expandedItemKey: string | null
  toggleItem: (key: string) => void
  closeAll: () => void
}

// 🧩 Utworzenie kontekstu
const MiniSidebarContext = createContext<MiniSidebarContextType | undefined>(undefined)

// 🧩 Provider – logika przechowywania pojedynczego rozwiniętego submenu
export const MiniSidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [expandedItemKey, setExpandedItemKey] = useState<string | null>(null)

  const toggleItem = (key: string) => {
    setExpandedItemKey(prev => (prev === key ? null : key))
  }

  const closeAll = () => {
    setExpandedItemKey(null)
  }

  return (
    <MiniSidebarContext.Provider value={{ expandedItemKey, toggleItem, closeAll }}>
      {children}
    </MiniSidebarContext.Provider>
  )
}

// 🧩 Hook do użycia kontekstu w komponentach MiniSidebara
export const useMiniSidebar = () => {
  const context = useContext(MiniSidebarContext)
  if (context === undefined) {
    throw new Error('useMiniSidebar must be used within a MiniSidebarProvider')
  }
  return context
}
