import React from 'react';
import Header from '../components/header';
import Navbar from '../components/navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
        </>
    )
}

export default Layout;