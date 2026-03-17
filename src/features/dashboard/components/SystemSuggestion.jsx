import Card from '../../../components/ui/Card.jsx'
import Button from '../../../components/ui/Button.jsx'

function SystemSuggestion() {
  return (
    <Card className="bg-slate-950 text-white shadow-xl shadow-slate-300/20">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
        Sugerencia del sistema
      </p>
      <h3 className="mt-4 text-3xl font-black">Optimiza el feed del Lote #42</h3>
      <p className="mt-4 leading-7 text-slate-300">
        Basado en el crecimiento actual, conviene ajustar la racion para mejorar
        conversion y reducir desperdicio en la siguiente semana.
      </p>
      <Button className="mt-8" tone="accent">
        Ver detalles
      </Button>
    </Card>
  )
}

export default SystemSuggestion
