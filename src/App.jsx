import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import DashboardView from './features/dashboard/DashboardView.jsx';
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import ForgotPasswordPage from './pages/ForgotPasswordPage.jsx'
import AnimalsPage from './pages/dashboard/AnimalsPage.jsx';
import FeedingPage from './pages/dashboard/FeedingPage.jsx';
import WeightPage from './pages/dashboard/WeightPage.jsx';
import ReproductionPage from './pages/dashboard/ReproductionPage.jsx';
import HealthPage from './pages/dashboard/HealthPage.jsx';
import ReportsPage from './pages/dashboard/ReportsPage.jsx';
import SettingsPage from './pages/dashboard/SettingsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardView />, 
    children: [
      {
        path: 'animals', 
        element: <AnimalsPage />,
      },
      {
        path: 'feeding',
        element: <FeedingPage />,
      },
      {
        path: 'weight',
        element: <WeightPage />,
      },
      {
        path: 'reproduction',
        element: <ReproductionPage />,
      },
      {
        path: 'health',
        element: <HealthPage />,
      },
      {
        path: 'reports',
        element: <ReportsPage />,
      },
      {
        path: 'settings',
        element: <SettingsPage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
