import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import About from './About'
import { Outlet } from 'react-router-dom'
import Conatct from './Conatct'
import Portofolio from './Portofolio'

export default function Layout() {
    return <>
        <Navbar />
        <Outlet/>
        <Footer />
    </>


}
