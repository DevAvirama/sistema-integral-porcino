import { Link, useNavigate } from 'react-router-dom'
import BrandMark from '../BrandMark.jsx'
import Button from '../ui/Button.jsx'

function DashboardSidebar({ items }) {
  const navigate = useNavigate();
  return (
    <aside className="w-full bg-slate-950 px-6 py-8 text-white xl:min-h-screen xl:w-80 xl:px-8">
      <BrandMark light />

      <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
          Estado general
        </p>
        <p className="mt-3 text-3xl font-black">Operativo</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Dashboard inicial migrado desde la version HTML original.
        </p>
      </div>

      <nav className="mt-8 grid gap-2">
        {items.map((item, index) => (
          <button
            key={item}
            type="button"
            // Cuando hagas clic en "Alertas y reportes", te llevará a tu página
            onClick={(e) => {
              e.preventDefault();
              if (item === "Alertas y reportes") {
                navigate('/dashboard/animals'); // Asegúrate que esta ruta coincida con App.jsx
              }
            }}
            className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition-all ${
              // Mantenemos el estilo original de tu compañero
              index === 0 
                ? 'bg-emerald-400 text-slate-950' 
                : 'bg-white/0 text-slate-300 hover:bg-white/5'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      <Button as={Link} className="mt-8" to="/" tone="ghost">
        Volver a la landing
      </Button>

      
    </aside>
  )
}

export default DashboardSidebar
