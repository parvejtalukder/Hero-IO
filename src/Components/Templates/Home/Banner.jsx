import React from 'react';
import { Link } from 'react-router';
import MobileAndIcons from './MobileAndIcons';

const Banner = () => {
    return (
        <div>
            <div className='p-[80px] flex flex-col justify-center items-center gap-[40px] relative'>
                <section className='flex flex-col justify-center items-center gap-[16px]'>
                    <h2 className=' text-4xl font-bold lg:text-[72px] text-center lg:leading-[80px]'>We Build <br /> <span className=' text-transparent bg-clip-text bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] font-inter font-bold leading-[26px] capitalize text-left lg:text-[72px]'>Productive</span> Apps</h2>
                    <p className='text-[16px] text-justify text-[#627382] font-inter lg:text-[20px] font-normal lg:leading-[32px]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </section>
                <div className='flex justify-center items-center gap-6 lg:gap-10'>
                        <Link to={'https://play.google.com/'} className='flex justify-between items-center border-2 border-gray-200 px-5 py-2 rounded-xl gap-4'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_Play_2022_icon.svg" alt="GPS" className='w-[22px] lg:w-[32px]' />
                            <p className=' hidden lg:block font-bold text-[10px] lg:text-[16px]'>Play Store</p>
                        </Link>
                        <Link to={'https://www.apple.com/app-store/'} className='flex justify-between items-center border-2 border-gray-200 px-5 py-2 rounded-xl gap-4'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="AS" className='w-[22px] lg:w-[32px]' />
                            <p className=' hidden lg:block font-bold text-[10px] lg:text-[16px]'>App Store</p>
                        </Link>
                    </div>
                <section className='max-w-full'>
                    <MobileAndIcons></MobileAndIcons>
                </section>
            </div>
            <div className='flex justify-center items-center -mt-20'>
                <section className='h-auto w-full bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] p-[80px] flex flex-col justify-center items-center gap-10'>
                    <h2 className='text-[24px] text-center font-semibold lg:text-[48px] text-white'>Trusted by Millions, Built for You</h2>
                    <section className='flex flex-col lg:flex-row justify-around items-center text-white text-center lg:gap-[100px]'>
                        <div className='flex flex-col justify-center items-center gap-[16px]'>
                            <p className='font-normal text-[16px]'>Total Downloads</p>
                            <h2 className='font-extrabold text-[64px] leading-[72px]'>29.6M</h2>
                            <p className='font-normal text-[16px]'>21% more than last month</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-[16px]'>
                            <p className='font-normal text-[16px]'>Total Reviews</p>
                            <h2 className='font-extrabold text-[64px] leading-[72px]'>906K</h2>
                            <p className='font-normal text-[16px]'>46% more than last month</p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-[16px]'>
                            <p className='font-normal text-[16px]'>Active Apps</p>
                            <h2 className='font-extrabold text-[64px] leading-[72px]'>132+</h2>
                            <p className='font-normal text-[16px]'>31 more will Launch</p>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    );
};

export default Banner;