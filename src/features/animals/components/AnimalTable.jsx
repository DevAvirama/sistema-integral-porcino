import Table from "../../../components/ui/Table";
import AnimalStatusBadge from './AnimalStatusBadge';

const AnimalTable = ({ animals }) => {

    const columns = [
        {
            key: 'id',
            header: 'ID',
            render: (row) => <span className="font-bold text-slate-700">#{row.id}</span>
        },
        {
            key: 'raza',
            header: 'Raza',
            render: (row) => <span className="text-slate-500">{row.raza}</span>
        },
        {
            key: 'edad',
            header: 'Edad',
            render: (row) => <span className="text-slate-500">{row.edad} Meses</span>
        },
        {
            key: 'galpon',
            header: 'Galpón',
            render: (row) => (
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                    <span className="font-medium text-slate-600">{row.galpon}</span>
                </div>
            )
        },
        {
            key: 'estado',
            header: 'Estado',
            render: (row) => <AnimalStatusBadge status={row.estado} />
        },
        {
            key: 'acciones',
            header: 'Acciones',
            render: () => (
                <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-emerald-600 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                </button>
            )
        }
    ];

    return (
        <div className="mt-6">
            <Table columns={columns} rows={animals} />
        </div>
    );
};

export default AnimalTable;