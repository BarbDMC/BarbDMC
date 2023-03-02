
import React from 'react';
import Link from 'next/link';
import socialMediaIcons from './socialMediaIcons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const socialMediaList = () => {
  return (
    <ul className='flex flex-row p-3 mt-3'>
    {
      socialMediaIcons.map(({iconClass, url}) => (
        <li key={iconClass}>
          <Link href={url} passHref>
            <a className='block py-2 pl-3 pr-4' target="_blank">
              <FontAwesomeIcon icon={iconClass} style={{ fontSize: 30, color: 'black' }}/>
            </a>
          </Link>
        </li>
      ))
    }
   </ul>
  )
}

export default socialMediaList;
