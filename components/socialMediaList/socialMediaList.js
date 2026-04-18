
import React from 'react';
import Link from 'next/link';
import socialMediaIcons from './socialMediaIcons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const socialMediaList = () => {
  return (
    <ul className='flex justify-start items-start flex-row grow-0 shrink-0 basis-auto'>
      {
        socialMediaIcons.map(({iconClass, url}) => (
          <li key={url}>
            <Link
              href={url}
              className='w-8 h-8 text-[rgba(41,55,74,1)] flex grow-0 shrink-0 basis-auto ml-4'
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="" icon={iconClass} style={{ fontSize: 30, color: 'black' }} />
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default socialMediaList;
