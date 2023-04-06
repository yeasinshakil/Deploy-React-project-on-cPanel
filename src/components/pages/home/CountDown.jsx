import React, { useEffect, useState } from 'react'
import { getRemainingTimeUntilMsTimestamp } from './CountdownTimerUtils';


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}
function CountDown({countdownTimeStampMs}) {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)


    useEffect(()=> {
        const intervalId = setInterval(()=>{
            updateRemainingTime(countdownTimeStampMs);
        }, 1000)
        return ()=> clearInterval(intervalId)
    }, [countdownTimeStampMs]);

    function updateRemainingTime (countdown) {
       setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

  return (
    <div className=' flex gap-2 justify-center items-center text-primary'>
        <div className='w-10 h-10 border-gray-500 border rounded-md flex justify-center items-center p-6'>
            <p className=' text-2xl'>{remainingTime.days}</p>
        </div>
        <span>:</span>
        <div className='w-10 h-10 border-gray-500 border rounded-md flex justify-center items-center p-6'>
            <p className=' text-2xl'>{remainingTime.hours}</p>
        </div>
        <span>:</span>
        <div className='w-10 h-10 border-gray-500 border rounded-md flex justify-center items-center p-6'>
            <p className=' text-2xl'>{remainingTime.minutes}</p>
        </div>
        <span>:</span>
        <div className='w-10 h-10 border-gray-500 border rounded-md flex justify-center items-center p-6 cursor-pointer'>
            <p className=' text-2xl'>{remainingTime.seconds}</p>
        </div>

    </div>
  )
}

export default CountDown