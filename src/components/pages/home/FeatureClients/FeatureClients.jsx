import React from 'react';
import ClientReview from './ClientReview';
import client1 from '../../../../assets/client 1.jpg';
import client2 from '../../../../assets/client 2.jpg';
import client3 from '../../../../assets/client 3.jpg';

const FeatureClients = () => {
    const clientsData = [
        {
            name: 'Jake Sinclair',
            post: 'Brand Designer',
            descr: 'Hostinger impressed me with amazing customer experience and effortless migration from my previous hosting provider.',
            rating: 5,
            photo: client1
        },
        {
            name: 'Mohamed Yassen Sattar',
            post: 'Graphic and Web Designer',
            descr: 'Support matters to me the most. Your specialists were always there to help me immediately.',
            rating: 5,
            photo: client2
        },
        {
            name: 'Jhon Ortega',
            post: 'Entrepreneur',
            descr: 'I was looking for a hosting company that is very intuitive for beginners and very well-configured for good performance.',
            rating: 5,
            photo: client3
        },
    ]

    return (
        <div className=' flex flex-col justify-center items-center px-24 py-8'>
            <h1 className=' text-5xl font-semibold text-primary py-8'>Featured Client Stories</h1>
            <div className=' grid grid-cols-3 gap-5 py-12'>
                
                    {clientsData.map((data, i)=> (
                        <div className=' w-full h-full relative border border-gray rounded-md'>
                            <ClientReview
                            key={i}
                            name={data.name}
                            description={data.descr}
                            photo={data.photo}
                            rating={data.rating}
                            post={data.post}
                            ></ClientReview>
                        </div>
                    ))}
                </div>
            </div>
        
    );
};

export default FeatureClients;