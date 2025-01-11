import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from "react-router"
import Footer from '../components/Footer/Footer'

function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root
