import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Card from '../../../components/ui/Card';
import healthStandards from '../data/healthStandards.json';

const AddHealthRecordModal = ({ isOpen, onClose, onSave }) => {
    const [form, setForm] = useState({
        idCerdo: '',
        fecha: '',
        diagnostico: '',
        tratamiento: '',
        dosis: '',
        responsable: ''
    });

    if (!isOpen) return null;

    const handleMedicineChange = (e) => {
        const selectedName = e.target.value;
        const selectedMedicine = healthStandards.topMedicines.find(m => m.name === selectedName);
        
        setForm({
            ...form,
            tratamiento: selectedName,
            dosis: selectedMedicine ? selectedMedicine.dose : ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...form, id: Date.now() }); // Include an ID for the mock data table
        onClose();
        setForm({
            idCerdo: '',
            fecha: '',
            diagnostico: '',
            tratamiento: '',
            dosis: '',
            responsable: ''
        });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
            <Card as="form" onSubmit={handleSubmit} className="w-full max-w-md !p-8 !rounded-[2.5rem] shadow-2xl">
                <h2 className="text-2xl font-black mb-6 text-slate-900">Registrar Tratamiento</h2>

                <div className="space-y-4 max-h-[60vh] overflow-y-auto px-2 -mx-2">
                    <Input
                        label="ID del Animal"
                        placeholder="Ej: 2024-001"
                        required
                        value={form.idCerdo}
                        onChange={e => setForm({ ...form, idCerdo: e.target.value })}
                    />

                    <Input
                        label="Fecha del Tratamiento"
                        type="date"
                        required
                        value={form.fecha}
                        onChange={e => setForm({ ...form, fecha: e.target.value })}
                    />

                    <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Tipo de diagnóstico</span>
                        <textarea
                            placeholder="Descripción del diagnóstico..."
                            required
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100 min-h-[100px] resize-none"
                            value={form.diagnostico}
                            onChange={e => setForm({ ...form, diagnostico: e.target.value })}
                        ></textarea>
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-sm font-semibold text-slate-700">Medicamento aplicado</span>
                        <select
                            required
                            className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-emerald-400 focus:bg-white focus:ring-4 focus:ring-emerald-100"
                            value={form.tratamiento}
                            onChange={handleMedicineChange}
                        >
                            <option value="" disabled>Seleccione un medicamento...</option>
                            {healthStandards.topMedicines.map((med, idx) => (
                                <option key={idx} value={med.name}>
                                    {med.name} - {med.usage}
                                </option>
                            ))}
                        </select>
                    </label>

                    <Input
                        label="Dosis sugerida"
                        placeholder="Autocompletado..."
                        required
                        readOnly
                        className="opacity-70 cursor-not-allowed"
                        value={form.dosis}
                    />

                    <Input
                        label="Veterinario responsable"
                        placeholder="Nombre del veterinario"
                        required
                        value={form.responsable}
                        onChange={e => setForm({ ...form, responsable: e.target.value })}
                    />
                </div>

                <div className="flex gap-4 mt-8">
                    <Button
                        tone="soft"
                        onClick={onClose}
                        className="flex-1 font-bold"
                    >
                        Cancelar
                    </Button>
                    <Button
                        type="submit"
                        tone="primary"
                        className="flex-1 font-black shadow-lg shadow-emerald-400/30 bg-emerald-400 hover:bg-emerald-500 text-slate-950"
                    >
                        Guardar Registro
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default AddHealthRecordModal;
