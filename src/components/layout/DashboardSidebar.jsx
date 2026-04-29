import { Link, NavLink } from 'react-router-dom'
import BrandMark from '../BrandMark.jsx'
import Button from '../ui/Button.jsx'

export default function DashboardSidebar({ items, userRole = 'administrador' }) {
  // Lógica de filtrado basada en el rol
  const filteredItems = items.filter(item => {
    if (userRole === 'veterinario') {
      // Veterinario no ve Alimentación ni Peso
      return !['/dashboard/feeding', '/dashboard/weight'].includes(item.path);
    }
    if (userRole === 'operativo') {
      // Operativo no ve Salud, Reproducción, Reportes ni Configuración
      return !['/dashboard/health', '/dashboard/reproduction', '/dashboard/reports', '/dashboard/settings'].includes(item.path);
    }
    // Administrador u otros ven todo
    return true;
  });

  return (
    <aside className="w-full bg-slate-950 px-6 py-8 text-white xl:min-h-screen xl:w-80 xl:px-8 flex flex-col">
      <BrandMark light />

      <nav className="mt-8 grid gap-2 flex-1">
        {filteredItems.map((item) => (
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

