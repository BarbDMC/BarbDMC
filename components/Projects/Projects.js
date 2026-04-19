import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectsInfo from './projectsInfo';
import starProjectInfo from './starProjectInfo';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 md:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center">
          <h2 
            id="projects-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my best work showcasing diverse skills and technologies
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-20">
          {starProjectInfo.map((project, index) => (
            <div key={project.title} className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'md:grid-cols-2 md:[&_>*:first-child]:order-2 md:[&_>*:last-child]:order-1' : ''}`}>
              {/* Image */}
              <div className="relative group overflow-hidden rounded-2xl h-96">
                <Image
                  src={project.imageSrc}
                  alt={project.altText}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <div className="space-y-3">
                    {project.paragraphs.map((text) => (
                      <p key={text} className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                {project.url && (
                  <div className="flex gap-3 pt-4">
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <Button className="gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="space-y-8">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Other Projects
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Explore more of my work and side projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsInfo.map((project) => (
              <Card 
                key={project.title}
                className="overflow-hidden flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group border-slate-200 dark:border-slate-800"
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={project.imageSrc}
                    alt={project.altText}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <CardHeader className="space-y-2">
                  <CardTitle className="text-lg text-slate-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>

                  <Link 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
