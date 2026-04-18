import React from 'react';
import Image from 'next/image';
import { Signika_Negative } from 'next/font/google';
import Navbar from '../Navbar/Navbar';

const signikaNegative = Signika_Negative({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});

/** Figma linear gradient (vertical): #1A92FF 60% @ 18%, #85CBFF 60% @ 61%, #410538 50% @ 100% */
const heroGradient =
  'linear-gradient(to bottom, rgba(26,146,255,0.6) 18%, rgba(133,203,255,0.6) 61%, rgba(65,5,56,0.5) 100%)';

const Hero = () => {
  return (
    <section
      className={`${signikaNegative.className} box-border flex min-h-[100svh] w-full flex-col p-0`}
      aria-label="Introduction"
    >
      <div
        className="flex min-h-[100svh] w-full flex-1 flex-col overflow-hidden"
        style={{ background: heroGradient }}
      >
        <div className="shrink-0 px-4 pt-5 sm:px-6 sm:pt-7 md:px-10 lg:px-14">
          <Navbar />
        </div>

        <div className="flex flex-1 flex-col items-center justify-center px-4 pb-12 pt-4 text-center sm:px-8 md:px-12 md:pb-16">
          <div className="relative aspect-square w-[min(85vw,280px)] max-w-full shrink-0 overflow-hidden rounded-full ring-4 ring-white/50 shadow-lg sm:w-64 md:w-80">
            <Image
              src="/assets/images/avatar.jpeg"
              alt="Barbara's profile image"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 85vw, 320px"
              priority
            />
          </div>

          <p className="mt-8 max-w-xl px-2 text-base font-normal leading-relaxed text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] sm:mt-10 sm:text-lg md:text-xl">
            I&apos;m a Full Stack developer that builds web app solutions{' '}
            <br className="hidden md:block" />
            that promote inclusiveness and education.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
