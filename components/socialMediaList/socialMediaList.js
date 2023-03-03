
import React from 'react';
import Link from 'next/link';
import socialMediaIcons from './socialMediaIcons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const socialMediaList = () => {
  return (
    <ul className='flex items-center'>
      {
        socialMediaIcons.map(({iconClass, url}) => (
          <li key={iconClass}>
            <Link href={url} passHref>
              <a className='sm:py-2 sm:pl-3 sm:pr-4 pl-1 pr-1' target="_blank">
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
