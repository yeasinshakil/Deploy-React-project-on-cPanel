import React from 'react';

import FreeMigrationimg from '../../../../assets/free-migration-1x.webp';
import { BsCheck } from 'react-icons/bs';
import AllInOneReview from '../HomeAllinone/AllInOneReview';


function CustomSupport() {
    const reviewData = [
        {
            title: 'Trustpilot',
            description: 'I have migrated to Hostinger few months ago. I am extremely satisfied with the hosting, and with their support.',
            ratings: 5,
            id: 11
        },
        {
            title: 'Trustpilot',
            description: `Migrated over a website and email from another provider. Hostinger's UI is easy to use and the support was quick, friendly, and very helpful.`,
            ratings: 5,
            id: 12
        },
        {
            title: 'Trustpilot',
            description: 'Very positive experience as a new customer. I migrated my website hosting and the support was amazing and very responsive.',
            ratings: 5,
            id: 13
        },
    ]
    return (
        <div>

            <div className='px-10 py-4 sm:px-24 sm:py-8 w-full grid justify-center items-center grid-cols-1 sm:grid-cols-2 z-10'>
                <div className=' flex flex-col justify-center items-center sm:justify-start sm:items-start'>
                    <div className=' w-[500px] py-14'>
                        <h1 className=' text-4xl font-semibold text-primary my-10'>Free Migration</h1>
                        <div>
                            <div className='flex items-center mb-4'>
                                <p className=' flex justify-center gap-2 text-primary text-lg'><BsCheck className=' text-green text-semibold' />Transfer your website using our free automatic website migration tool.</p>

                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-2 mb-4 '>
                                <p className=' flex items-center gap-2 text-primary text-lg'><BsCheck className=' text-green text-semibold' />Our agents will guide you in every step of the way.</p>
                                
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-2 mb-4 text-lg '>
                                <p className=' flex items-center gap-2 text-primary text-lg'><BsCheck className=' text-green text-semibold' />Your website will be transferred within 24 hours.</p>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>


                <div className=' mt-4 sm:mt-20'>
                    <img src={FreeMigrationimg} alt="" className=' w-full' />
                </div>
            </div>
            <div className=' grid grid-cols-3 gap-6 mx-24'>

                {reviewData.map((data, i)=> (
                    <div className=' h-[220px] bg-[#fafbff] px-4 py-8 rounded-sm relative mb-16'>

                        <AllInOneReview 
                        key={i}
                        title={data.title}
                        description={data.description}
                        rating={data.ratings}
                        ></AllInOneReview>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomSupport