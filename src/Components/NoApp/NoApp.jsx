import React from 'react';
import { Link } from 'react-router';

const NoApp = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <section>
                <img src="https://i.ibb.co.com/TMYGZSwy/no-App.png" alt="404" />
            </section>
            <h2 className='font-bold text-4xl'>OPPS!! APP NOT FOUND</h2>
        </div>
    );
};

export default NoApp;