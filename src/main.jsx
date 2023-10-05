import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gamepage from './components/Gamepage.jsx';
import Wishlist from './components/Wishlist.jsx';
import Results from './components/Results.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/game",
    element: <Gamepage />
  },
  {
    path: "/game/:name",
    element: <Gamepage />
  },
  {
    path: "/wishlist",
    element: <Wishlist />
  },
  {
    path: "/results/:name",
    element: <Results />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
