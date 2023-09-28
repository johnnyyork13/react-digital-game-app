import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  // {
  //   path: "/results",
  //   element: <Cart />
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
