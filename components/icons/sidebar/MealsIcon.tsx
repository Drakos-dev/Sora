// components/icons/sidebar/MealsIcon.tsx
// Ikona Posiłków – widelec i nóż (sekcja „Posiłki” w sidebarze)

export default function MealsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M4 3v7" />
      <path d="M8 3v7" />
      <path d="M4 7h4" />
      <path d="M10 5h4a2 2 0 0 1 2 2v4" />
      <path d="M14 7v13" />
      <path d="M18 15v-6a2 2 0 1 1 4 0v6" />
      <path d="M18 19h4" />
    </svg>
  )
}
