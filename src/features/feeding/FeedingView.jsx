import React, { useState } from 'react';
import { Utensils, Database, Plus, TrendingDown } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Table from '../../components/ui/Table';
import Input from '../../components/ui/Input';

// Mock Data
const inventoryStats = [
    { type: 'Pre-iniciador', stock: 450, capacity: 500, unit: 'kg', tone: 'bg-orange-500' },
    { type: 'Iniciador', stock: 800, capacity: 1000, unit: 'kg', tone: 'bg-amber-500' },
    { type: 'Levante', stock: 1200, capacity: 2000, unit: 'kg', tone: 'bg-blue-500' },
    { type: 'Ceba', stock: 300, capacity: 2000, unit: 'kg', tone: 'bg-rose-500' }, // Low stock example
];

const dailyConsumption = [
    { id: 1, fecha: '2026-04-25', tipo: 'Levante', cantidad: '150 kg', destino: 'Lote #42' },
    { id: 2, fecha: '2026-04-25', tipo: 'Pre-iniciador', cantidad: '25 kg', destino: 'Corral 09' },
    { id: 3, fecha: '2026-04-24', tipo: 'Ceba', cantidad: '200 kg', destino: 'Sector A-12' },
    { id: 4, fecha: '2026-04-24', tipo: 'Iniciador', cantidad: '80 kg', destino: 'Lote #15' },
];

const FeedingView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const columns = [
        { key: 'fecha', header: 'Fecha' },
        { key: 'tipo', header: 'Tipo de Alimento' },
        { key: 'cantidad', header: 'Cantidad (kg)' },
        { key: 'destino', header: 'Lote/Animal destinado' },
    ];

    return (
        <div className="space-y-8 max-w-[1600px] mx-auto pb-10">
            {/* Cabecera */}
            <Card as="header" className="flex flex-col gap-4 !rounded-[2rem] lg:flex-row lg:items-center lg:justify-between border-t-4 border-[#FFC000]">
                <div>
                    <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                        <Utensils className="text-[#FFC000] w-8 h-8" />
                        Control de Alimentación
                    </h2>
                    <p className="text-slate-500 mt-2 font-medium">Gestión de inventario y consumo diario del plantel.</p>
                </div>
                <Button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 bg-[#e6ac00] hover:bg-[#e6ac00] hover:-translate-y-1 hover:shadow-xl shadow-md shadow-[#e6ac00]/30 text-white border-none transition-all duration-200"
                >
                    <Plus size={20} />
                    Registrar Suministro
                </Button>
            </Card>

            {/* Dashboard de Inventario */}
            <section>
                <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    <Database className="text-blue-500 w-6 h-6" />
                    Inventario de Silos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {inventoryStats.map((stat, idx) => {
                        const percentage = Math.round((stat.stock / stat.capacity) * 100);
                        const isLow = percentage <= 20;

                        return (
                            <Card key={idx} className="!rounded-3xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                                    <Database className="w-20 h-20" />
                                </div>
                                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-1">
                                    {stat.type}
                                </p>
                                <div className="flex items-end gap-2 mb-4">
                                    <span className={`text-4xl font-black ${isLow ? 'text-rose-500' : 'text-slate-900'}`}>
                                        {stat.stock}
                                    </span>
                                    <span className="text-slate-500 font-medium mb-1">{stat.unit}</span>
                                </div>

                                <div className="flex justify-between text-xs font-bold text-slate-400 mb-2">
                                    <span>Capacidad: {stat.capacity}{stat.unit}</span>
                                    <span>{percentage}%</span>
                                </div>
                                <div className="w-full bg-slate-100 rounded-full h-2.5">
                                    <div 
                                        className={`h-2.5 rounded-full ${stat.tone}`} 
                                        style={{ width: `${percentage}%` }}
                                    ></div>
                                </div>
                                {isLow && (
                                    <div className="mt-4 flex items-center gap-2 text-rose-500 text-xs font-bold bg-rose-50 p-2 rounded-lg">
                                        <TrendingDown className="w-4 h-4" />
                                        Stock crítico. Reabastecer.
                                    </div>
                                )}
                            </Card>
                        );
                    })}
                </div>
            </section>

            {/* Tabla de Consumo Diario */}
            <section>
                <h3 className="text-xl font-bold mb-6 text-slate-800 flex items-center gap-2">
                    <TrendingDown className="text-orange-500 w-6 h-6" />
                    Consumo Diario
                </h3>
                <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden p-2">
                    <Table columns={columns} rows={dailyConsumption} />
                </div>
            </section>

            {/* Estructura del Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
                    <Card as="form" className="w-full max-w-md !p-8 !rounded-[2.5rem] shadow-2xl relative">
                        <button 
                            type="button" 
                            onClick={() => setIsModalOpen(false)} 
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 font-bold"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-black mb-6 text-slate-900">Nuevo Suministro</h2>
                        
                        <div className="space-y-4">
                            <Input label="Fecha" type="date" required />
                            
                            <label className="block">
                                <span className="mb-2 block text-sm font-semibold text-slate-700">Tipo de Alimento</span>
                                <select required className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100">
                                    <option value="" disabled selected>Seleccionar...</option>
                                    <option value="Pre-iniciador">Pre-iniciador</option>
                                    <option value="Iniciador">Iniciador</option>
                                    <option value="Levante">Levante</option>
                                    <option value="Ceba">Ceba</option>
                                </select>
                            </label>

                            <Input label="Cantidad (kg)" type="number" min="1" placeholder="Ej: 50" required />
                            <Input label="Destino (Lote/Animal)" placeholder="Ej: Lote #42" required />
                        </div>

                        <div className="flex gap-4 mt-8">
                            <Button type="button" tone="soft" onClick={() => setIsModalOpen(false)} className="flex-1 font-bold">
                                Cancelar
                            </Button>
                            <Button type="submit" onClick={(e) => { e.preventDefault(); setIsModalOpen(false); }} className="flex-1 font-black bg-orange-500 hover:bg-orange-600 text-white border-none shadow-md shadow-orange-500/30">
                                Guardar
                            </Button>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default FeedingView;
