import React from 'react';

const Footer = () => {
  return (
    <div className='bg-[rgba(212,236,255,1)] w-full h-[124px] flex justify-around'>
      <span className='[font-family:Signika_Negative] text-[28px] flex col items-center font-bold text-[rgba(41,55,74,1)] max-w-[480px] grow-0 shrink-0 basis-auto box-border'>© {new Date().getFullYear()} | Designed by Barbara Morantes</span>
    </div>
  )
}

export default Footer