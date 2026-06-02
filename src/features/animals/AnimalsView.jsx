import React, { useState } from 'react';
import AnimalTable from './components/AnimalTable';
import AddAnimalModal from './components/AddAnimalModal';
import TrashModal from './components/TrashModal';

const AnimalsView = () => {
    const [animals, setAnimals] = useState([
        { id: '2024-001', raza: 'Duroc', edad: 5, lote: 'Lote #42', estado: 'SALUDABLE' },
        { id: '2024-042', raza: 'Landrace', edad: 6, lote: 'Lote #15', estado: 'OBSERVACIÓN' },
    ]);
    const [trash, setTrash] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isTrashOpen, setIsTrashOpen] = useState(false);
    const [editingAnimal, setEditingAnimal] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState('TODOS');

    const filteredAnimals = animals.filter(animal => {
        const matchesSearch =
            animal.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            animal.lote.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            statusFilter === 'TODOS' ||
            animal.estado === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const handleSave = (animalData) => {
        if (editingAnimal) {
            setAnimals(animals.map(a => a.id === editingAnimal.id ? animalData : a));
            alert('¡El registro se actualizó correctamente!');
        } else {
            setAnimals([...animals, animalData]);
            alert('¡El animal se registró correctamente!');
        }
        setIsModalOpen(false);
        setEditingAnimal(null);
    };

    // 🚨 ALERTA DE ELIMINACIÓN (Enviar a papelera)
    const moveToTrash = (id) => {
        // 1. Pregunta al usuario si está seguro
        const confirmar = window.confirm(`¿Estás seguro de que deseas eliminar el registro #${id}?`);

        // 2. Si acepta, se mueve a la papelera y avisa del éxito
        if (confirmar) {
            const animal = animals.find(a => a.id === id);
            setTrash([...trash, animal]);
            setAnimals(animals.filter(a => a.id !== id));
            alert('El registro se eliminó correctamente y ya está en la papelera.');
        }
    };

    const handleEdit = (animal) => {
        setEditingAnimal(animal);
        setIsModalOpen(true);
    };

    return (
        <div className="space-y-8 max-w-[1600px] mx-auto pb-10 font-sans p-6 bg-[#f8fafc]">

            {/* BLOQUE DE TÍTULO PROFESIONAL */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-3xl font-black text-[#0a1629] tracking-tight uppercase italic">
                        REGISTRO DE ANIMALES
                    </h2>
                    <p className="text-slate-400 font-medium text-sm mt-1">
                        Control y seguimiento de registros porcinos
                    </p>
                </div>
            </div>

            {/* CONTENEDOR BLANCO REDONDEADO PARA FILTROS Y TABLA */}
            <div className="bg-white rounded-[3rem] p-10 shadow-sm border border-slate-100 space-y-8">

                {/* ZONA DE CONTROLES */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="w-full md:w-auto flex-1 max-w-md">
                        <input
                            type="text"
                            placeholder="Buscar por ID o Lote..."
                            className="w-full pl-6 pr-6 py-4 bg-slate-50 border border-slate-100 rounded-full outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium text-sm text-slate-900"
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center gap-4 w-full md:w-auto justify-end flex-wrap">
                        <select
                            className="p-4 bg-slate-50 border border-slate-100 rounded-2xl text-sm font-bold text-slate-600 outline-none cursor-pointer focus:border-emerald-400 transition-all"
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="TODOS">Todos los estados</option>
                            <option value="SALUDABLE">Saludable</option>
                            <option value="OBSERVACIÓN">Observación</option>
                        </select>

                        <button
                            onClick={() => setIsTrashOpen(true)}
                            className="p-4 text-slate-500 font-bold bg-slate-50 hover:bg-slate-100 rounded-2xl transition-all flex items-center gap-2 border border-slate-100"
                        >
                            🗑️ <span className="text-xs bg-slate-200 px-2 py-0.5 rounded-md text-slate-700">{trash.length}</span>
                        </button>

                        <button
                            onClick={() => { setEditingAnimal(null); setIsModalOpen(true); }}
                            className="bg-[#00a34d] hover:bg-[#008c42] text-white font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-lg shadow-emerald-900/10 transition-all active:scale-95 text-xs"
                        >
                            + REGISTRAR
                        </button>
                    </div>
                </div>

                {/* TABLA DE ANIMALES */}
                <div className="overflow-x-auto">
                    <AnimalTable
                        animals={filteredAnimals}
                        onDelete={moveToTrash}
                        onEdit={handleEdit}
                    />
                </div>
            </div>

            {/* MODALES DEL SISTEMA */}
            <AddAnimalModal
                isOpen={isModalOpen}
                onClose={() => { setIsModalOpen(false); setEditingAnimal(null); }}
                onSave={handleSave}
                initialData={editingAnimal}
            />

            <TrashModal
                isOpen={isTrashOpen}
                onClose={() => setIsTrashOpen(false)}
                trashItems={trash}
                onRecover={(id) => {
                    const item = trash.find(a => a.id === id);
                    setAnimals([...animals, item]);
                    setTrash(trash.filter(a => a.id !== id));
                    // ALERTA DE RESTAURACIÓN
                    alert('Se restauró correctamente el registro.');
                }}
                onDeletePermanent={(id) => {
                    const confirmar = window.confirm('⚠ ¿Deseas eliminar permanentemente este registro? No se podrá recuperar.');
                    if (confirmar) {
                        setTrash(trash.filter(a => a.id !== id));
                        alert('Registro borrado de forma permanente.');
                    }
                }}
            />
        </div>
    );
};

export default AnimalsView;