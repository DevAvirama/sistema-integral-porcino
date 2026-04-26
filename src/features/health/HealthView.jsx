import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import Table from '../../components/ui/Table';
import AddHealthRecordModal from './components/AddHealthRecordModal';

const mockHealthData = [
    { id: 1, fecha: '2026-04-20', idCerdo: '2024-001', diagnostico: 'Control rutinario', tratamiento: 'Vacuna Parvovirus', responsable: 'Juan Pérez' },
    { id: 2, fecha: '2026-04-22', idCerdo: '2024-042', diagnostico: 'Diarrea leve', tratamiento: 'Rehidratación y antibiótico', responsable: 'María Gómez' },
];

const HealthView = () => {
    const [healthRecords, setHealthRecords] = useState(mockHealthData);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSave = (newRecord) => {
        setHealthRecords([...healthRecords, newRecord]);
    };

    const columns = [
        { key: 'fecha', header: 'Fecha' },
        { key: 'idCerdo', header: 'ID Cerdo' },
        { key: 'diagnostico', header: 'Diagnóstico' },
        { key: 'tratamiento', header: 'Tratamiento' },
        { key: 'responsable', header: 'Responsable' },
    ];

    return (
        <div className="space-y-10">
            <div className="space-y-4">
                <Card className="flex justify-between items-center !rounded-[2rem]">
                    <h2 className="text-2xl font-black italic">Salud y Vacunación</h2>
                    <Button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2">
                        <Plus size={20} />
                        Nuevo Registro
                    </Button>
                </Card>

                <Table columns={columns} rows={healthRecords} />
            </div>

            <AddHealthRecordModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
            />
        </div>
    );
};

export default HealthView;
