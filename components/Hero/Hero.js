import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="text-center pt-16">
      <Image className='rounded-full' src="/assets/images/avatar.jpeg" alt="Barbara's profile image" width={250} height={250} />
      
      <p className="mt-6 md:text-lg leading-8 text-sm">
        I&apos;m a Full Stack developer that builds web app solutions that promote
      </p>

      <p className="md:text-lg text-sm leading-8">
        inclusiveness and education because I want to enhance people&apos;s lives.
      </p>

    </div>
   
  )
}

export default Hero