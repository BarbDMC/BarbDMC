import React from 'react';
import skillsInfo from './skillsInfo';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Skills = () => {
  return (
    <section id='skills' className='py-32'>
      <h3 className="mb-2 text-2xl font-bold text-center tracking-tight sm:text-3xl md:text-4xl" style={{color: '#04314C'}}>Work skills</h3>

      <div className='flex md:flex-nowrap flex-wrap justify-evenly pt-14 md:px-24 gap-6'>
        {
          skillsInfo.map((skill) => (
            <div key={skill.title} className='border border-blue-200 rounded-3xl py-8 px-6 w-40 md:w-[275px] h-[280px] md:h-[480px] text-center md:mb-0 mb-6 bg-white shadow-lg flex flex-col' style={{boxShadow: '0 4px 20px rgba(26, 146, 255, 0.5)'}}>
              <FontAwesomeIcon className='mb-6 md:mb-8' icon={skill.icon} style={{ fontSize: 45, color: '#04314C' }}/>
              <h3 className="mb-6 md:mb-8 md:text-2xl text-md font-bold text-center tracking-tight" style={{color: '#04314C'}}>{skill.title}</h3>

              <ul className="flex-1 flex flex-col justify-start">
              {
                skill.list.map((skill) => (
                  <li className='text-center md:text-lg text-base md:mb-3' key={skill} style={{color: '#04314C'}}>{skill}</li>
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