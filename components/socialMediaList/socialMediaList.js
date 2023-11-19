
import React from 'react';
import Link from 'next/link';
import socialMediaIcons from './socialMediaIcons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const socialMediaList = () => {
  return (
    <ul className='flex justify-start items-start flex-row grow-0 shrink-0 basis-auto'>
      {
        socialMediaIcons.map(({iconClass, url}) => (
          <li key={iconClass}>
            <Link href={url} passHref>
              <a className='w-8 h-8 text-[rgba(41,55,74,1)] flex grow-0 shrink-0 basis-auto ml-4' target="_blank">
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
