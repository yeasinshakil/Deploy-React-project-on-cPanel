import React from 'react'

function CountDown() {
  return (
    <div className=' flex gap-2 justify-center items-center text-primary'>
        <div className='w-10 h-10 border-gray-500 border rounded-md flex justify-center items-center p-6'>
            <p className=' text-2xl'>02</p>
        </div>
        <span>:</span>
        <div className='w-10 h-10 border-gray-500 border rounded-md flex justify-center items-center p-6'>
            <p className=' text-2xl'>18</p>
        </div>
        <span>:</span>
        <div className='w-10 h-10 border-gray-500 border rounded-md flex justify-center items-center p-6'>
            <p className=' text-2xl'>56</p>
        </div>
        <span>:</span>
        <div className='w-10 h-10 border-gray-500 border rounded-md flex justify-center items-center p-6 cursor-pointer'>
            <p className=' text-2xl'>43</p>
        </div>

    </div>
  )
}

export default CountDown