import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import navbarInfo from './navbarInfo';

const SocialMediaList = dynamic(() => import('../socialMediaList/socialMediaList'), {
  ssr: false,
});

const linkClassName =
  'text-sm font-bold text-white drop-shadow-sm transition hover:text-white/90 sm:text-base md:text-lg lg:text-2xl';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkItems = navbarInfo.map(({ url, title }) => (
    <li key={title}>
      <Link href={url} className={linkClassName} onClick={() => setIsOpen(false)}>
        {title}
      </Link>
    </li>
  ));

  return (
    <nav className="relative z-20 w-full" aria-label="Primary">
      {/* Mobile: hamburger + social */}
      <div className="flex items-center justify-between md:hidden">
        <button
          onClick={() => setIsOpen((o) => !o)}
          type="button"
          className="inline-flex shrink-0 items-center rounded-lg p-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          aria-expanded={isOpen}
          aria-controls="navbar-links-mobile"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <SocialMediaList light />
      </div>

      {isOpen ? (
        <ul
          id="navbar-links-mobile"
          className="mt-3 flex flex-col gap-3 rounded-xl border border-white/25 bg-purple-950/45 px-4 py-3 backdrop-blur-md md:hidden"
        >
          {linkItems}
        </ul>
      ) : null}

      {/* Desktop: links + social */}
      <div className="hidden items-start justify-between gap-8 md:flex lg:gap-12 xl:gap-16">
        <ul id="navbar-links-desktop" className="flex flex-row flex-wrap items-center gap-4 lg:gap-8 xl:gap-10">
          {linkItems}
        </ul>
        <div className="shrink-0 pt-0.5">
          <SocialMediaList light />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
