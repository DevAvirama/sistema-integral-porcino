import React from 'react';
import { AlertTriangle, Info, Bell, TrendingUp, PieChart, BarChart2 } from 'lucide-react';
import Card from '../../components/ui/Card.jsx';
import Table from '../../components/ui/Table.jsx';
import Button from '../../components/ui/Button.jsx';

const ReportsView = () => {
    const alerts = [
        { id: 1, type: 'critical', title: 'Caída de Consumo', desc: 'El Lote #42 redujo su consumo diario en un 15%.', time: 'Hace 2 horas' },
        { id: 2, type: 'preventive', title: 'Vacunación Próxima', desc: '14 hembras gestantes requieren vacuna contra Parvovirus.', time: 'Hoy' },
        { id: 3, type: 'preventive', title: 'Revisión de Inventario', desc: 'El alimento Pre-iniciador está por debajo del 20%.', time: 'Ayer' },
    ];

    const kpiData = [
        { metrica: 'Conversión Alimenticia', actual: '2.4', objetivo: '2.3', variacion: '+4.3%', estado: 'Regular' },
        { metrica: 'Tasa de Mortalidad', actual: '1.2%', objetivo: '< 2.0%', variacion: '-0.5%', estado: 'Óptimo' },
        { metrica: 'Total Nacimientos', actual: '142', objetivo: '135', variacion: '+5.1%', estado: 'Óptimo' },
        { metrica: 'GDP Promedio (Ceba)', actual: '910 g/d', objetivo: '900 g/d', variacion: '+1.1%', estado: 'Óptimo' },
    ];

    const kpiCols = [
        { header: 'Métrica Clave', key: 'metrica', render: (row) => <span className="font-bold text-slate-800">{row.metrica}</span> },
        { header: 'Valor Actual', key: 'actual', render: (row) => <span className="font-black text-slate-900">{row.actual}</span> },
        { header: 'Objetivo', key: 'objetivo', render: (row) => <span className="text-slate-500">{row.objetivo}</span> },
        { header: 'Variación', key: 'variacion', render: (row) => <span className={`font-bold ${row.variacion.startsWith('+') && row.metrica !== 'Conversión Alimenticia' ? 'text-emerald-600' : (row.metrica === 'Conversión Alimenticia' && row.variacion.startsWith('+') ? 'text-rose-600' : 'text-emerald-600')}`}>{row.variacion}</span> },
        { 
            header: 'Estado', 
            key: 'estado',
            render: (row) => (
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${row.estado === 'Óptimo' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'}`}>
                    {row.estado}
                </span>  
            )
        }
    ];

    return (
        <div className="space-y-8 max-w-[1600px] mx-auto pb-10">
            {/* Header del Módulo */}
            <div className="flex justify-between items-center bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                <div>
                    <h2 className="text-3xl font-black italic text-slate-900 flex items-center gap-3">
                        <BarChart2 className="text-indigo-600 h-8 w-8" /> 
                        Alertas y Reportes
                    </h2>
                    <p className="text-slate-500 mt-1 font-medium">Centro de control y análisis de rendimiento de la granja</p>
                </div>
                <Button className="bg-sena-green hover:bg-sena-green hover:-translate-y-1 hover:shadow-xl text-white font-bold !rounded-xl shadow-md shadow-sena-green/20 border-none transition-all duration-200">
                    Exportar PDF
                </Button>
            </div>

            {/* Notificaciones Recientes */}
            <section>
                <div className="flex items-center gap-2 mb-4">
                    <Bell className="text-slate-400 h-5 w-5" />
                    <h3 className="text-lg font-black italic text-slate-800">Notificaciones Recientes</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {alerts.map(alert => (
                        <div key={alert.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex relative group hover:shadow-md transition-shadow">
                            <div className={`w-2 shrink-0 ${alert.type === 'critical' ? 'bg-rose-500' : 'bg-amber-400'}`}></div>
                            <div className="p-4 flex-1">
                                <div className="flex justify-between items-start">
                                    <div className={`p-2 rounded-xl ${alert.type === 'critical' ? 'bg-rose-50 text-rose-600' : 'bg-amber-50 text-amber-600'}`}>
                                        {alert.type === 'critical' ? <AlertTriangle size={18}/> : <Info size={18}/>}
                                    </div>
                                    <span className="text-xs font-bold text-slate-400">{alert.time}</span>
                                </div>
                                <h4 className="font-bold text-slate-900 mt-3">{alert.title}</h4>
                                <p className="text-sm text-slate-500 mt-1 line-clamp-2">{alert.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Panel de Métricas (Grid 2 columnas) */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Gráfica de Crecimiento */}
                <Card className="!p-6 border border-slate-100 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-black italic text-slate-800 flex items-center gap-2">
                                <TrendingUp className="text-blue-500 h-6 w-6"/> Crecimiento Global
                            </h3>
                            <span className="text-xs font-bold bg-slate-100 text-slate-600 px-3 py-1 rounded-lg">Últimos 6 meses</span>
                        </div>
                        {/* Placeholder SVG para Gráfica de Líneas */}
                        <div className="h-64 w-full relative">
                            {/* Grids */}
                            <div className="absolute inset-0 flex flex-col justify-between">
                                {[1,2,3,4,5].map(i => <div key={i} className="border-t border-slate-100 w-full h-0"></div>)}
                            </div>
                            <svg className="w-full h-full relative z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <polyline points="0,80 20,65 40,55 60,35 80,25 100,10" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                <polyline points="0,85 20,70 40,60 60,45 80,30 100,20" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="opacity-50" />
                            </svg>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-4 justify-center text-sm font-bold text-slate-500">
                        <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Real</span>
                        <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500 opacity-50"></div> Ideal</span>
                    </div>
                </Card>

                {/* Distribución de Lotes */}
                <Card className="!p-6 border border-slate-100 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl font-black italic text-slate-800 flex items-center gap-2">
                                <PieChart className="text-fuchsia-500 h-6 w-6"/> Distribución del Inventario
                            </h3>
                        </div>
                        {/* Placeholder SVG para Gráfica Circular (Donut) */}
                        <div className="flex justify-center items-center h-64">
                            <div className="relative w-48 h-48">
                                <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#e2e8f0" strokeWidth="20" />
                                    {/* Segmento Ceba (45%) */}
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="138.16" />
                                    {/* Segmento Levante (30%) */}
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#f59e0b" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="175.84" className="origin-center rotate-[162deg]" />
                                    {/* Segmento Precebo (15%) */}
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#3b82f6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="213.52" className="origin-center rotate-[270deg]" />
                                    {/* Segmento Lactancia (10%) */}
                                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#8b5cf6" strokeWidth="20" strokeDasharray="251.2" strokeDashoffset="226.08" className="origin-center rotate-[324deg]" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-3xl font-black text-slate-900">1.5k</span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Cerdos</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm font-bold text-slate-600">
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500"></div> Ceba (45%)</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-amber-500"></div> Levante (30%)</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div> Pre-cebo (15%)</div>
                        <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-500"></div> Lactancia (10%)</div>
                    </div>
                </Card>
            </section>

            {/* Tabla de Resumen */}
            <section>
                <h3 className="text-xl font-black italic text-slate-800 mb-4 px-2">KPIs del Mes</h3>
                <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-slate-100 p-2">
                    <Table columns={kpiCols} rows={kpiData} />
                </div>
            </section>
        </div>
    );
};

export default ReportsView;
