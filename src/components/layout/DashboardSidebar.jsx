import { Link, NavLink } from 'react-router-dom'
import BrandMark from '../BrandMark.jsx'
import Button from '../ui/Button.jsx'

export default function DashboardSidebar({ items }) {
  return (
    <aside className="w-full bg-slate-950 px-6 py-8 text-white xl:min-h-screen xl:w-80 xl:px-8">
      <BrandMark light />

      <nav className="mt-8 grid gap-2">
        {items.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) =>
              `rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                isActive
                  ? 'bg-emerald-400 text-slate-950'
                  : 'bg-white/0 text-slate-300 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <Button as={Link} className="mt-8" to="/" tone="ghost">
        Volver a la landing
      </Button>

      
    </aside>
  )
}


