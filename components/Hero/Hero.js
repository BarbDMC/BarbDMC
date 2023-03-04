import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="text-center sm:pt-16 pt-20">
      <Image className='rounded-full' src="/assets/images/avatar.jpeg" alt="Barbara's profile image" width={300} height={300}  />
      
      <p className="mt-6 md:text-lg md:text-center leading-8 text-sm pl-6 pr-6 text-justify">
        I&apos;m a Full Stack developer that builds web app solutions that promote
        inclusiveness and education because I want to enhance people&apos;s lives.
      </p>
    </div>
   
  )
}

export default Hero