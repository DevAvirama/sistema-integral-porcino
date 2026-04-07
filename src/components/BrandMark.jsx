import logo from '../assets/SENA.png'

export default function BrandMark({ light }) {

  return (
    <div className="flex items-center gap-3">
      <img src={logo} alt="Logo SENA" className="h-10 w-auto" />
      <div>
        <p className={`text-2xl font-black tracking-tight ${light ? 'text-white' : 'text-sena-blue'}`}>
          Porci<span className="text-sena-green font-black">Tech</span>
        </p>
      </div>
    </div>
  )
}