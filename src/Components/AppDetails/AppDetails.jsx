import React from 'react';
import { useLoaderData } from 'react-router';

const AppDetails = () => {
    const app = useLoaderData();
    return (
        <div className='py-20 px-40'>
            <section className='flex justify-start items-center gap-3'>
                <div>
                    <img src={app.image} alt={app.title} className='w-50' />
                </div>
                <div className='flex flex-col justify-start items-start'>
                    <h2 className='font-bold text-6xl'>{app.title}</h2>
                    <h2>Developed By {app.companyName}</h2>
                </div>
            </section>
        </div>
    );
};

export default AppDetails;