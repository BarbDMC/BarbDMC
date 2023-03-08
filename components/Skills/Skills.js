import React from 'react';
import skillsInfo from './skillsInfo';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Skills = () => {
  return (
    <section id='skills' className='py-32'>
      <h3 className="mb-2 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">Work skills</h3>

      <div className='flex justify-evenly pt-14 px-24'>
        {
          skillsInfo.map((skill) => (
            <div key={skill.title} className='border rounded-lg py-5 px-5 w-52 text-center'>
              <FontAwesomeIcon className='mb-2' icon={skill.icon} style={{ fontSize: 30, color: 'black' }}/>
              <h3 className="mb-4 text-2xl font-bold text-center tracking-tight text-gray-900 dark:text-white">{skill.title}</h3>

              <ul className="list-disc ml-5">
              {
                skill.list.map((skill) => (
                  <li className='text-left text-md' key={skill}>{skill}</li>
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