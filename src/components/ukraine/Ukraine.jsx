import React from 'react';

const Ukraine = () => {
    const flag = 'https://www.transparentpng.com/thumb/ukraine-flag/Y1aZ49-ukraine-flag-clipart-png-photos.png';
    return (
        <div className=' bg-primary text-white text-center py-3 flex flex-col sm:flex-row justify-center items-center gap-2'>
            <img src={flag} alt="Ukraine" className=' w-100 max-w-[30px]' />
            <p>We stand with Ukraine. To make an impact, please consider <a className=' font-semibold underline'>donating</a> </p>
        </div>
    );
};

export default Ukraine;