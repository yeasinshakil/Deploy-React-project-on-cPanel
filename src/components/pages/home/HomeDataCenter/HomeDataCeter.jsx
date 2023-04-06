import React from 'react';
import dataCenterMap from '../../../../assets/worldmap.webp';



function HomeDataCeter() {
  return (
    <div className='lg:px-24 px-6 sm:px-10 bg-lightGray lg:pb-14 pb-2 sm:pb-6'>
        <div className=' text-center py-12 text-primary'>
            <h1 className=' text-2xl sm:text-3xl lg:text-4xl text-primary font-semibold mb-6'>Data Centers All Around the World</h1>
            <p>Our web hosting, WordPress hosting, and cloud hosting plans offer server locations in: USA, United Kingdom, France, India, Singapore, Brazil, Lithuania, and the Netherlands.</p>
        </div>
        <img src={dataCenterMap} alt="" />
    </div>
  )
}

export default HomeDataCeter