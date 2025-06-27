// components/icons/sidebar/AddictionsIcon.tsx
// Ikona Używki – symbol przekreślonego papierosa lub dymka

export default function AddictionsIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 12h9" />
      <path d="M16 12h5" />
      <path d="M18 8c0 -2 2 -2 2 -4" />
      <path d="M16 16c0 -2 -2 -2 -2 -4" />
    </svg>
  )
}
