import React from 'react';
import Banner from '../../Components/Templates/Home/Banner';

const Home = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            {/* max-w-6xl mx-auto */}
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;