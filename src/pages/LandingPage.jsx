import { Link } from 'react-router-dom'
import BrandMark from '../components/BrandMark.jsx'

const stats = [
  { value: '+500', label: 'Granjas conectadas' },
  { value: '24/7', label: 'Monitoreo activo' },
  { value: '35%', label: 'Ahorro estimado en insumos' },
  { value: '10k+', label: 'Registros analizados' },
]

const features = [
  {
    title: 'Analisis predictivo',
    body: 'Anticipa cambios en crecimiento, consumo y estado sanitario con paneles claros y accionables.',
  },
  {
    title: 'Salud animal',
    body: 'Centraliza seguimientos de vacunacion, alertas y observaciones por lote o corral.',
  },
  {
    title: 'Operacion diaria',
    body: 'Registra alimentacion, peso y reproduccion en una interfaz pensada para trabajo de campo.',
  },
]

function LandingPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_30%),linear-gradient(180deg,#f8fafc_0%,#eff6ff_45%,#ecfccb_100%)] text-slate-900">
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
          <Link
            to="/login"
            className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Acceder
          </Link>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
            Innovacion aplicada a porcicultura
          </div>
          <div className="space-y-5">
            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl">
              Gestiona tu produccion porcina con React, datos claros y una interfaz moderna
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Esta nueva base traslada el proyecto original a una aplicacion React
              con Tailwind, dejando lista una experiencia inicial con landing,
              inicio de sesion y dashboard.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/dashboard"
              className="rounded-2xl bg-emerald-500 px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
            >
              Ver dashboard
            </Link>
            <Link
              to="/login"
              className="rounded-2xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50"
            >
              Iniciar sesion
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-yellow-300/50 blur-3xl"></div>
          <div className="absolute -right-4 bottom-10 h-36 w-36 rounded-full bg-emerald-400/40 blur-3xl"></div>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-slate-950 p-6 shadow-2xl shadow-slate-950/20">
            <div className="mb-6 flex items-center justify-between">
              <BrandMark compact light />
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Activo
              </span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="rounded-3xl bg-white/5 p-5 text-white ring-1 ring-white/10">
                <p className="text-sm text-slate-400">Eficiencia productiva</p>
                <p className="mt-2 text-4xl font-black">98%</p>
                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[98%] rounded-full bg-emerald-400"></div>
                </div>
              </article>
              <article className="rounded-3xl bg-white p-5 text-slate-950">
                <p className="text-sm text-slate-500">Alertas activas</p>
                <p className="mt-2 text-4xl font-black">06</p>
                <p className="mt-4 text-sm text-slate-600">
                  Dos criticas y cuatro preventivas.
                </p>
              </article>
              <article className="rounded-3xl bg-emerald-400 p-5 text-slate-950 sm:col-span-2">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-950/70">
                      Modulos clave
                    </p>
                    <p className="mt-2 text-2xl font-black">Alimentacion, peso y vacunacion</p>
                  </div>
                  <p className="max-w-sm text-sm leading-6 text-emerald-950/80">
                    La estructura base ya esta pensada para migrar progresivamente el resto del sistema.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="impacto" className="border-y border-slate-200/70 bg-white/70">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-sm"
            >
              <p className="text-3xl font-black text-slate-950">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="caracteristicas" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">
            Ecosistema integral
          </p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">
            Soluciones para cada etapa operativa
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => (
            <article
              key={feature.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-lg font-black text-white">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-black text-slate-950">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="modulos" className="bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Migracion inicial
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white">
              Tres vistas ya listas para seguir construyendo
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Landing publica', 'Inicio de sesion', 'Dashboard general'].map((item) => (
              <article
                key={item}
                className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-slate-200"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
                  Modulo
                </p>
                <p className="mt-3 text-xl font-black text-white">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default LandingPage
