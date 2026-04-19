import React from 'react';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import { Button } from '../ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-64px)] w-full overflow-hidden"
      aria-label="Introduction"
    >
      <Navbar />
      
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900" />
      
      {/* Decorative blur elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
                 Full Stack Developer {/*&{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Educator
                </span> */}
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                I build inclusive and educational web solutions that make a difference. 
                Passionate about technology, learning, and creating meaningful digital experiences.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="#projects">
                <Button size="lg" className="w-full sm:w-auto">
                  View My Work
                </Button>
              </Link>
              <Link href="#about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-200 dark:border-slate-800">
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">2+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Years Experience</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">10+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">100%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Dedication</p>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative hidden md:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/avatar.jpeg"
                alt="Barbara's profile image"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute inset-0 rounded-2xl border-2 border-slate-200 dark:border-slate-700 -m-4" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-sm text-slate-600 dark:text-slate-400">Scroll to explore</p>
            <svg
              className="w-6 h-6 text-slate-600 dark:text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
