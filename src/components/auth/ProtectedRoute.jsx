import React from 'react';
import { Navigate } from 'react-router-dom';
import { getCurrentUser } from '../../services/auth/authService.js';

export default function ProtectedRoute({ children, allowedRoles }) {
  const currentUser = getCurrentUser();
  const currentUserRole = currentUser ? currentUser.role : 'operativo'; 

  if (!allowedRoles.includes(currentUserRole)) {
    alert('Acceso Denegado: Tu rol no tiene permisos para acceder a esta área.');
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
