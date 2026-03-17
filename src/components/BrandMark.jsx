function BrandMark({ compact = false, light = false }) {
  const textTone = light ? 'text-white' : 'text-slate-950'
  const subTone = light ? 'text-emerald-300' : 'text-emerald-700'

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 via-lime-300 to-yellow-300 text-base font-black text-slate-950 shadow-lg shadow-emerald-950/10">
        S
      </div>
      <div>
        <p className={`text-sm font-semibold uppercase tracking-[0.28em] ${subTone}`}>
          SENA
        </p>
        <p className={`text-lg font-black tracking-tight ${textTone}`}>
          {compact ? 'PorciTech' : 'Sistema Integral Porcino'}
        </p>
      </div>
    </div>
  )
}

export default BrandMark
