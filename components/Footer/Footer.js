import React from 'react';
import SocialMediaList from '../socialMediaList/socialMediaList';

const Footer = () => {
  return (
    <div className='w-full flex justify-around'>
      <SocialMediaList />

      <span className='inline-flex items-center text-xs md:text-xl'>© {new Date().getFullYear()} | Designed by Barbara Morantes</span>
    </div>
  )
}

export default Footer