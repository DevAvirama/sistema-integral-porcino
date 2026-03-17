import BrandMark from '../../../components/BrandMark.jsx'
import Card from '../../../components/ui/Card.jsx'

function LoginShowcase() {
  return (
    <>
      <BrandMark light />
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Acceso seguro
        </p>
        <h1 className="mt-4 text-5xl font-black tracking-tight">
          Bienvenido al Sistema Integral de Gestion Porcina
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          Desde aqui puedes entrar al panel principal y continuar la migracion del
          sistema original a una experiencia moderna en React.
        </p>
      </div>
      <Card className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white backdrop-blur-sm shadow-none">
        <p className="text-sm text-slate-300">Acceso de demostracion</p>
        <p className="mt-2 text-2xl font-black">Usuario operativo</p>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Este formulario ya navega al dashboard y queda listo para conectar
          autenticacion real despues.
        </p>
      </Card>
    </>
  )
}

export default LoginShowcase
