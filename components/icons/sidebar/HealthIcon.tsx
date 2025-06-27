// components/icons/sidebar/HealthIcon.tsx
// Ikona Zdrowie – serce z linią pulsu (EKG)

export default function HealthIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 12h4l2 5l4 -10l2 5h4" />
      <path d="M20.39 15.61a5.5 5.5 0 0 0 -7.78 -7.78L12 8.44l-.61 -.61a5.5 5.5 0 1 0 -7.78 7.78l.61 .61L12 21.23l7.78 -7.78z" />
    </svg>
  )
}
