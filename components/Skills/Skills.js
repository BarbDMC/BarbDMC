import React from 'react';
import skillsInfo from './skillsInfo';

const Skills = () => {
  return (
    <section>
      <h3>Work skills</h3>

      {
        skillsInfo.map((skill) => (
          <div key={skill.title}>
            <i className={skill.icon}></i>
            <h3>{skill.title}</h3>

            <ul>
            {
              skill.list.map((skill) => (
                <li key={skill}>{skill}</li>
              ))
            }
            </ul>
          </div>
        ))
      }

    </section>
  )
}

export default Skills