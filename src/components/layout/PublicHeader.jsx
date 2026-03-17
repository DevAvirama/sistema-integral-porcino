import { Link } from 'react-router-dom'
import BrandMark from '../BrandMark.jsx'
import Button from '../ui/Button.jsx'

function PublicHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/50 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <BrandMark />
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#caracteristicas" className="transition hover:text-slate-950">
            Caracteristicas
          </a>
          <a href="#modulos" className="transition hover:text-slate-950">
            Modulos
          </a>
          <a href="#impacto" className="transition hover:text-slate-950">
            Impacto
          </a>
        </nav>
        <Button as={Link} to="/login" className="rounded-full px-5 py-2.5 text-sm" tone="primary">
          Acceder
        </Button>
      </div>
    </header>
  )
}

export default PublicHeader
