import React from 'react';
import Loading from '../../Components/NoApp/Loading';
import InstalledApps from './InstalledApps/InstalledApps';

const Installation = () => {
    return (
        <div className='py-8 px-4 lg:p-30 bg-gray-100 flex flex-col gap-3'>
            {/* <Loading></Loading> */}
            <section>
                <InstalledApps></InstalledApps>
            </section>
        </div>
    );
};

export default Installation;