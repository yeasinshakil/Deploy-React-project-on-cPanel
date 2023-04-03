import React from 'react';
import logo from '../../../assets/Hostinger_Logo.png';
import usaFlag from '../../../assets/Flag_of_the_United_States.png';
import {BiChevronDown} from 'react-icons/bi';
import { useState } from 'react';
import { useEffect } from 'react';
const NavBar = () => {
    const [shadow, setShadow] = useState(false);

    const shadowNavbar = () => {
        if(window.scrollY > 70) {
            setShadow(true)
        } else{
            setShadow(false)
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', shadowNavbar);
        return ()=> window.removeEventListener('scroll', shadowNavbar);
    }, [])

    return (
        <div className={`sticky top-0 w-[100%] h-[60px] ${shadow && 'bg-white'} flex items-center justify-between px-8 py-10 ${shadow && 'shadow-lg'} z-50`}>
            <div className=' flex items-center gap-9 '>
                <img src={logo} alt="HOSTINGER" className='w-[100%] max-w-[160px] max-h-[80px]' />
                <div className=' flex items-center gap-1'>
                    <img src={usaFlag} alt="" className=' w-[30px] h-[15px]' />
                    <p className=' font-semibold'>English</p>
                </div>
            </div>
            <div className=' flex gap-8'>
                <button className=' flex items-center hover:text-gray-500'>
                    Hosting <BiChevronDown/>
                </button>
                <button className=' flex items-center hover:text-gray-500'>
                    VPS <BiChevronDown/>
                </button>
                <button className=' flex items-center hover:text-gray-500'>
                    Email <BiChevronDown/>
                </button>
                <button className=' flex items-center hover:text-gray-500'>
                    Domain <BiChevronDown/>
                </button>
                <button className=' px-3 py-2 border-2 rounded-md font-semibold border-gray-600 hover:text-gray-500'>
                    Log in
                </button>
            </div>
        </div>
    );
};

export default NavBar;