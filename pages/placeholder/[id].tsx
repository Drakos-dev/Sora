import { useRouter } from 'next/router'

export default function PlaceholderSubpage() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="p-6 text-center text-slate-700 dark:text-slate-200">
      <h1 className="text-2xl font-semibold mb-2">Placeholder {id}</h1>
      <p className="text-sm">To jest tymczasowa strona pod nazwą <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">/placeholder/{id}</code>.</p>
    </div>
  )
}
