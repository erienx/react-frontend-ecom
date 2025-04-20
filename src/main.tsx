import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage.tsx'
import Layout from './layouts/MainLayout.tsx'
import HomePage from './pages/HomePage.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ContactPage from './pages/ContactPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
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
      }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />,
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
