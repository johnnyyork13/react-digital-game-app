import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gamepage from './components/Gamepage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/:name",
    element: <Gamepage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
