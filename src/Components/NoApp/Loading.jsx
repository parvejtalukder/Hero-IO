import React from 'react';

const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3'>
            <section>
                <span className="loading loading-bars loading-xl"></span>
            </section>
            <h2 className='font-bold text-4xl'>Loading, Wait...</h2>
        </div>
    );
};

export default Loading;