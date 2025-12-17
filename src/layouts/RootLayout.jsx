import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer';
import NavBer from '../pages/Shared/NavBer';

const RootLayout = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;