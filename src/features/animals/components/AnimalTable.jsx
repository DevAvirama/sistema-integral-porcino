import React from 'react';
import Table from "../../../components/ui/Table";
import AnimalStatusBadge from "./AnimalStatusBadge";
// 📄 Importamos la librería para generar PDFs reales
import { jsPDF } from "jspdf";

const AnimalTable = ({ animals, onEdit, onDelete }) => {

    // 💾 FUNCIÓN REAL PARA DESCARGAR EL PDF
    const handleDownloadPDF = (animal) => {
        const doc = new jsPDF();

        // Configuración de estilos para el PDF
        doc.setFont("helvetica", "bold");
        doc.setFontSize(22);
        doc.setTextColor(10, 22, 41); // Color #0a1629 de PorciTech
        doc.text("PORCITECH - REPORTE INDIVIDUAL", 20, 25);

        doc.setFontSize(12);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 116, 139);
        doc.text("Control y seguimiento automatizado de registros", 20, 32);
        doc.line(20, 36, 190, 36); // Línea divisoria

        // Datos del Porcino
        doc.setFont("helvetica", "bold");
        doc.setTextColor(15, 23, 42);
        doc.setFontSize(14);
        doc.text(`Hoja de Vida del Animal: #${animal.id}`, 20, 48);

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.text(`• Raza del Porcino:  ${animal.raza}`, 25, 60);
        doc.text(`• Número de Lote:   ${animal.lote}`, 25, 70);
        doc.text(`• Edad Actual:       ${animal.edad} Meses`, 25, 80);
        doc.text(`• Estado de Salud:   ${animal.estado}`, 25, 90);

        // Pie de página administrativo
        doc.line(20, 110, 190, 110);
        doc.setFontSize(10);
        doc.setTextColor(150, 150, 150);
        doc.text(`Reporte generado automáticamente el: ${new Date().toLocaleDateString()}`, 20, 118);

        // Descarga física del archivo en la computadora
        doc.save(`Reporte_Porcino_${animal.id}.pdf`);
    };

    const columns = [
        {
            key: 'id',
            header: 'ID',
            render: (row) => (
                <span className="font-black text-slate-950 tracking-tight text-sm">
                    #{row.id}
                </span>
            )
        },
        {
            key: 'lote',
            header: 'LOTE',
            render: (row) => (
                <span className="font-medium text-slate-600 text-sm">
                    {row.lote}
                </span>
            )
        },
        {
            key: 'raza',
            header: 'RAZA',
            render: (row) => (
                <span className="font-semibold text-slate-700 text-sm">
                    {row.raza}
                </span>
            )
        },
        {
            key: 'estado',
            header: 'ESTADO',
            render: (row) => <AnimalStatusBadge status={row.estado} />
        },
        {
            key: 'acciones',
            header: 'ACCIONES',
            render: (row) => (
                <div className="flex items-center gap-3">
                    {/* Botón Descargar PDF Individual */}
                    <button
                        onClick={() => handleDownloadPDF(row)}
                        className="p-2 bg-blue-50 hover:bg-blue-100 text-blue-500 rounded-xl transition-all active:scale-90 shadow-sm border border-blue-100/50"
                        title="Descargar Reporte PDF"
                    >
                        📄
                    </button>

                    {/* Botón Editar */}
                    <button
                        onClick={() => onEdit(row)}
                        className="p-2 bg-orange-50 hover:bg-orange-100 text-orange-500 rounded-xl transition-all active:scale-90 shadow-sm border border-orange-100/50"
                        title="Editar animal"
                    >
                        ✏️
                    </button>

                    {/* Botón Eliminar */}
                    <button
                        onClick={() => onDelete(row.id)}
                        className="p-2 bg-slate-50 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-xl transition-all active:scale-90 shadow-sm border border-slate-100"
                        title="Mover a la papelera"
                    >
                        🗑️
                    </button>
                </div>
            )
        }
    ];

    return <Table columns={columns} rows={animals} />;
};

export default AnimalTable;