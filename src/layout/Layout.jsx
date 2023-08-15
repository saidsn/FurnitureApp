import React from 'react';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <Navbar />
            {<Outlet />}
        </>
    )
}

export default Layout;