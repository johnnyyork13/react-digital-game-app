import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Gamepage from './components/Gamepage.jsx';
import WishList from './components/WishList.jsx';
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
    element: <WishList />
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
