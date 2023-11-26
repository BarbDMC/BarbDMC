import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col items-center text-center pt-20 pt-16">
      <div className='md:w-80 md:h-80 w-60 h-60 bg-zinc-900 rounded-full flex justify-center items-center mb-4'>
        <Image className='rounded-full' src="/assets/images/avatar.jpeg" alt="Barbara's profile image" style={{width: "100%", height: "auto"}}  width={300} height={300} />
      </div>
    
      <div className="w-full px-4 mt-5">
        <p className="font-signika-negative md:text-xl text-lg  font-ligth text-[rgba(41,55,74,1)] mx-auto">
          I&apos;m a Full Stack developer that builds web app solutions  
          <br className='md:block hidden' /> that promote inclusiveness and education.
        </p>
      </div>
  </div>
   
  )
}

export default Hero