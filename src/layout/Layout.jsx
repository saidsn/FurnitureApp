import React from 'react';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
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