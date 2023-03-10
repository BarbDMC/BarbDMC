import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectsInfo from './projectsInfo';
import starProjectInfo from './starProjectInfo';

const Projects = () => {
  return (
    <section id='projects' className='pt-32'>
      <h2 className='text-center font-bold text-3xl' >Best Projects</h2>   

     <div className='pt-14 md:px-24 px-6'>
        {starProjectInfo.map((info) => (
          <div key={info} className="md:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image src={info.imageSrc} 
                          alt={info.altText}
                          width={1250} height={250}
                          className="rounded-t-lg"
                />
              <div className="p-5">
                  <h3 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">{info.title}</h3>
                  <p className="mb-3 font-normal text-justify dark:text-gray-400">{info.description}</p>

                  <div className="w-full font-medium rounded-lg text-sm px-5 pt-3 text-center">
                      <a href={info.url} alt={info.altText} className='px-3 py-2 text-md font-bold border rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' target="_blank" rel="noreferrer">See this project</a>
                  </div>
              </div>
           </div>
        ))}
     </div>

      
     <div className='flex pt-14 md:px-24 px-6'>
      {projectsInfo.map((info, index) => (
           <div key={info} className={"md:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" + (index === 0 ? ' md:mr-8 mr-2' : '')}>
              <Image src={info.imageSrc} 
                          alt={info.altText}
                          width={625} height={250}
                          className="rounded-t-lg"
                />
              <div className="md:p-5 pb-5 px-2">
                  <h3 className="mb-2 md:text-2xl text-sm font-bold text-center tracking-tight text-gray-900 dark:text-white">{info.title}</h3>
                  <p className="mb-3 font-normal text-justify text-sm dark:text-gray-400">{info.description}</p>

                  <div className="md:w-full font-medium rounded-lg text-sm md:px-5 px-0 pt-3 text-center">
                      <a href={info.url} alt={info.altText} className='px-3 py-2 md:text-md text-xs font-bold border rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' target="_blank" rel="noreferrer">See this project</a>
                  </div>
              </div>
        </div>
        ))}
     </div>
    </section>
  )
}

export default Projects