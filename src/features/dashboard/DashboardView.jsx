import DashboardSidebar from '../../components/layout/DashboardSidebar.jsx'
import Card from '../../components/ui/Card.jsx'
import { getDashboardData } from '../../services/dashboard/dashboardService.js'
import { getCurrentUser } from '../../services/auth/authService.js'
import QuickActions from './components/QuickActions.jsx'
import { Outlet, useLocation } from 'react-router-dom'
import RecentActivityTable from './components/RecentActivityTable.jsx'
import StatsGrid from './components/StatsGrid.jsx'
import SystemSuggestion from './components/SystemSuggestion.jsx'

function DashboardView() {
  const { sidebarItems, stats, quickActions, recentActivity } = getDashboardData()
  const location = useLocation()
  const currentUser = getCurrentUser()
  const userRole = currentUser ? currentUser.role : 'operativo'

  // Verifica si estamos exactamente en el inicio del dashboard
  const isDashboardHome = location.pathname === '/dashboard' || location.pathname === '/dashboard/'
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen w-full flex-col xl:flex-row">
        <DashboardSidebar items={sidebarItems} userRole={userRole} />

        <section className="flex-1 px-6 py-8 lg:px-10">
          {isDashboardHome && (
            <Card as="header" className="flex flex-col gap-4 mb-8 rounded-[2rem] lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  Dashboard general
                </p>
                <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950">
                  Resumen de información clave
                </h1>
              </div>
              <div className="rounded-2xl bg-slate-950 px-5 py-4 text-white">
                <p className="text-sm text-slate-400">Lote destacado</p>
                <p className="mt-1 text-xl font-black">Lote #42</p>
              </div>
            </Card>
          )}

          {/* Alertas y Reportes */}
          <section className="mt-8">
            <Outlet />
          </section>

          {isDashboardHome && (
            <>
              <StatsGrid stats={stats} />
              <QuickActions actions={quickActions} />

              <section className="mt-6 grid gap-6 2xl:grid-cols-[1.2fr_0.8fr]">
                <RecentActivityTable rows={recentActivity} />
                <SystemSuggestion />
              </section>
            </>
          )}
        </section>
      </div>
    </main>
  )
}

export default DashboardView
