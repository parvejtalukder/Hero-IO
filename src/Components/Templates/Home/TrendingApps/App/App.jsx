import React from 'react';
import SIcon from '../../../../../assets/icon-ratings.png'
import DIcon from '../../../../../assets/icon-downloads.png'

const App = ({app}) => {

    return (
        <div>
            <section className='bg-white rounded-2xl w-full h-full p-5'>
                <figure className='bg-gray-100 rounded-2xl p-3'>
                    <img src={app?.image} alt={app.title} className='rounded-2xl w-full h-auto' />
                </figure>
                <section className='flex flex-col justify-start items-start pt-2 gap-2 w-full'>
                    <h2 className='text-[#001931] text-xl font-medium'>{app.title}</h2>
                    <div className='flex justify-between items-center w-full -pt-1'>
                        <h2 className='bg-[#F1F5E8] px-2 py-1 rounded-xl text-[#00D390] flex justify-between items-center gap-1'> 
                            <img src={DIcon} className='w-4  h-4' />
                            {app.downloads / 100000}M</h2>
                        <h2 className='bg-[#FFF0E1] px-2 py-1 rounded-xl text-[#FF8811] flex justify-between items-center gap-1'>
                            <img src={SIcon} className='w-4  h-4' />
                            {parseInt(app.ratings[4].name)}</h2>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default App;