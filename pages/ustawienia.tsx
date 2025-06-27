import { ThemeSwitchSettings } from '../components/ThemeSwitchSettings'

export default function Ustawienia() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Ustawienia</h1>
      <div className="flex items-center">
        <span className="mr-4 text-sm">Motyw strony</span>
        <ThemeSwitchSettings />
      </div>
    </div>
  )
}
