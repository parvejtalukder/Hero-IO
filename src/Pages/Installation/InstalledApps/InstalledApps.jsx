import React, { useEffect, useState } from 'react';
import SingleApp from './SingleApp/SingleApp';
import NoApp from '../../../Components/NoApp/NoApp';

const InstalledApps = () => {
    const [apps, setApps] = useState([]);
    const [appFound, setAppFound] = useState([]);
    const [sortedApps, setSortedApps] = useState([]);

    useEffect(() => {
        const storedIds = JSON.parse(localStorage.getItem("appIds")) || [];
        setAppFound(storedIds);
    }, []);

    useEffect(() => {
        fetch("/dataBase.json")
            .then(res => res.json())
            .then(data => setApps(data))
            .catch(err => console.error("Fetching ERR:", err));
    }, []);

    useEffect(() => {
        const installed = apps.filter(app => appFound.includes(app.id));
        setSortedApps(installed); 
    }, [apps, appFound]);

    const UnstallHandle = (appId) => {
        const storedIds = JSON.parse(localStorage.getItem("appIds")) || [];
        const updatedIds = storedIds.filter(id => id !== appId);
        localStorage.setItem("appIds", JSON.stringify(updatedIds));
        setAppFound(updatedIds);
    }

    const lessToHigh = () => {
        const sorted = [...sortedApps].sort((a, b) => a.downloads - b.downloads);
        setSortedApps(sorted);
    }

    const HighToLess = () => {
        const sorted = [...sortedApps].sort((a, b) => b.downloads - a.downloads);
        setSortedApps(sorted);
    }

    return (
        <div className='flex flex-col items-center gap-5'>
            {sortedApps.length > 0 ? (
                <div>
                    <section className='flex flex-col justify-center items-center gap-2'>
                        <h2 className='font-bold text-xl lg:text-4xl text-[#011e3a] text-center'>
                            Your Installed Apps
                        </h2>
                        <p className='text-[#627382] font-normal text-xl text-center lg:text-justify'>
                            Explore All Trending Apps on the Market developed by us
                        </p>
                    </section>
                    <section className='flex justify-between items-center w-full'>
                        <h2 className='font-bold py-5'>{sortedApps.length} Apps</h2>
                        <details className="dropdown">
                          <summary className="m-1">Sort By Downloads</summary>
                          <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li onClick={HighToLess}><a>High to low</a></li>
                            <li onClick={lessToHigh}><a>Low to high</a></li>
                          </ul>
                        </details>
                    </section>
                    {sortedApps.map(app => (
                        <SingleApp key={app.id} id={app.id} App={app} UnstallHandle={UnstallHandle} />
                    ))}
                </div>
            ) : (
                <div className='flex flex-col justify-center items-center gap-3'>
                    <section>
                        <img src="https://i.ibb.co.com/TMYGZSwy/no-App.png" alt="404" />
                    </section>
                    <h2 className='font-bold text-4xl'>OPPS!! NOT INSTALLED APP FOUND</h2>
                </div>
            )}
        </div>
    );
};

export default InstalledApps;