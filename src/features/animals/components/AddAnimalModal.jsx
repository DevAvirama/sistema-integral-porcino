const AddAnimalModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 backdrop-blur-sm p-4">
            <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl">
                <h2 className="text-2xl font-black text-slate-950 mb-6">Registrar Nuevo Cerdo</h2>

                <form className="grid gap-4">
                    {/* ID del Animal */}
                    <div className="grid gap-1.5">
                        <label className="text-sm font-bold text-slate-700 ml-1">ID del Animal</label>
                        <input
                            type="text"
                            placeholder="Ej: #1142"
                            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none transition-all"
                        />
                    </div>

                    {/* Raza y Edad en la misma línea */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-1.5">
                            <label className="text-sm font-bold text-slate-700 ml-1">Raza</label>
                            <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none">
                                <option>Duroc</option>
                                <option>Landrace</option>
                                <option>Yorkshire</option>
                            </select>
                        </div>
                        <div className="grid gap-1.5">
                            <label className="text-sm font-bold text-slate-700 ml-1">Edad (Meses)</label>
                            <input type="number" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" />
                        </div>
                    </div>

                    {/* Galpón */}
                    <div className="grid gap-1.5">
                        <label className="text-sm font-bold text-slate-700 ml-1">Galpón / Ubicación</label>
                        <input type="text" placeholder="Ej: Sector B-04" className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-emerald-400 focus:outline-none" />
                    </div>

                    {/* Botones de Acción */}
                    <div className="flex gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 rounded-xl px-4 py-3 text-sm font-bold text-slate-500 hover:bg-slate-100 transition-colors"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="flex-1 rounded-xl bg-emerald-400 px-4 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-400/20 hover:bg-emerald-500 transition-all"
                        >
                            Guardar Animal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAnimalModal;