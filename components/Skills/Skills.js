import React from 'react';
import skillsInfo from './skillsInfo';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Skills = () => {
  return (
    <section id='skills' className='py-32'>
      <h3 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">Work skills</h3>

      <div className='flex md:flex-nowrap flex-wrap justify-evenly pt-14 md:px-24'>
        {
          skillsInfo.map((skill) => (
            <div key={skill.title} className='border rounded-lg py-5 px-5 md:w-52 w-40 text-center md:mb-0 mb-6'>
              <FontAwesomeIcon className='mb-2' icon={skill.icon} style={{ fontSize: 30, color: 'black' }}/>
              <h3 className="mb-4 md:text-2xl text-md font-bold text-center tracking-tight text-gray-900 dark:text-white">{skill.title}</h3>

              <ul className="list-disc ml-5">
              {
                skill.list.map((skill) => (
                  <li className='text-left md:text-md text-sm' key={skill}>{skill}</li>
                ))
              }
              </ul>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills