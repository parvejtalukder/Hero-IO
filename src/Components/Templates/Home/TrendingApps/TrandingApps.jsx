import React, { useEffect, useState } from 'react';
import App from './App/App';

const TrandingApps = () => {

    const [trendingApps, setTrendingApps] = useState([]);

    useEffect(() => {
    fetch("/dataBase.json")
      .then((res) => res.json())
      .then((data) => {
        setTrendingApps(data); 
      })
      .catch((err) => console.error("Faching ERR:", err));
    }, []);

    console.log(trendingApps);

    return (
        <div>
            <div className='max-w-6xl mx-auto py-20 bg-gray-100 flex flex-col justify-center items-center gap-16'>
                <section className='text-center'>
                    <h2 className='text-[24px] lg:text-[48px]'>Trending Apps</h2>
                    <p className='text-[16px] lg:text-[24px]'>Explore All Trending Apps on the Market developed by us</p>
                </section>
                <section className='grid grid-cols-3 gap-5'>
                    {
                        trendingApps.map(app => <App key={app.id} app={app}></App>)
                    }
                </section>
            </div>
        </div>
    );
};

export default TrandingApps;