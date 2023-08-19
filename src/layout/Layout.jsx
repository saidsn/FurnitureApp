import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer/>
        </>
    )
}

export default Layout;