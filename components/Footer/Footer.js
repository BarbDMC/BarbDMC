import React from 'react';

const Footer = () => {
  return (
    <div className='w-full py-6 flex justify-center items-center rounded-2xl' style={{backgroundColor: 'rgba(97, 184, 255, 0.8)'}}>
      <span className='text-white text-center font-bold text-sm md:text-base'>© {new Date().getFullYear()} | Designed by Barbara Morantes</span>
    </div>
  )
}

export default Footer