import React from 'react';
import skillsInfo from './skillsInfo';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const Skills = () => {
  return (
    <section id='skills' className='relative py-20 md:py-32'>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-slate-950 dark:via-blue-950/10 dark:to-slate-950" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsInfo.map((skill) => (
            <Card 
              key={skill.title} 
              className="relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-2 group border-slate-200 dark:border-slate-800"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-center h-16 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 group-hover:from-blue-200 group-hover:to-purple-200 dark:group-hover:from-blue-900/40 dark:group-hover:to-purple-900/40 transition-colors">
                  <FontAwesomeIcon 
                    icon={skill.icon} 
                    className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-900 dark:text-white">
                    {skill.title}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  {skill.list.map((item) => (
                    <div 
                      key={item} 
                      className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;