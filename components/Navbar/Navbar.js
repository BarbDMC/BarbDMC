import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import navbarInfo from './navbarInfo';

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
      <li><Image src="" alt="LinkedIn Icon" /></li>
      <li><Image src="" alt="Github Icon" /></li>
      <li><Image src="" alt="Instagram Icon" /></li>
      <li><Image src="" alt="Twitter Icon" /></li>
    </ul>
   </nav>
  )
}

export default Navbar