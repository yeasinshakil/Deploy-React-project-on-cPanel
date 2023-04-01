import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { AiOutlineQuestionCircle } from 'react-icons/ai';

const HostingPack = () => {
    return (
        <div className=' px-24 my-10'>
            <div>
                <div className='flex items-center gap-10 mb-2'>
                    <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>Unmetered</span> traffic (Unlimited GB)</p>
                    <AiOutlineQuestionCircle className=' text-primary' />
                </div>
            </div>
            <div>
                <div className='flex items-center gap-10 mb-2'>
                    <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>100</span> Websites</p>
                    <AiOutlineQuestionCircle className=' text-primary' />
                </div>
            </div>
            <div>
                <div className='flex items-center gap-10 mb-2'>
                    <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>100 GB</span> SSD Storage</p>
                    <AiOutlineQuestionCircle className=' text-primary' />
                </div>
            </div>
            <div>
                <div className='flex items-center gap-10 mb-2'>
                    <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>Free</span> Weekly Backups</p>
                    <AiOutlineQuestionCircle className=' text-primary' />
                </div>
            </div>
            <div>
                <div className='flex items-center gap-10 mb-2'>
                    <p className=' flex items-center gap-2 text-primary'><BsCheck className=' text-green' /> <span className=' font-medium'>24/7</span> Customer Support</p>
                    <AiOutlineQuestionCircle className=' text-primary' />
                </div>
            </div>
        </div>
    );
};

export default HostingPack;