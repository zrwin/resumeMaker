import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './auth/signIn/index.jsx'
import Home from './home/index.jsx'
import Dashboard from './dashboard/index.jsx'
import { ClerkProvider } from '@clerk/clerk-react'
import Edit from './dashboard/resume/[resumeId]/edit/index.jsx'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY


const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/dashboard/resume/:documentId/edit',
        element: <Edit/>
      }
    ]
  },
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/auth/signIn',
    element: <SignInPage/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ClerkProvider publishableKey={PUBLISHABLE_KEY} >
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
