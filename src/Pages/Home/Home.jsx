// import React, { createContext, useEffect } from 'react';
import Banner from '../../Components/Templates/Home/Banner';
import { RouterContextProvider } from 'react-router';
import TrandingApps from '../../Components/Templates/Home/TrendingApps/TrandingApps';

// const TrendingAppsContext = createContext([]);
const Home = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            {/* max-w-6xl mx-auto */}
            <div>
                <Banner></Banner>
                <TrandingApps></TrandingApps>
            </div>
        </div>
    );
};

export default Home;