import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Layout from './Layout'
import Navbar from './Navbar'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Conatct from './Conatct'
import Portofolio from './Portofolio'
import Notfound from './Notfound'
export default function App() {
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'About', element: <About /> },
        { path: 'Contact', element: <Conatct /> },
        { path: 'Portofolio', element: <Portofolio /> },
        { path: '*', element: <Notfound /> }
      ]
    }
  ])
  return <>
    <RouterProvider router={routers} />
  </>



}

