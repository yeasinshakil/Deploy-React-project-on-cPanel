import React from 'react';
import homeHero from '../../../../assets/homepage-hero-2x.webp';
import {TbWorld} from 'react-icons/tb';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {BsHeadset, BsPlus} from 'react-icons/bs';
import {GoPlus} from 'react-icons/go';

const HomeHero = () => {
    return (
        <div className='px-10 py-4 sm:px-24 sm:py-8 w-full grid grid-cols-1 sm:grid-cols-2'>
            <div className=' flex flex-col justify-center items-center sm:justify-start sm:items-start'>
                <div>
                <h1 className=' text-2xl text-center sm:text-start sm:text-5xl font-semibold text-blue-950 py-2 text-violet'>Everything You Need to Create a Website</h1>
                <p className=' text-primary py-2 font-medium text-xl text-center sm:text-start sm:text-3xl'>Up to <span className='text-blue'>75%</span> off Hosting</p>
                </div>
                <div className=' flex items-center gap-2 text-lg py-1 sm:text-xl sm:py-2'>
                    <TbWorld className='text-blue'/>
                    <p>Free Domain</p>
                    <AiOutlineQuestionCircle className=' text-violet'/>
                </div>
                <div className=' flex items-center gap-2 text-lg py-1 sm:text-xl sm:py-2'>
                    <BsHeadset className='text-blue'/>
                    <p>24/7 Customer Support</p>
                </div>
                <div className='py-1 sm:py-2 font-semibold'>
                    <p className=' text-lg sm:text-xl text-violet'>$ <span className=' text-violet text-3xl sm:text-6xl'>2.99</span>/mo</p>
                </div>
                <div className='flex items-center gap-1 text-sm py-1 sm:text-md sm:py-2 font-semibold text-violet'>
                    <GoPlus/>
                    <p className=' text-2xl'>3 Months Free</p>
                </div>
            </div>
            <div>
                <img src={homeHero} alt="" className=' w-full' />
            </div>
        </div>
    );
};

export default HomeHero;