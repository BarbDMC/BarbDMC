import React from 'react';
import Link from 'next/link';
import navbarInfo from './navbarInfo';
import socialMediaIcons from '../socialMediaIcons';

const Navbar = () => {
  return (
   <nav>
    <ul>
      {
        navbarInfo.map(({url, title}) => (
          <li key={title}>
            <Link href={url} passHref>
              <a>{title}</a >
            </Link>
          </li>
        ))
      }
    </ul>

    <ul>
      {
        socialMediaIcons.map(({iconClass}) => (
          <li key={iconClass}  className={iconClass}></li>
        ))
      }
    </ul>
    
   </nav>
  )
}

export default Navbar