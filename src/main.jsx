import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Main from './pages/Main/index.jsx'
import NotFound from './pages/NotFound/index.jsx'

const router = createBrowserRouter([
   {
     path: "/",
     element: <App/>,
     children: [
      {index:true, element: <Main/>}
     ]
   },
   {
     path: "*", element: <NotFound/>
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
