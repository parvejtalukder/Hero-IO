import React, { Suspense, useEffect, useState } from 'react';
import App from './App/App';
import { Link } from 'react-router';

const TrandingApps = () => {

    const [trendingApps, setTrendingApps] = useState([]);

    useEffect(() => {
    fetch("/trendingApps.json")
      .then((res) => res.json())
      .then((data) => {
        setTrendingApps(data); 
      })
      .catch((err) => console.error("Faching ERR:", err));
    }, []);

    console.log(trendingApps);

    return (
        <div>
            <div className='max-w-6xl mx-auto py-20 bg-gray-100 flex flex-col justify-center items-center gap-0'>
                <section className='text-center'>
                    <h2 className='font-bold text-[#001931FF] text-[24px] lg:text-[48px]'>Trending Apps</h2>
                    <p className='text-[#627382FF] text-[16px] lg:text-[24px]'>Explore All Trending Apps on the Market developed by us</p>
                </section>
                <section className='grid grid-cols-1 lg:grid-cols-4 gap-5 p-10'>
                    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                    {
                        trendingApps
                            // .filter(app => app.id <= 20)
                            .map(app => <App key={app.id} app={app} />)
                    }
                    </Suspense>
                </section>
                <section>
                    <Link to={'/apps'} className='w-[125px] lg:w-[145px] h-[43px] flex flex-row justify-center items-center gap-[10px] px-4 py-3 rounded bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>
                    <p className="text-white font-semibold text-[12px] lg:text-[16px]">All Apps</p>
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default TrandingApps;