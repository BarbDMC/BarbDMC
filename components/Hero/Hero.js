import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center pt-20 sm:pt-16">
    <div className='w-80 h-80 bg-zinc-900 rounded-full flex justify-center items-center overflow-hidden mb-4'>
      <Image className='rounded-full' src="/assets/images/avatar.jpeg" alt="Barbara's profile image" width={300} height={300} />
    </div>
  
    <div className="w-full px-4 mt-5">
      <p className="font-signika-negative text-xl font-ligth text-[rgba(41,55,74,1)] max-w-[567px] mx-auto">
        I&apos;m a Full Stack developer that builds web app solutions
        <br />
        that promote inclusiveness and education.
      </p>
    </div>
  </div>
   
  )
}

export default Hero