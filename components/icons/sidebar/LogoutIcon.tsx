// components/icons/sidebar/LogoutIcon.tsx
// Ikona Wyloguj – symbol wychodzenia z aplikacji (strzałka w lewo z drzwi)

export default function LogoutIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 12H3" />
      <path d="M3 12l4-4" />
      <path d="M3 12l4 4" />
      <path d="M20 6v12a2 2 0 0 1 -2 2H9" />
    </svg>
  )
}
