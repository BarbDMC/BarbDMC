import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectsInfo from './projectsInfo';
import starProjectInfo from './starProjectInfo';

const Projects = () => {
  return (
    <section id='projects' className='pt-32'>
      <h2 className='text-center font-bold text-3xl' >Best Projects</h2>   

     <div className='pt-14 px-24'>
        {starProjectInfo.map((info) => (
          <div key={info} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image src={info.imageSrc} 
                          alt={info.altText}
                          width={1250} height={250}
                          className="rounded-t-lg"
                />
              <div className="p-5">
                  <h3 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">{info.title}</h3>
                  <p className="mb-3 font-normal text-justify dark:text-gray-400">{info.description}</p>

                  <div className="w-full font-medium rounded-lg text-sm px-5 pt-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <a href={info.url} className='px-3 py-2 text-md font-bold border rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' target="_blank" rel="noreferrer">See this project</a>
                  </div>
              </div>
           </div>
        ))}
     </div>

      
     <div className='flex pt-14 px-24'>
      {projectsInfo.map((info, index) => (
           <div key={info} className={"w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" + (index === 0 ? ' mr-8' : '')}>
              <Image src={info.imageSrc} 
                          alt={info.altText}
                          width={625} height={250}
                          className="rounded-t-lg"
                />
              <div className="p-5">
                  <h3 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">{info.title}</h3>
                  <p className="mb-3 font-normal text-justify dark:text-gray-400">{info.description}</p>

                  <div className="w-full font-medium rounded-lg text-sm px-5 pt-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      <a href={info.url} className='px-3 py-2 text-md font-bold border rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800' target="_blank" rel="noreferrer">See this project</a>
                  </div>
              </div>
        </div>
        ))}
     </div>
    </section>
  )
}

export default Projects