
import React from 'react';
import socialMediaIcons from './socialMediaIcons';

const socialMediaList = () => {
  return (
    <ul>
    {
      socialMediaIcons.map(({iconClass}) => (
        <li key={iconClass}  className={iconClass}></li>
      ))
    }
   </ul>
  )
}

export default socialMediaList;
