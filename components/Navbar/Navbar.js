import React from 'react';
import Link from 'next/link';
import navbarInfo from './navbarInfo';
import SocialMediaList from '../socialMediaList/socialMediaList';

const Navbar = () => {
  return (
   <nav>
    <div className='hidden w-full md:block md:w-auto' id="navbar-default">
      <ul className='flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:border-0 '>
        {
          navbarInfo.map(({url, title}) => (
            <li key={title}>
              <Link href={url} passHref>
                <a className='block py-2 pl-3 pr-4'>{title}</a >
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
    

    <SocialMediaList />
   </nav>
  )
}

export default Navbar