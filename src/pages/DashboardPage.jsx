import { Link } from 'react-router-dom'
import BrandMark from '../components/BrandMark.jsx'

const sidebarItems = [
  'Inicio',
  'Alimentacion',
  'Registro de peso',
  'Reproduccion',
  'Inventario y ventas',
  'Vacunacion',
  'Alertas y reportes',
  'Configuracion de usuarios',
]

const stats = [
  {
    title: 'Total de cerdos',
    value: '1500',
    detail: '+2.5%',
    width: 'w-[88%]',
    tone: 'bg-emerald-500',
  },
  {
    title: 'Cerdos en crecimiento',
    value: '1200',
    detail: '80% del total',
    width: 'w-[80%]',
    tone: 'bg-sky-500',
  },
  {
    title: 'Listos para venta',
    value: '300',
    detail: '20% del total',
    width: 'w-[35%]',
    tone: 'bg-amber-400',
  },
]

const quickActions = [
  'Registrar nuevo cerdo',
  'Ver inventario',
  'Registrar alimentacion',
  'Ver reportes de salud',
]

const recentActivity = [
  { title: 'Nuevo lote registrado', meta: 'Hace 2 horas - Sector B-04', tone: 'bg-emerald-500' },
  { title: 'Vacunacion completada', meta: 'Hace 5 horas - Sector A-12', tone: 'bg-sky-500' },
  { title: 'Alerta de peso bajo', meta: 'Ayer - Corral 09', tone: 'bg-amber-400' },
]

function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col xl:flex-row">
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
            {sidebarItems.map((item, index) => (
              <button
                key={item}
                type="button"
                className={`rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  index === 0
                    ? 'bg-emerald-400 text-slate-950'
                    : 'bg-white/0 text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <Link
            to="/"
            className="mt-8 inline-flex rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5"
          >
            Volver a la landing
          </Link>
        </aside>

        <section className="flex-1 px-6 py-8 lg:px-10">
          <header className="flex flex-col gap-4 rounded-[2rem] bg-white p-6 shadow-sm shadow-slate-200/70 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Dashboard general
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
                Resumen de informacion clave
              </h1>
            </div>
            <div className="rounded-2xl bg-slate-950 px-5 py-4 text-white">
              <p className="text-sm text-slate-400">Lote destacado</p>
              <p className="mt-1 text-xl font-black">Lote #42</p>
            </div>
          </header>

          <section className="mt-6 grid gap-5 xl:grid-cols-3">
            {stats.map((stat) => (
              <article key={stat.title} className="rounded-[1.75rem] bg-white p-6 shadow-sm shadow-slate-200/70">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {stat.title}
                </p>
                <div className="mt-4 flex items-end justify-between gap-4">
                  <p className="text-4xl font-black text-slate-950">{stat.value}</p>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
                    {stat.detail}
                  </span>
                </div>
                <div className="mt-5 h-3 rounded-full bg-slate-100">
                  <div className={`h-3 rounded-full ${stat.tone} ${stat.width}`}></div>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-6 rounded-[2rem] bg-white p-6 shadow-sm shadow-slate-200/70">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-lg">
                ⚡
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Accesos rapidos
                </p>
                <h2 className="text-2xl font-black text-slate-950">Acciones frecuentes</h2>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {quickActions.map((action) => (
                <button
                  key={action}
                  type="button"
                  className="rounded-[1.5rem] border border-slate-200 bg-slate-50 px-5 py-4 text-left font-semibold text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-slate-950"
                >
                  {action}
                </button>
              ))}
            </div>
          </section>

          <section className="mt-6 grid gap-6 2xl:grid-cols-[1.2fr_0.8fr]">
            <article className="rounded-[2rem] bg-white p-6 shadow-sm shadow-slate-200/70">
              <h3 className="text-2xl font-black text-slate-950">Actividad reciente</h3>
              <div className="mt-6 space-y-5">
                {recentActivity.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className={`mt-1.5 h-3 w-3 rounded-full ${item.tone}`}></span>
                    <div>
                      <p className="font-semibold text-slate-900">{item.title}</p>
                      <p className="mt-1 text-sm text-slate-500">{item.meta}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl shadow-slate-300/20">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Sugerencia del sistema
              </p>
              <h3 className="mt-4 text-3xl font-black">
                Optimiza el feed del Lote #42
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Basado en el crecimiento actual, conviene ajustar la racion para
                mejorar conversion y reducir desperdicio en la siguiente semana.
              </p>
              <button
                type="button"
                className="mt-8 rounded-2xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                Ver detalles
              </button>
            </article>
          </section>
        </section>
      </div>
    </main>
  )
}

export default DashboardPage
