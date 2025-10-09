import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        // max-w-6xl mx-auto
        <div className='ourFont'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;