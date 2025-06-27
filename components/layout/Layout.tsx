'use client'

import Header from './Header'
import Sidebar from './Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex bg-[#f8f9fa] dark:bg-[#111418]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto pt-[72px]">
          {children}
        </main>
      </div>
    </div>
  )
}
