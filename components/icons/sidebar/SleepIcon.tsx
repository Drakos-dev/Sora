// components/icons/sidebar/SleepIcon.tsx
// Ikona Sen – symbol księżyca (reprezentuje sen i noc)

export default function SleepIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 12a8 8 0 1 1 -8 -8a6 6 0 0 0 8 8z" />
    </svg>
  )
}
