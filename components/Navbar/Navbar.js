import React from 'react';
import Link from 'next/link';
import navbarInfo from './navbarInfo';
import SocialMediaList from '../socialMediaList/socialMediaList';

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

    <SocialMediaList />
   </nav>
  )
}

export default Navbar