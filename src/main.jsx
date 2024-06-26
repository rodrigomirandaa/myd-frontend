import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CatalogoClinicas } from './pages/CatalogoClinicas/CatalogoClinicas/CatalogoClinicas.jsx';
import InitialPage from './pages/InitialPage/InitialPage.jsx';
import SobrePage from './pages/SobrePage/SobrePage.jsx';
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
    // errorElement: <ErrorPage />,
    children: [
      { path: '/catalogo-clinicas', element: <CatalogoClinicas /> },
    ],
  },
  { 
    path: '/sobre', 
    element: <SobrePage/>
    // errorElement: <ErrorPage />,
  },
  {
    path: '/home',
    element: <Home/>
    // errorElement: <ErrorPage />,

  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
