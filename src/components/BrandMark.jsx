import logo from '../assets/SENA.png'

export default function BrandMark({ light }) {

  return (
    <div className="flex flex-col items-center">
    <img src={logo} alt="SENA" className="h-14 mb-2" />

    <h1 className="text-3xl font-black">
        Porci<span className="text-[#39A900]">Tech</span>
    </h1>
</div>
  )
}
