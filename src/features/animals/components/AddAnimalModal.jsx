import React, { useState, useEffect } from 'react';

const AddAnimalModal = ({ isOpen, onClose, onSave, initialData }) => {
    // 1. Estado para mantener la lista de razas disponibles dinámicamente
    const [listaRazas, setListaRazas] = useState(['Duroc', 'Landrace', 'Yorkshire']);

    // Estados para el formulario y el control de nueva raza
    const [form, setForm] = useState({ id: '', raza: 'Duroc', edad: '', lote: '', estado: 'SALUDABLE' });
    const [isNuevaRaza, setIsNuevaRaza] = useState(false);
    const [nuevaRazaInput, setNuevaRazaInput] = useState('');

    useEffect(() => {
        if (isOpen) {
            if (initialData) {
                // Si la raza del animal editado no está en la lista estándar, la agregamos
                if (!listaRazas.includes(initialData.raza)) {
                    setListaRazas(prev => [...prev, initialData.raza]);
                }
                setForm(initialData);
                setIsNuevaRaza(false);
                setNuevaRazaInput('');
            } else {
                setForm({ id: '', raza: 'Duroc', edad: '', lote: '', estado: 'SALUDABLE' });
                setIsNuevaRaza(false);
                setNuevaRazaInput('');
            }
        }
    }, [initialData, isOpen]);

    // Maneja el cambio del selector de razas
    const handleRazaChange = (e) => {
        const valor = e.target.value;
        if (valor === 'OTRA') {
            setIsNuevaRaza(true);
            setForm({ ...form, raza: '' }); // Limpia para que se use el input
        } else {
            setIsNuevaRaza(false);
            setForm({ ...form, raza: valor });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Si el usuario escribió una nueva raza, la guardamos definitivamente
        let razaFinal = form.raza;
        if (isNuevaRaza && nuevaRazaInput.trim() !== '') {
            razaFinal = nuevaRazaInput.trim();
            // La agregamos a la lista del selector para futuras ocasiones
            if (!listaRazas.includes(razaFinal)) {
                setListaRazas(prev => [...prev, razaFinal]);
            }
        }

        // Enviamos el formulario con la raza procesada
        onSave({
            ...form,
            raza: razaFinal
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 font-sans">
            <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] w-full max-w-md p-8 shadow-2xl border border-slate-50 space-y-6">

                {/* TÍTULO CAMBIADO AL ESTILO DE REGISTRO DE ANIMALES */}
                <h2 className="text-3xl font-black text-[#0a1629] tracking-tight uppercase italic">
                    {initialData ? 'Editar Registro' : 'Nuevo Registro'}
                </h2>

                <div className="space-y-4">
                    {/* ID del Animal */}
                    <input
                        placeholder="ID del Animal" value={form.id} required
                        disabled={!!initialData} // Deshabilitado al editar para mantener consistencia
                        className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-emerald-400 font-bold text-slate-900 placeholder-slate-400 disabled:opacity-60"
                        onChange={e => setForm({ ...form, id: e.target.value })}
                    />

                    {/* Fila: Selector Raza y Edad */}
                    <div className="grid grid-cols-2 gap-4">
                        <select
                            className="p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none font-bold text-slate-700 cursor-pointer focus:border-emerald-400"
                            value={isNuevaRaza ? 'OTRA' : form.raza}
                            onChange={handleRazaChange}
                        >
                            {listaRazas.map((raza) => (
                                <option key={raza} value={raza}>{raza}</option>
                            ))}
                            <option value="OTRA" className="text-emerald-600 font-bold"> Otra / Agregar Nueva...</option>
                        </select>

                        <input
                            type="number" placeholder="Edad (Meses)" value={form.edad} required
                            className="p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-slate-900 font-medium focus:border-emerald-400"
                            onChange={e => setForm({ ...form, edad: e.target.value })}
                        />
                    </div>

                    {/* INPUT DINÁMICO: Aparece si selecciona "OTRA" */}
                    {isNuevaRaza && (
                        <div className="animate-fadeIn">
                            <input
                                type="text"
                                placeholder="Escribe la nueva raza aquí..."
                                value={nuevaRazaInput}
                                required={isNuevaRaza}
                                className="w-full p-4 bg-emerald-50/40 border border-emerald-200 rounded-2xl outline-none focus:border-emerald-500 font-bold text-emerald-900 placeholder-emerald-400"
                                onChange={e => setNuevaRazaInput(e.target.value)}
                            />
                        </div>
                    )}

                    {/* Número de Lote */}
                    <input
                        placeholder="Número de Lote (Ej: Lote #42)" value={form.lote} required
                        className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none text-slate-900 font-medium focus:border-emerald-400"
                        onChange={e => setForm({ ...form, lote: e.target.value })}
                    />

                    {/* Estado de Salud */}
                    <select
                        className={`w-full p-4 border border-slate-100 rounded-2xl outline-none font-black transition-all ${form.estado === 'SALUDABLE' ? 'bg-emerald-50/50 text-emerald-600' : 'bg-orange-50/50 text-orange-600'
                            }`}
                        value={form.estado}
                        onChange={e => setForm({ ...form, estado: e.target.value })}
                    >
                        <option value="SALUDABLE" className="font-bold text-emerald-600">SALUDABLE</option>
                        <option value="OBSERVACIÓN" className="font-bold text-orange-600">OBSERVACIÓN</option>
                    </select>
                </div>

                {/* Botones de acción */}
                <div className="flex gap-4 pt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 font-black text-slate-400 hover:text-slate-600 tracking-wider text-xs uppercase"
                    >
                        CANCELAR
                    </button>
                    <button
                        type="submit"
                        className="flex-1 bg-[#00a34d] hover:bg-[#008c42] py-4 rounded-full font-black text-white shadow-lg shadow-emerald-900/10 transition-all text-xs tracking-wider uppercase"
                    >
                        {initialData ? 'ACTUALIZAR' : 'GUARDAR'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAnimalModal;