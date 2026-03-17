function Button({
  as: Component = 'button',
  className = '',
  tone = 'primary',
  type = 'button',
  ...props
}) {
  const tones = {
    primary: 'bg-slate-950 text-white hover:bg-slate-800',
    accent: 'bg-emerald-500 text-slate-950 hover:bg-emerald-400',
    secondary:
      'border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50',
    ghost:
      'border border-white/10 bg-white/0 text-slate-200 hover:bg-white/5 hover:text-white',
    soft: 'border border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-slate-950',
  }

  return (
    <Component
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold transition ${tones[tone]} ${className}`}
      type={Component === 'button' ? type : undefined}
      {...props}
    />
  )
}

export default Button
