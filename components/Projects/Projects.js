import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectsInfo from './projectsInfo';
import starProjectInfo from './starProjectInfo';

const Projects = () => {
  return (
    <section className='pt-32'>
      <h2 className='text-center font-bold text-3xl' >Best Projects</h2>   

      {starProjectInfo.map((info) => (
         <div key={info.title} className='flex pt-14 pl-24 pr-24'>
         <div className='border rounded-lg content-center mr-10 p-4 w-64 grow'>
           <Image src={info.imageSrc} 
                 alt={info.altText}
           />
           <h3 className='text-center font-bold text-xl pb-5'>{info.title}</h3>
           <p>{info.description}</p>

           <Link href={info.url} passHref>
             <a className='flex justify-center border rounded-lg mt-5' target="_blank">See this project</a>
           </Link>
         </div>
      </div>
      ))}

      
     <div className='flex pt-14 pl-24 pr-24'>
      {projectsInfo.map((info) => (
          <div key={info.title} className='border rounded-lg content-center mr-10 p-4'>
            <Image src={info.imageSrc} 
                  alt={info.altText}
            />
            <h3 className='text-center font-bold text-xl pb-5'>{info.title}</h3>
            <p className='text-justify'>{info.description}</p>

            <Link href={info.url} passHref>
              <a className='flex justify-center border rounded-lg mt-5' target="_blank">See this project</a>
            </Link>
          </div>
        ))}
     </div>
    </section>
  )
}

export default Projects