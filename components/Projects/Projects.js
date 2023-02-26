import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectsInfo from './projectsInfo';

const Projects = () => {
  return (
    <section>
      <h2>Best Projects</h2>   
      
      <div>

      {projectsInfo.map((info) => (
        <div key={info.title}>
          <Image src={info.imageSrc} 
                 alt={info.altText}
          />
          <h3>{info.title}</h3>
          <p>{info.description}</p>

          <Link href={info.url} passHref>
            <a target="_blank">See this project</a>
          </Link>
        </div>
      ))}
        
      </div>
    </section>
  )
}

export default Projects