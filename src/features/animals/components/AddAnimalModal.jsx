import React, { useState } from 'react';

const AddAnimalModal = ({ isOpen, onClose, onSave }) => {
    const [form, setForm] = useState({ id: '', raza: 'Duroc', edad: '', lote: '', estado: 'SALUDABLE' });

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault(); // <--- ESTO EVITA QUE LA PAGINA SE REINICIE
        onSave(form);
        onClose();
        setForm({ id: '', raza: 'Duroc', edad: '', lote: '', estado: 'SALUDABLE' }); // Limpiar
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
            <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] w-full max-w-md p-8 shadow-2xl">
                <h2 className="text-2xl font-black mb-6 text-slate-900">Registrar Animal</h2>

                <div className="space-y-4">
                    <input
                        placeholder="Número de Lote (Ej: Lote #42)"
                        required
                        className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-emerald-400"
                        onChange={e => setForm({ ...form, lote: e.target.value })} // <--- Guardamos como 'lote'
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <select
                            className="p-4 bg-slate-50 border rounded-2xl outline-none cursor-pointer"
                            onChange={e => setForm({ ...form, raza: e.target.value })}
                        >
                            <option value="Duroc">Duroc</option>
                            <option value="Landrace">Landrace</option>
                            <option value="Yorkshire">Yorkshire</option>
                        </select>

                        <select
                            className="p-4 bg-slate-50 border rounded-2xl outline-none font-bold text-emerald-600 cursor-pointer"
                            onChange={e => setForm({ ...form, estado: e.target.value })}
                        >
                            <option value="SALUDABLE">Saludable </option>
                            <option value="OBSERVACIÓN">Observación </option>
                        </select>
                    </div>

                    <input
                        placeholder="Lote" required
                        className="w-full p-4 bg-slate-50 border rounded-2xl outline-none"
                        onChange={e => setForm({ ...form, lote: e.target.value })}
                    />
                </div>

                <div className="flex gap-4 mt-8">
                    <button type="button" onClick={onClose} className="flex-1 font-bold text-slate-400 hover:text-slate-600">Cancelar</button>
                    <button type="submit" className="flex-1 bg-emerald-400 py-4 rounded-2xl font-black text-slate-950 shadow-lg hover:bg-emerald-500 transition-colors">
                        GUARDAR
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAnimalModal;