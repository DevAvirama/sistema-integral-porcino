import Card from '../../../components/ui/Card.jsx'
import { formatCount } from '../../../utils/formatters.js'

function StatsGrid({ stats }) {
  return (
    <section className="mt-6 grid gap-5 xl:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            {stat.title}
          </p>
          <div className="mt-4 flex items-end justify-between gap-4">
            <p className="text-4xl font-black text-slate-950">{formatCount(stat.value)}</p>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-600">
              {stat.detail}
            </span>
          </div>
          <div className="mt-5 h-3 rounded-full bg-slate-100">
            <div className={`h-3 rounded-full ${stat.tone} ${stat.width}`}></div>
          </div>
        </Card>
      ))}
    </section>
  )
}

export default StatsGrid
