// data/MiniSidebarData.tsx
// Dane dla MiniSidebar – 5 sekcji z 5 linkami placeholderowymi każda

import MealsIcon from '../components/icons/sidebar/MealsIcon'
import DashboardIcon from '../components/icons/sidebar/DashboardIcon'
import HealthIcon from '../components/icons/sidebar/HealthIcon'
import SleepIcon from '../components/icons/sidebar/SleepIcon'
import AddictionsIcon from '../components/icons/sidebar/AddictionsIcon'

export type SidebarChildLink = {
  label: string
  href: string
}

export type SidebarItem = {
  key: string
  label: string
  baseRoute: string
  children?: SidebarChildLink[]
  icon: JSX.Element
}

export const sidebarItems: SidebarItem[] = [
  {
    key: 'posilki',
    label: 'Posiłki',
    baseRoute: '/posilki',
    icon: <MealsIcon />,
    children: [
      { label: 'Placeholder 1', href: '/placeholder/posilki-1' },
      { label: 'Placeholder 2', href: '/placeholder/posilki-2' },
      { label: 'Placeholder 3', href: '/placeholder/posilki-3' },
      { label: 'Placeholder 4', href: '/placeholder/posilki-4' },
      { label: 'Placeholder 5', href: '/placeholder/posilki-5' },
    ],
  },
  {
    key: 'aktywnosc',
    label: 'Aktywność',
    baseRoute: '/aktywnosc',
    icon: <DashboardIcon />,
    children: [
      { label: 'Placeholder 1', href: '/placeholder/aktywnosc-1' },
      { label: 'Placeholder 2', href: '/placeholder/aktywnosc-2' },
      { label: 'Placeholder 3', href: '/placeholder/aktywnosc-3' },
      { label: 'Placeholder 4', href: '/placeholder/aktywnosc-4' },
      { label: 'Placeholder 5', href: '/placeholder/aktywnosc-5' },
    ],
  },
  {
    key: 'zdrowie',
    label: 'Zdrowie',
    baseRoute: '/zdrowie',
    icon: <HealthIcon />,
    children: [
      { label: 'Placeholder 1', href: '/placeholder/zdrowie-1' },
      { label: 'Placeholder 2', href: '/placeholder/zdrowie-2' },
      { label: 'Placeholder 3', href: '/placeholder/zdrowie-3' },
      { label: 'Placeholder 4', href: '/placeholder/zdrowie-4' },
      { label: 'Placeholder 5', href: '/placeholder/zdrowie-5' },
    ],
  },
  {
    key: 'sen',
    label: 'Sen',
    baseRoute: '/sen',
    icon: <SleepIcon />,
    children: [
      { label: 'Placeholder 1', href: '/placeholder/sen-1' },
      { label: 'Placeholder 2', href: '/placeholder/sen-2' },
      { label: 'Placeholder 3', href: '/placeholder/sen-3' },
      { label: 'Placeholder 4', href: '/placeholder/sen-4' },
      { label: 'Placeholder 5', href: '/placeholder/sen-5' },
    ],
  },
  {
    key: 'uzywki',
    label: 'Używki',
    baseRoute: '/uzywki',
    icon: <AddictionsIcon />,
    children: [
      { label: 'Placeholder 1', href: '/placeholder/uzywki-1' },
      { label: 'Placeholder 2', href: '/placeholder/uzywki-2' },
      { label: 'Placeholder 3', href: '/placeholder/uzywki-3' },
      { label: 'Placeholder 4', href: '/placeholder/uzywki-4' },
      { label: 'Placeholder 5', href: '/placeholder/uzywki-5' },
    ],
  },
]
