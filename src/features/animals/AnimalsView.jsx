import { useState } from "react";
// Agregamos "/components/" a la ruta porque ahí es donde están guardados
import AnimalTable from "./components/AnimalTable";
import AddAnimalModal from "./components/AddAnimalModal";
import AnimalStatusBadge from "./components/AnimalStatusBadge";

const AnimalsView = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [animals] = useState([
        { id: '2024-001', raza: 'Duroc', edad: 5, galpon: 'A-102', estado: 'Saludable' },
        { id: '2024-042', raza: 'Landrace', edad: 6, galpon: 'B-205', estado: 'Observación' },
    ]);

    return (
        <main className="p-8 bg-[#f8fafc] min-h-screen">
            <div className="max-w-6xl mx-auto">

                {/* Encabezado con el botón que abre el Modal */}
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-slate-800 font-serif italic">Inventario Detallado</h1>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-emerald-800 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md hover:bg-emerald-900 transition-all"
                    >
                        + Añadir Animal
                    </button>
                </header>

                {/* Llamamos a la Tabla */}
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
                    <AnimalTable animals={animals} />
                </div>

                {/* Llamamos al Modal */}
                <AddAnimalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            </div>
        </main>
    );
};

export default AnimalsView;