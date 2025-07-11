import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from "@router/routes";
import { RouterProvider } from 'react-router';
import '@styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
