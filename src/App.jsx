import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import DashboardView from './features/dashboard/DashboardView.jsx';
import LandingPage from './pages/LandingPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import AnimalsView from './features/animals/AnimalsView.jsx';

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
    path: '/dashboard',
    element: <DashboardView />, 
    children: [
      {
        path: 'animals', 
        element: <AnimalsView />,
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
