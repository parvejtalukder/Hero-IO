import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <Header></Header>
        <div className='flex flex-col justify-center items-center gap-4 py-40'>
            <section>
                <img src="https://i.postimg.cc/kMfxHnRX/Screenshot-2025-12-07-7-30-38-PM-removebg-preview.png" alt="404" />
            </section>
            <h2 className='font-bold text-3xl'>Oops, page not found!</h2>
            <Link to={'/'} className='w-[125px] lg:w-[145px] h-[43px] flex flex-row justify-center items-center gap-[10px] px-4 py-3 rounded bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>
                    <p className="text-white font-semibold text-[12px] lg:text-[16px]">Go Home</p>
            </Link>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Error;