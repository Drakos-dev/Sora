// components/icons/sidebar/ProfileIcon.tsx
// Ikona Profilu – używana w menu rozwijanym awatara (link do /profil)

export default function ProfileIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
      <path d="M4.5 19.5a9 9 0 0 1 15 0" />
    </svg>
  )
}
