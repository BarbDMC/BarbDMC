import React from 'react';
import socialMediaIcons from '../socialMediaIcons';

const Footer = () => {
  return (
    <div>
      <ul>
        {
          socialMediaIcons.map(({iconClass}) => (
            <li key={iconClass}  className={iconClass}></li>
          ))
        
        }
      </ul>

      <span>© {new Date().getFullYear()} | Designed by Barbara Morantes</span>
    </div>
  )
}

export default Footer