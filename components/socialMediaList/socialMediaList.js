import React from 'react';
import Link from 'next/link';
import socialMediaIcons from './socialMediaIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const socialMediaList = ({ light = false }) => {
  const linkClass = light
    ? 'flex h-9 w-9 shrink-0 items-center justify-center text-white transition first:ml-0 hover:opacity-90 sm:h-10 sm:w-10 md:ml-3'
    : 'ml-2 flex h-9 w-9 shrink-0 items-center justify-center text-[rgba(41,55,74,1)] first:ml-0 md:ml-4';

  const iconStyle = {
    fontSize: 26,
    color: light ? '#ffffff' : 'black',
  };

  return (
    <ul className="flex flex-row flex-wrap items-center justify-end gap-x-1 gap-y-2 sm:gap-x-2">
      {socialMediaIcons.map(({ iconClass, url }) => (
        <li key={url}>
          <Link
            href={url}
            className={linkClass}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="" icon={iconClass} style={iconStyle} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default socialMediaList;
