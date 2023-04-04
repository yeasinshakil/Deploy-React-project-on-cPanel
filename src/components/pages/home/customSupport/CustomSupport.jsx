import React from 'react';

import allInOne from '../../../../assets/customer-support-1x.webp';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { BsCheck } from 'react-icons/bs';
import AllInOneReview from '../HomeAllinone/AllInOneReview';


function CustomSupport() {
    const reviewData = [
        {
            title: 'Trustpilot',
            description: 'Easy to use, intuitive and fluid interface, support always willing to assist in problems that may appear.',
            ratings: 5,
            id: 11
        },
        {
            title: 'Trustpilot',
            description: 'Easy to use platform. Very good and fast support. Highly recommended.',
            ratings: 5,
            id: 12
        },
        {
            title: 'Trustpilot',
            description: 'Even though I am a newbie in this world it has been very easy for me to understand and manage my site.',
            ratings: 5,
            id: 13
        },
    ]
    return (
        <div>

            <div className='px-6 sm:px-10 py-4 lg:px-24 lg:py-8 w-full grid justify-center items-center grid-cols-1 lg:grid-cols-2 z-10'>
                <div className=' flex flex-col justify-center items-center sm:justify-start sm:items-start'>
                    <div className=' lg:w-[500px] lg:py-14'>
                        <h1 className=' text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary my-4 sm:my-6 lg:my-10'>Our Team is Here to Help You 24/7</h1>
                        <div>
                            <div className='flex items-center mb-4'>
                                <p className=' flex items-center gap-2 text-primary text-lg'><BsCheck className=' text-green' /> Receive help from our agents anytime via live chat support.</p>

                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-2 mb-4 '>
                                <p className=' flex items-center gap-2 text-primary text-lg'><BsCheck className=' text-green' />Follow step-by-step video walkthroughs and guides.</p>
                                
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-2 mb-4 text-lg '>
                                <p className=' flex items-center gap-2 text-primary text-lg'><BsCheck className=' text-green' />Access a vast knowledgebase of in-depth tutorials.</p>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className=' mt-4 lg:mt-20'>
                    <img src={allInOne} alt="" className=' w-full' />
                </div>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-6 mx-6 lg:mx-24'>

                {reviewData.map((data, i)=> (
                    <div className=' h-[220px] sm:h-[200px] lg:h-[220px] bg-gray px-4 py-8 rounded-sm relative lg:mb-16'>

                        <AllInOneReview 
                        key={i}
                        title={data.title}
                        description={data.description}
                        rating={data.ratings}
                        ></AllInOneReview>
                    </div>
                ))}
            </div>

            <div className=' px-6 sm:px-10 lg:px-24 py-6 w-full flex flex-col justify-center items-center'>
                <h1 className=' text-2xl sm:text-4xl font-semibold text-primary my-5 sm:my-10 text-center'>Join 1,597,691 Website Owners</h1>
                <button className=' px-20 py-2 bg-purple/90 hover:bg-purple rounded-lg transition-all duration-300 text-lg text-white font-medium mb-6 '>Get Started</button>
                <p className=' flex items-center gap-1 text-primary text-base'><BsCheck className=' text-green text-lg' />30-Day Money-Back Guarantee</p>
            </div>
        </div>
    )
}

export default CustomSupport