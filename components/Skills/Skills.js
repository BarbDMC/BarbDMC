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
            <div key={skill.title} className='border border-blue-200 rounded-3xl py-6 px-4 md:py-8 md:px-6 w-40 md:w-[275px] h-[280px] md:h-[480px] text-center md:mb-0 mb-6 bg-white shadow-lg flex flex-col' style={{boxShadow: '0 4px 20px rgba(26, 146, 255, 0.5)'}}>
              <div className='mb-4 md:mb-8 flex justify-center items-center h-16 md:h-40'>
                <FontAwesomeIcon icon={skill.icon} style={{ fontSize: 40, color: '#04314C', width: '70px', height: '56px', maxWidth: '100%' }} className='md:w-40 md:h-32'/>
              </div>
              <h3 className="mb-4 md:mb-8 md:text-2xl text-sm font-bold text-center tracking-tight" style={{color: '#04314C'}}>{skill.title}</h3>

              <ul className="flex-1 flex flex-col justify-start">
              {
                skill.list.map((skill) => (
                  <li className='text-center md:text-lg text-xs md:mb-3 mb-2' key={skill} style={{color: '#04314C'}}>{skill}</li>
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