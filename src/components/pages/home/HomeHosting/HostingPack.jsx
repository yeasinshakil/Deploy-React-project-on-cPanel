import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { GoPlus } from 'react-icons/go';
import { BiChevronDown } from 'react-icons/bi';

const HostingPack = () => {
    return (
        <div className=' mx-24 px-4 py-5 my-10 mt-24 grid grid-cols-3 border rounded-md shadow-md border-purple/30'>
            <div className=' w-[350px] py-14'>
                <div>
                    <div className='flex items-center justify-between gap-10 mb-2'>
                        <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>Unmetered</span> traffic (Unlimited GB)</p>
                        <AiOutlineQuestionCircle className=' text-primary' />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-10 mb-2'>
                        <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>100</span> Websites</p>
                        <AiOutlineQuestionCircle className=' text-primary' />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-10 mb-2 '>
                        <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>100 GB</span> SSD Storage</p>
                        <AiOutlineQuestionCircle className=' text-primary' />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-10 mb-2'>
                        <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>Free</span> Weekly Backups</p>
                        <AiOutlineQuestionCircle className=' text-primary' />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-10 mb-2 '>
                        <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>24/7</span> Customer Support</p>
                        <AiOutlineQuestionCircle className=' text-primary' />
                    </div>
                </div>
            </div>

            <div className=' flex flex-col justify-center items-center border-x border-x-silver/30  w-[350px]'>
                <h1 className=' font-semibold text-center text-2xl mb-4 text-primary'>Web Hosting</h1>
                <div className='flex justify-center items-center gap-3 mb-2'>
                    <p className=' text-purple'>$11.09</p>
                    <p className=' font-medium px-2 py-1 rounded-3xl text-primary bg-blue/30'>SAVE 75%</p>
                </div>
                <p className=' text-xl sm:text-xl text-violet text-center mb-2'>$ <span className=' text-violet text-2xl sm:text-4xl font-semibold'>2.99</span>/mo</p>
                <p className='flex items-center justify-center text-lg font-medium text-primary'><GoPlus /> 3 Months Free</p>
                <div className=' mt-3 flex justify-center items-center w-[220px] bg-blue text-white rounded-sm hover:bg-opacity-90 px-10 py-2 cursor-pointer transition-all'>
                    <button className=' text-md'>Add to cart</button>
                </div>
                <p className=' mt-3 text-silver'>$6.99/mo when you renew</p>
            </div>

            <div className=' w-[350px] py-14'>
                <div>
                    <div className='flex items-center justify-between gap-10 mb-2'>
                        <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>Unmetered</span> traffic (Unlimited GB)</p>
                        <AiOutlineQuestionCircle className=' text-primary' />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-10 mb-2'>
                        <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>100</span> Websites</p>
                        <AiOutlineQuestionCircle className=' text-primary' />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-10 mb-2 '>
                        <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>100 GB</span> SSD Storage</p>
                        <AiOutlineQuestionCircle className=' text-primary' />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-10 mb-2'>
                        <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>Free</span> Weekly Backups</p>
                        <AiOutlineQuestionCircle className=' text-primary' />
                    </div>
                </div>
                <div>
                    <div className='flex items-center justify-between gap-10 mb-2 '>
                        <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>24/7</span> Customer Support</p>
                        <AiOutlineQuestionCircle className=' text-primary' />
                    </div>
                </div>
            </div>
            <div className=' w-full flex col-span-3 justify-center items-center mt-6 pt-2 border-t border-purple/30'>
                <h1 className=' flex items-center font-medium text-primary'>See all features <BiChevronDown/> </h1>
            </div>
        </div>
    );
};

export default HostingPack;