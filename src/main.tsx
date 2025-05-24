import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import AuthLayout from './layouts/AuthLayout.tsx'
import LoginPage from './pages/LoginPage.tsx'
import RegisterPage from './pages/RegisterPage.tsx'
import AuthProvider from './components/providers/AuthProvider.tsx'
import ProtectedRoute from './components/providers/ProtectedRoute.tsx'
import AdminPage from './pages/AdminPage.tsx'
import { ItemPage } from './pages/ItemPage.tsx'
import CartPage from './pages/CartPage.tsx'
import SearchPage from './pages/SearchPage.tsx'
import WishlistPage from './pages/WishlistPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />
      },
      {
        path: 'admin',
        element: (<ProtectedRoute allowedRoles={['admin']}>
          <AdminPage />
        </ProtectedRoute>)
      },
      {
        path: 'search/term/:query',
        element: <SearchPage />
      },
      {
        path: 'item/id/:query',
        element: <ItemPage />
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: 'wishlist',
        element: <WishlistPage />
      }

    ]
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
