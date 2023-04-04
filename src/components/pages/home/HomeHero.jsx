import React from 'react';
import homeHero from '../../../assets/homepage-hero-2x.webp';
import { TbWorld } from 'react-icons/tb';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsHeadset, BsPlus } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import { SiAdguard } from 'react-icons/si';
import CountDown from './CountDown';

const HomeHero = () => {
    return (
        <div className='px-10 py-4 lg:px-24 lg:py-8 w-full grid grid-cols-1 lg:grid-cols-2 z-10'>
            <div className=' flex flex-col justify-center items-center lg:justify-start lg:items-start'>
                <div>
                    <h1 className=' text-2xl text-center  sm:text-3xl lg:text-start lg:text-5xl font-semibold text-blue-950 py-2 text-violet'>Everything You Need to Create a Website</h1>
                    <p className=' text-primary py-2 font-medium text-xl text-center lg:text-start sm:text-3xl'>Up to <span className='text-blue'>75%</span> off Hosting</p>
                </div>
                <div className=' flex items-center gap-2 text-lg py-1 sm:text-xl sm:py-2'>
                    <TbWorld className='text-blue' />
                    <p>Free Domain</p>
                    <AiOutlineQuestionCircle className=' text-violet' />
                </div>
                <div className=' flex items-center gap-2 text-lg py-1 sm:text-xl sm:py-2'>
                    <BsHeadset className='text-blue' />
                    <p>24/7 Customer Support</p>
                </div>
                <div className='py-1 sm:py-2 font-semibold'>
                    <p className=' text-lg sm:text-xl text-violet'>$ <span className=' text-violet text-3xl sm:text-6xl'>2.99</span>/mo</p>
                </div>
                <div className='flex items-center gap-1 text-sm py-1 sm:text-md sm:py-2 font-semibold text-violet'>
                    <GoPlus />
                    <p className=' text-2xl'>3 Months Free</p>
                </div>

                {/* Countdown section */}
                <div className=' mt-6'>
                    <CountDown></CountDown>
                </div>
                <div className=' mt-6 flex justify-center items-center w-[260px] bg-blue text-white rounded-sm hover:bg-opacity-90 px-10 py-3 cursor-pointer transition-all'>
                    <button className=' text-lg'>Claim Deal</button>
                </div>
                <div className=' flex justify-center items-center gap-2 mt-4'>
                    <SiAdguard />
                    <p className=' text-lg'>30-Day Money-Back Guarantee</p>
                </div>
            </div>
            <div className=' mt-4 lg:mt-20'>
                <img src={homeHero} alt="" className=' w-full' />
            </div>
        </div>
    );
};

export default HomeHero;