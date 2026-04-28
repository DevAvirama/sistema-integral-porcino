import React, { useState } from 'react';
import { UserPlus, Shield, Key, Bell, Edit2, Lock, Tag } from 'lucide-react';
import Card from '../../components/ui/Card.jsx';
import Button from '../../components/ui/Button.jsx';
import Table from '../../components/ui/Table.jsx';
import Input from '../../components/ui/Input.jsx';

const SettingsView = () => {
    const [notifEmail, setNotifEmail] = useState(true);
    const [notifAlerts, setNotifAlerts] = useState(true);

    const currentUser = {
        name: 'Dr. Alejandro Ruiz',
        role: 'Administrador Principal',
        email: 'alejandro.ruiz@porcitech.com',
        avatar: 'AR'
    };

    const initialTeamData = [
        { id: 1, name: 'Dr. Alejandro Ruiz', role: 'Administrador', lastLogin: 'Hace 5 mins', status: 'Activo' },
        { id: 2, name: 'Dra. María Silva', role: 'Veterinario', lastLogin: 'Hace 2 horas', status: 'Activo' },
        { id: 3, name: 'Carlos Mendoza', role: 'Operario', lastLogin: 'Hace 1 día', status: 'Activo' },
        { id: 4, name: 'Luis Fernando', role: 'Operario', lastLogin: 'Hace 1 mes', status: 'Inactivo' }
    ];

    const [teamData, setTeamData] = useState(initialTeamData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingUser, setEditingUser] = useState(null);

    // Form states
    const [formName, setFormName] = useState('');
    const [formRole, setFormRole] = useState('Operario');
    const [formStatus, setFormStatus] = useState('Activo');

    // Password states
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setCurrentNewPassword] = useState('');

    const handleOpenModal = (user = null) => {
        if (user) {
            setEditingUser(user);
            setFormName(user.name);
            setFormRole(user.role);
            setFormStatus(user.status);
        } else {
            setEditingUser(null);
            setFormName('');
            setFormRole('Operario');
            setFormStatus('Activo');
        }
        setIsModalOpen(true);
    };

    const handleSaveUser = (e) => {
        e.preventDefault();
        if (editingUser) {
            setTeamData(teamData.map(u => u.id === editingUser.id ? { ...u, name: formName, role: formRole, status: formStatus } : u));
        } else {
            const newUser = {
                id: Date.now(),
                name: formName || 'Nuevo Usuario',
                role: formRole,
                lastLogin: 'Nunca',
                status: formStatus
            };
            setTeamData([...teamData, newUser]);
        }
        setIsModalOpen(false);
    };

    const handleUpdatePassword = () => {
        if (!currentPassword || !newPassword) {
            alert('Por favor completa ambos campos de contraseña.');
            return;
        }
        alert('Credenciales actualizadas exitosamente.');
        setCurrentPassword('');
        setCurrentNewPassword('');
    };

    const teamCols = [
        { 
            header: 'Usuario', 
            key: 'name',
            render: (row) => (
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-xs">
                        {row.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                    <span className="font-bold text-slate-800">{row.name}</span>
                </div>
            )
        },
        { 
            header: 'Rol', 
            key: 'role',
            render: (row) => {
                const roleColors = {
                    'Administrador': 'bg-indigo-100 text-indigo-700',
                    'Veterinario': 'bg-emerald-100 text-emerald-700',
                    'Operario': 'bg-slate-100 text-slate-700'
                };
                return (
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${roleColors[row.role] || roleColors['Operario']}`}>
                        {row.role}
                    </span>
                );
            }
        },
        { header: 'Última Conexión', key: 'lastLogin', render: (row) => <span className="text-slate-500 font-medium">{row.lastLogin}</span> },
        { 
            header: 'Estado', 
            key: 'status',
            render: (row) => (
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${row.status === 'Activo' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                    {row.status}
                </span>
            )
        },
        {
            header: 'Acciones',
            key: 'actions',
            render: (row) => (
                <Button onClick={() => handleOpenModal(row)} tone="soft" className="!px-3 !py-1.5 text-xs flex items-center gap-1.5 font-bold rounded-lg hover:bg-slate-200 text-slate-600 border border-slate-200 shadow-sm">
                    <Edit2 size={14} /> Editar
                </Button>
            )
        }
    ];

    return (
        <div className="space-y-8 max-w-6xl mx-auto pb-10">
            {/* Header / Perfil del Usuario Actual */}
            <Card className="!p-8 bg-gradient-to-br from-indigo-900 to-slate-950 text-white overflow-hidden relative border-none">
                {/* Decorative background circle */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                    <div className="flex items-center gap-6">
                        <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center text-indigo-900 text-2xl font-black shadow-lg">
                            {currentUser.avatar}
                        </div>
                        <div>
                            <h2 className="text-3xl font-black italic tracking-tight">{currentUser.name}</h2>
                            <p className="text-indigo-200 font-medium flex items-center gap-2 mt-1">
                                <Shield size={16} /> {currentUser.role}
                            </p>
                            <p className="text-slate-400 text-sm mt-1">{currentUser.email}</p>
                        </div>
                    </div>
                    <Button className="bg-white/10 hover:bg-white/20 text-white font-bold !rounded-xl backdrop-blur-sm border border-white/10">
                        Editar mi perfil
                    </Button>
                </div>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Gestión de Equipo (2/3 del ancho) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex justify-between items-end">
                        <div>
                            <h3 className="text-xl font-black italic text-slate-900">Gestión de Equipo</h3>
                            <p className="text-slate-500 text-sm mt-1">Administra los accesos y roles del personal.</p>
                        </div>
                        <Button onClick={() => handleOpenModal()} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold !rounded-xl shadow-md shadow-indigo-500/20 border-none flex items-center gap-2">
                            <UserPlus size={18} /> Nuevo Usuario
                        </Button>
                    </div>
                    
                    <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden border border-slate-100">
                        <Table columns={teamCols} rows={teamData} />
                    </div>
                </div>

                {/* Configuración de Seguridad (1/3 del ancho) */}
                <div className="space-y-6">
                    <h3 className="text-xl font-black italic text-slate-900">Seguridad y Alertas</h3>
                    
                    <Card className="!p-6 border border-slate-100 space-y-6">
                        {/* Notificaciones */}
                        <div>
                            <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                                <Bell className="text-indigo-500 h-5 w-5" /> Notificaciones
                            </h4>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-bold text-slate-700">Alertas por Email</p>
                                        <p className="text-xs text-slate-500">Recibir reportes semanales.</p>
                                    </div>
                                    <button 
                                        onClick={() => setNotifEmail(!notifEmail)}
                                        className={`w-12 h-6 rounded-full transition-colors relative ${notifEmail ? 'bg-emerald-500' : 'bg-slate-200'}`}
                                    >
                                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform shadow-sm ${notifEmail ? 'translate-x-7' : 'translate-x-1'}`}></div>
                                    </button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-bold text-slate-700">Alertas Críticas</p>
                                        <p className="text-xs text-slate-500">Notificar emergencias ICA.</p>
                                    </div>
                                    <button 
                                        onClick={() => setNotifAlerts(!notifAlerts)}
                                        className={`w-12 h-6 rounded-full transition-colors relative ${notifAlerts ? 'bg-emerald-500' : 'bg-slate-200'}`}
                                    >
                                        <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform shadow-sm ${notifAlerts ? 'translate-x-7' : 'translate-x-1'}`}></div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <hr className="border-slate-100" />

                        {/* Cambio de Contraseña */}
                        <div>
                            <h4 className="font-bold text-slate-800 flex items-center gap-2 mb-4">
                                <Key className="text-amber-500 h-5 w-5" /> Cambio de Contraseña
                            </h4>
                            <div className="space-y-3">
                                <Input 
                                    type="password" 
                                    placeholder="Contraseña actual" 
                                    icon={<Lock size={16} />} 
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                />
                                <Input 
                                    type="password" 
                                    placeholder="Nueva contraseña" 
                                    icon={<Key size={16} />} 
                                    value={newPassword}
                                    onChange={(e) => setCurrentNewPassword(e.target.value)}
                                />
                                <Button onClick={handleUpdatePassword} className="w-full mt-2 font-bold bg-slate-900 hover:bg-slate-800 text-white !rounded-xl">
                                    Actualizar Credenciales
                                </Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Modal para Crear/Editar Usuario */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
                    <Card as="form" onSubmit={handleSaveUser} className="w-full max-w-md !p-8 !rounded-[2.5rem] shadow-2xl relative border border-slate-100">
                        <button 
                            type="button" 
                            onClick={() => setIsModalOpen(false)} 
                            className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 font-bold bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                        >
                            ✕
                        </button>
                        <h2 className="text-2xl font-black mb-6 text-slate-900 flex items-center gap-2">
                            <div className="p-2 bg-indigo-100 rounded-xl text-indigo-600">
                                <Tag className="w-6 h-6" />
                            </div>
                            {editingUser ? 'Editar Usuario' : 'Nuevo Usuario'}
                        </h2>
                        
                        <div className="space-y-4">
                            <Input 
                                label="Nombre Completo" 
                                placeholder="Ej: Juan Pérez" 
                                required 
                                value={formName}
                                onChange={(e) => setFormName(e.target.value)}
                            />
                            
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Rol</label>
                                <div className="relative">
                                    <select 
                                        value={formRole}
                                        onChange={(e) => setFormRole(e.target.value)}
                                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 outline-none font-medium text-slate-700 focus:ring-2 focus:ring-indigo-500 appearance-none"
                                    >
                                        <option value="Administrador">Administrador</option>
                                        <option value="Veterinario">Veterinario</option>
                                        <option value="Operario">Operario</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</div>
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-700">Estado</label>
                                <div className="relative">
                                    <select 
                                        value={formStatus}
                                        onChange={(e) => setFormStatus(e.target.value)}
                                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 outline-none font-medium text-slate-700 focus:ring-2 focus:ring-indigo-500 appearance-none"
                                    >
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 text-xs">▼</div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <Button type="button" tone="soft" onClick={() => setIsModalOpen(false)} className="flex-1 font-bold !rounded-xl">
                                Cancelar
                            </Button>
                            <Button type="submit" className="flex-1 font-black bg-indigo-600 hover:bg-indigo-700 text-white border-none shadow-md shadow-indigo-500/30 !rounded-xl">
                                Guardar
                            </Button>
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default SettingsView;
