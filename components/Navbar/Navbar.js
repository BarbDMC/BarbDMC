import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import navbarInfo from './navbarInfo';
import SocialMediaList from '../socialMediaList/socialMediaList';

const Navbar = () => {

  const [isOPen, setIsOpen] = useState(false);

  function handleOpenNavbar() {
    setIsOpen(!isOPen);
  }

  return (
    <nav className="bg-[rgba(212,236,255,1)] flex justify-between items-start flex-row gap-2 min-w-[1504px] h-[101px] box-border pl-[93px] pr-[73px] pt-8">
      <div className="flex justify-start items-start flex-row gap-[38px] grow-0 shrink-0 basis-auto">

        <button onClick={handleOpenNavbar} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>

        <div className={"grow-0 shrink-0 basis-auto pb-[5px] md:block md:w-auto" + (isOPen ? ' block' : ' hidden')} id="navbar-default">
          <ul className="flex flex-col border md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {
                navbarInfo.map(({url, title}) => (
                  <li key={title}>
                    <Link href={url} passHref>
                      <a className='[font-family:Signika_Negative] text-2xl font-bold tracking-[-0.46px] text-[rgba(41,55,74,1)]  md:border-0 md:p-0'>{title}</a >
                    </Link>
                  </li>
                ))
              }
          </ul>
        </div>

      </div>
        <SocialMediaList />
    </nav>
  )
}

export default Navbar