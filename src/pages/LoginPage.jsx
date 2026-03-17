import { Link, useNavigate } from 'react-router-dom'
import BrandMark from '../components/BrandMark.jsx'

function LoginPage() {
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <main className="grid min-h-screen bg-slate-950 lg:grid-cols-[1.1fr_0.9fr]">
      <section className="relative hidden overflow-hidden lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.22),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(250,204,21,0.16),transparent_26%),linear-gradient(180deg,#020617_0%,#0f172a_100%)]"></div>
        <div className="relative flex h-full flex-col justify-between p-10 text-white">
          <BrandMark light />
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              Acceso seguro
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight">
              Bienvenido al Sistema Integral de Gestion Porcina
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Desde aqui puedes entrar al panel principal y continuar la migracion
              del sistema original a una experiencia moderna en React.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <p className="text-sm text-slate-300">Acceso de demostracion</p>
            <p className="mt-2 text-2xl font-black">Usuario operativo</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Este formulario ya navega al dashboard y queda listo para conectar autenticacion real despues.
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-md rounded-[2rem] border border-slate-800 bg-white p-8 shadow-2xl shadow-slate-950/30 sm:p-10">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Iniciar sesion
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950">
                Ingresa a tu cuenta
              </h2>
            </div>
            <div className="lg:hidden">
              <BrandMark compact />
            </div>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Usuario</span>
              <input
                type="email"
                defaultValue="operador@porcitech.co"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">Contrasena</span>
              <input
                type="password"
                defaultValue="Sena2026*"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
              />
            </label>

            <div className="flex items-center justify-between gap-4 text-sm">
              <a href="/" className="font-medium text-emerald-700 transition hover:text-emerald-800">
                ¿Olvidaste tu contrasena?
              </a>
              <span className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-500">
                Demo
              </span>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-slate-950 px-5 py-3.5 font-semibold text-white transition hover:bg-slate-800"
            >
              Ingresar al dashboard
            </button>
          </form>

          <div className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">
            <p>
              Vista basada en el modulo de inicio de sesion del repositorio original.
            </p>
            <Link to="/" className="mt-3 inline-flex font-semibold text-emerald-700 hover:text-emerald-800">
              Volver a la landing
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default LoginPage
