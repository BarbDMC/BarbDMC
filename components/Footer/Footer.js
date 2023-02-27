import React from 'react';
import SocialMediaList from '../socialMediaList/socialMediaList';

const Footer = () => {
  return (
    <div>
      <SocialMediaList />

      <span>© {new Date().getFullYear()} | Designed by Barbara Morantes</span>
    </div>
  )
}

export default Footer