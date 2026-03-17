export function getDashboardData() {
  return {
    sidebarItems: [
      'Inicio',
      'Alimentacion',
      'Registro de peso',
      'Reproduccion',
      'Inventario y ventas',
      'Vacunacion',
      'Alertas y reportes',
      'Configuracion de usuarios',
    ],
    stats: [
      {
        title: 'Total de cerdos',
        value: 1500,
        detail: '+2.5%',
        width: 'w-[88%]',
        tone: 'bg-emerald-500',
      },
      {
        title: 'Cerdos en crecimiento',
        value: 1200,
        detail: '80% del total',
        width: 'w-[80%]',
        tone: 'bg-sky-500',
      },
      {
        title: 'Listos para venta',
        value: 300,
        detail: '20% del total',
        width: 'w-[35%]',
        tone: 'bg-amber-400',
      },
    ],
    quickActions: [
      'Registrar nuevo cerdo',
      'Ver inventario',
      'Registrar alimentacion',
      'Ver reportes de salud',
    ],
    recentActivity: [
      { id: 1, title: 'Nuevo lote registrado', meta: 'Hace 2 horas', area: 'Sector B-04' },
      { id: 2, title: 'Vacunacion completada', meta: 'Hace 5 horas', area: 'Sector A-12' },
      { id: 3, title: 'Alerta de peso bajo', meta: 'Ayer', area: 'Corral 09' },
    ],
  }
}
