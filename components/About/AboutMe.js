import React from 'react';

const AboutMe = () => {
  return (
    <section id='about'
      className='md:mx-32 md:my-36 mx-8 my-20 md:py-11 md:px-14 py-8 px-10 shadow-[4px_4px_25px_4px_rgba(26,146,255,0.25)] bg-white flex justify-start items-stretch flex-col grow-0 shrink-0 basis-auto rounded-br-[40px] rounded-t-[40px] rounded-bl-[40px]'
    >
      <p className='[font-family:Signika_Negative] md:text-4xl text-2xl font-bold text-center text-[rgba(4,49,76,1)] grow-0 shrink-0 basis-auto'>About me</p>
      <div className='[font-family:Nunito] md:text-2xl text-base font-normal text-center leading-10 text-[rgba(4,49,76,1)] grow-0 shrink-0 basis-auto mt-[47px]'>
        <p className='leading-8 whitespace-break-spaces'>
          I&apos;m a Full Stack developer that wants to use technology to build useful solutions that will enhance people&apos;s lives by
        </p>
        <p className='mb-10'>maximizing the effect that technology can provide.</p>

        <p className='leading-8 mb-10'>
          Because of this, I&apos;ve been learning technologies like JavaScript, AngularJS, NodeJS, and MongoDB in order to 
          <br className='md:block hidden' /> collaborate in the education sector.
        </p>

        <p className='leading-8 mb-10'>
          In addition, I want to keep developing myself since I want to contribute to fields like volunteering,
          <br className='md:block hidden' /> E-learning, and accessibility.
        </p>
      </div>
    </section>
  )
}

export default AboutMe