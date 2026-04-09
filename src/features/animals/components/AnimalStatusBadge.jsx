const AnimalStatusBadge = ({ status }) => {
    const styles = {
        'Saludable': 'bg-emerald-100 text-emerald-700',
        'Observación': 'bg-orange-100 text-orange-700',
        'Tratamiento': 'bg-red-100 text-red-700',
    };

    return (
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${styles[status] || 'bg-slate-100 text-slate-600'}`}>
            {status.toUpperCase()}
        </span>
    );
};

export default AnimalStatusBadge;