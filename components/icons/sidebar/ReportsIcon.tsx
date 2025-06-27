// components/icons/sidebar/ReportsIcon.tsx
// Ikona Raporty – wykres słupkowy (symbol analizy lub statystyk)

export default function ReportsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 17h2v-7H3z" />
      <path d="M7 17h2v-4H7z" />
      <path d="M11 17h2v-10h-2z" />
      <path d="M15 17h2v-2h-2z" />
      <path d="M19 17h2v-6h-2z" />
    </svg>
  )
}
