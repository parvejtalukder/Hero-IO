import React from 'react';
import GitHub from '../../assets/github-mark-white.png'
import { Link } from 'react-router';
import HeroIO from '../../assets/logo.png'
import Root from '../../Pages/Root/Root';

const Header = () => {

    const NavLinks = <>
        <Link className='pl-4 text-[16px]' to={Root}>Home</Link>
        <Link className='pl-4 text-[16px]'>Apps</Link>
        <Link className='pl-4 text-[16px]'>Installation</Link>
    </>

    return (
        <div className='buttom-shadow'>
            <div className="navbar bg-base-100 max-w-6xl mx-auto">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    {NavLinks}
                  </ul>
                </div>
                <Link className='flex justify-center items-center gap-2'>
                    <img src={HeroIO} alt="HeroIO" className='w-10'/>
                    <p className="text-transparent bg-clip-text bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)100%)] font-inter font-bold leading-[26px] capitalize text-left text-[26px]">HERO.IO</p>
                </Link>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  {NavLinks}
                </ul>
              </div>
              <div className="navbar-end">
                <Link to={'https://github.com/parvejtalukder'} className='gap-2w-[145px] h-[43px] flex flex-row justify-center items-center gap-[10px] px-4 py-3 rounded bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>
                    <img src={GitHub} alt="GitHub Icon" className='w-[15px]'/>
                    <p className="text-white font-semibold text-[16px]">Contribution</p>
                </Link>
              </div>
            </div>
        </div>
    );
};

export default Header;