import { Loader2Icon } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = lazy(() => import ('./page/Home'))
const History = lazy(() => import ('./page/history'))
const Starred = lazy(() => import ('./page/Starred'))

export function Router() {
  return (
    <Suspense
      fallback={(
        <div className="flex items-center gap-2">
          <Loader2Icon className="animate-spin" />
          <span>Carregando...</span>
        </div>
      )}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/starred" element={<Starred />} />
      </Routes>
    </Suspense>
  )
}