import React, { Suspense, useEffect, useState } from 'react';
import App from '../../Components/Templates/Home/TrendingApps/App/App';
import NoApp from '../../Components/NoApp/NoApp';

const Apps = () => {
    const [apps, setApps] = useState([]);
    const [SearchApps, setSearchApps] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    fetch("/dataBase.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data); 
        setSearchApps(data);
      })
      .catch((err) => console.error("Faching ERR:", err));
    }, []);

    const searchApp = (e) => {
        setLoading(true);
        const ToSearch = e.target.value.toLowerCase();
        const results = apps.filter(app => {
            const title = String(app.title || "").toLowerCase();
            return title.includes(ToSearch);
        });
        setTimeout(() => {
            setLoading(false);
            setSearchApps(results);
        }, 500);
        // console.log(results);
    };
    // console.log(apps);

    return (
        <div className='p-12 lg:p-20 flex flex-col gap-8 lg:gap-16 bg-gray-100 min-h-screen'>
            <section className='text-center'>
                <h2 className='text-[#011e3a] font-bold text-xl lg:text-[48px]'>Our All Applications</h2>
                <p className='text-[16px] text-center text-[#627382] font-inter lg:text-[20px] font-normal lg:leading-[32px]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </section>
            <section className='flex flex-col'>
                {/* search and othes */}
                <div className='flex justify-between items-center gap-3 flex-col lg:flex-row'>
                    <h2 className='text-[#011e3a] font-bold text-xl'> (<span>{SearchApps.length}</span>) Apps Found</h2>
                    <div>
                        <label className="input text-[#011e3a]">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                  strokeLinejoin="round"
                                  strokeLinecap="round"
                                  strokeWidth="2.5"
                                  fill="none"
                                  stroke="currentColor"
                                >
                                  <circle cx="11" cy="11" r="8"></circle>
                                  <path d="m21 21-4.3-4.3"></path>
                                </g>
                              </svg>
                              <input onChange={searchApp} id='targetTxt' className='text-[#011e3a]' type="search" required placeholder="Search" />
                        </label>
                    </div>
                </div>
                {/* apps */}
                <div>
                        {
                            !loading &&
                            <section className='grid grid-cols-1 lg:grid-cols-4 gap-5 py-4'>
                            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
                            {
                                SearchApps.map(app => <App key={app.id} app={app} />)
                            }
                            </Suspense>
                            </section>
                        }
                        {
                            loading && <div className='h-full w-full  flex justify-center items-center py-30 px-50'>
                                <span className="loading loading-bars loading-xl"></span>
                            </div>
                        } 
                        {
                            SearchApps.length == 0 && <div className='h-full w-full  flex justify-center items-center py-30 px-50'>
                                <NoApp></NoApp>
                                {/* <p>No App Found...</p> */}
                            </div>
                        }
                </div>
            </section>
        </div>
    );
};

export default Apps;