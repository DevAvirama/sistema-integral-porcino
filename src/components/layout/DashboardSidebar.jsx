import { Link, NavLink, useNavigate } from 'react-router-dom'
import BrandMark from '../BrandMark.jsx'
import Button from '../ui/Button.jsx'
import { authService } from '../../services/auth/authService.js'

export default function DashboardSidebar({ items }) {
  const navigate = useNavigate();

  // Obtenemos el usuario real logueado. Si no hay, asignamos operativo por seguridad.
  const user = authService.getCurrentUser ? authService.getCurrentUser() : JSON.parse(localStorage.getItem('user'));
  const userRole = user?.role || 'operativo'; 

  // Lógica de filtrado basada en el rol
  const filteredItems = items.filter(item => {
    if (userRole === 'veterinario') {
      // Veterinario no ve Alimentación ni Peso
      return !['/dashboard/feeding', '/dashboard/weight'].includes(item.path);
    }
    if (userRole === 'operativo') {
      // Operativo no ve Salud, Reproducción, Reportes ni Configuración
      return !['/dashboard/health', '/dashboard/reproduction', '/dashboard/reports', '/dashboard/settings'].includes(item.path);
    }
    // Administrador u otros ven todo
    return true;
  });

  // Función para cerrar sesión correctamente
  const handleLogout = () => {
    if (authService.logout) {
      authService.logout();
    } else {
      localStorage.removeItem('user');
    }
    navigate('/login');
  };

  return (
    <aside className="w-full bg-slate-950 px-6 py-8 text-white xl:min-h-screen xl:w-80 xl:px-8 flex flex-col">
      <BrandMark light />

      {/* SECCIÓN DE PERFIL E INDICADOR DE ROL */}
      <div className="mt-8 px-5 py-4 bg-white/5 rounded-2xl border border-white/10 flex flex-col items-start">
        <p className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Usuario Actual</p>
        <p className="font-bold text-white mt-1">{user?.name || 'Usuario Invitado'}</p>
        
        {/* Badge Dinámico */}
        <span className={`inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border 
          ${userRole === 'administrador' || userRole === 'admin' ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' : 
            userRole === 'veterinario' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' : 
            'bg-blue-500/20 text-blue-300 border-blue-500/30'}`}>
          {userRole}
        </span>
      </div>

      <nav className="mt-8 grid gap-2 flex-1">
        {filteredItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/dashboard'}
            className={({ isActive }) =>
              `rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                isActive
                  ? 'bg-emerald-400 text-slate-950'
                  : 'bg-white/0 text-slate-300 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <Button className="mt-8" onClick={handleLogout} tone="ghost">
        Cerrar Sesión
      </Button>
    </aside>
  )
}