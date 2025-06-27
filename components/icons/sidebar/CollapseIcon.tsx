// components/icons/sidebar/CollapseIcon.tsx
// Ikona „Zwiń wszystkie” – strzałka ▲ z możliwością obracania

export default function CollapseIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 15l7-7 7 7" />
    </svg>
  )
}
