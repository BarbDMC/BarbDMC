import React from 'react';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

const AboutMe = () => {
  return (
    <section
      id="about"
      className={`${nunito.className} bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:py-28`}
      aria-labelledby="about-heading"
    >
      <div className="mx-auto flex w-full max-w-3xl justify-center">
        <div className="w-full rounded-[2rem] bg-white px-8 py-11 shadow-[0_8px_40px_rgba(26,146,255,0.28),0_4px_16px_rgba(26,146,255,0.12)] sm:rounded-[2.25rem] sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-16 lg:py-16">
          <h2
            id="about-heading"
            className="text-center text-2xl font-bold tracking-tight text-[#0c2744] sm:text-3xl md:text-4xl"
          >
            About me
          </h2>

          <div className="mt-8 space-y-6 text-center text-[0.95rem] font-normal leading-relaxed text-[#0c2744] sm:text-base md:mt-10 md:space-y-7 md:text-lg md:leading-8">
            <p>
              I&apos;m a Full Stack developer that wants to use technology to build useful solutions
              that will enhance people&apos;s lives by maximizing the effect that technology can
              provide.
            </p>

            <p>
              Because of this, I&apos;ve been learning technologies like JavaScript, AngularJS,
              NodeJS, and MongoDB in order to collaborate in the education sector.
            </p>

            <p>
              In addition, I want to keep developing myself since I want to contribute to fields like
              volunteering, E-learning, and accessibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
