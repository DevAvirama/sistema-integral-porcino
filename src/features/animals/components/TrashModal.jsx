import React from 'react';

const TrashModal = ({ isOpen, onClose, trashItems, onRecover, onDeletePermanent }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 font-sans">
            <div className="bg-white rounded-[3rem] w-full max-w-2xl p-8 shadow-2xl border border-slate-50 space-y-6">

                {/* ENCABEZADO CON EL NUEVO ESTILO DE PORCITECH */}
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-3xl font-black text-[#0a1629] tracking-tight uppercase italic">
                            Papelera de Reciclaje
                        </h2>
                        <p className="text-slate-400 font-medium text-sm mt-1">
                            Recupera o elimina permanentemente los registros
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-slate-600 text-xl font-bold p-2 hover:bg-slate-50 rounded-full transition-all"
                    >
                        ✕
                    </button>
                </div>

                {/* TABLA DE ELEMENTOS EN PAPELERA */}
                <div className="overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-100/80 text-[11px] font-black text-slate-500 uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4">ID</th>
                                <th className="px-6 py-4">Lote</th>
                                <th className="px-6 py-4 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 bg-white">
                            {trashItems.length === 0 ? (
                                <tr>
                                    <td colSpan="3" className="px-6 py-12 text-center text-slate-400 font-semibold text-sm">
                                        No hay animales en la papelera actualmente.
                                    </td>
                                </tr>
                            ) : (
                                trashItems.map((item) => (
                                    <tr key={item.id} className="text-sm text-slate-600 hover:bg-slate-50/50 transition-colors">
                                        <td className="px-6 py-4 font-black text-slate-950">#{item.id}</td>
                                        <td className="px-6 py-4 font-medium text-slate-600">{item.lote}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex justify-center items-center gap-3">
                                                {/* Botón Restaurar - Estilizado Verde */}
                                                <button
                                                    onClick={() => onRecover(item.id)}
                                                    title="Recuperar"
                                                    className="p-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-xl transition-all active:scale-90 border border-emerald-100/30 text-base"
                                                >
                                                    🔄
                                                </button>

                                                {/* Botón Eliminar Permanente - Estilizado Rojo */}
                                                <button
                                                    onClick={() => onDeletePermanent(item.id)}
                                                    title="Eliminar para siempre"
                                                    className="p-2 bg-red-50 hover:bg-red-100 text-red-500 rounded-xl transition-all active:scale-90 border border-red-100/30 text-base"
                                                >
                                                    ❌
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* PIE DEL MODAL CON BOTÓN ESTILIZADO */}
                <div className="pt-2 flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-slate-950 hover:bg-slate-800 text-white px-8 py-3.5 rounded-full font-black text-xs tracking-wider uppercase shadow-md transition-all active:scale-95"
                    >
                        CERRAR PAPELERA
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrashModal;