import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import navbarInfo from './navbarInfo';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';

const SocialMediaList = dynamic(() => import('../socialMediaList/socialMediaList'), {
  ssr: false,
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClassName =
    'text-base font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200';

  const navLinks = navbarInfo.map(({ url, title }) => (
    <Link
      key={title}
      href={url}
      className={linkClassName}
      onClick={() => setIsOpen(false)}
    >
      {title}
    </Link>
  ));

  const mobileNavLinks = navbarInfo.map(({ url, title }) => (
    <Link
      key={title}
      href={url}
      className="block px-4 py-2 text-base font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition-colors"
      onClick={() => setIsOpen(false)}
    >
      {title}
    </Link>
  ));

  return (
    <nav className="sticky top-0 z-40 w-full bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 backdrop-blur-sm support-backdrop-filter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 font-bold text-2xl text-slate-900 dark:text-white">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks}
          </div>

          {/* Desktop Social + Mobile Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <SocialMediaList light={false} />
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10"
                  >
                    {isOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <SheetHeader>
                    <SheetTitle className="text-left text-2xl font-bold">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-2 mt-8">
                    {mobileNavLinks}
                  </div>
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white mb-4">Follow me</p>
                    <SocialMediaList light={false} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

