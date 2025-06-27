// components/icons/sidebar/NotesIcon.tsx
// Ikona Notatki – symbol kartki z liniami (notatnik / dokument)

export default function NotesIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M5 4h14a2 2 0 0 1 2 2v14l-4 -4H5a2 2 0 0 1 -2 -2V6a2 2 0 0 1 2 -2z" />
      <path d="M9 8h6" />
      <path d="M9 12h4" />
    </svg>
  )
}
