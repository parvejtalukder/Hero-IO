import React from 'react';
import Mobile from '../../../assets/Device _ Iphone.png';
import Ellipse from '../../../assets/Ellipse.png';
import Clock from '../../../assets/CLock.png';
import Tick from '../../../assets/Tick.png';
import Status from '../../../assets/Status.png';
import Power from '../../../assets/Power.png';
import Cross from '../../../assets/Cross.png';

const MobileAndIcons = () => {
    return (
        <div>
            <div className='relative'>
                <img src={Ellipse} alt="Ellipse" className='hidden lg:block absolute top-20 -left-30'/>
                <img src={Clock} alt="Clock" className='hidden lg:block absolute top-20 -right-30'/>
                <img src={Tick} alt="Tick" className='hidden lg:block absolute top-50 -left-40'/>
                <img src={Status} alt="Status" className='hidden lg:block absolute top-50 -right-40'/>
                <img src={Power} alt="Power" className='hidden lg:block absolute top-80 -left-50'/>
                <img src={Cross} alt="Cross" className='hidden lg:block absolute top-80 -right-50'/>
                <img src={Mobile} alt="Mobile" className='w-[400px]'/>
            </div>
        </div>
    );
};

export default MobileAndIcons;