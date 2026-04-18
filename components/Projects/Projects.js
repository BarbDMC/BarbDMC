import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Nunito } from 'next/font/google';
import projectsInfo from './projectsInfo';
import starProjectInfo from './starProjectInfo';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

/** Figma: linear, left → right — #410538 60% @ 0%, #F98AAA 72% @ 100% */
const sectionGradient =
  'linear-gradient(to bottom, rgba(65,5,56,0.6) 0%, rgba(249,138,170,0.72) 100%)';

const projectButtonClass =
  'inline-block rounded-lg bg-white px-7 py-2.5 text-sm font-semibold text-[#410538] shadow-sm transition hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-white/60 md:px-8 md:py-3 md:text-base';

const Projects = () => {
  return (
    <section
      id="projects"
      className={`${nunito.className} bg-white px-3 py-14 sm:px-5 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-12`}
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto w-full max-w-[min(100%,1400px)]">
        <div
          className="rounded-[1.75rem] px-6 py-10 text-center text-white shadow-[0_16px_48px_rgba(0,0,0,0.14)] sm:rounded-[2rem] sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-16 lg:py-16 xl:px-20 xl:py-[4.25rem]"
          style={{ background: sectionGradient }}
        >
          <h2
            id="projects-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.5rem]"
          >
            Best Projects
          </h2>

          {starProjectInfo.map((project) => (
            <article key={project.title} className="mt-10 md:mt-12">
              <div className="relative mx-auto aspect-[21/9] w-full max-h-[220px] overflow-hidden rounded-2xl sm:max-h-[260px] md:max-h-[280px]">
                <Image
                  src={project.imageSrc}
                  alt={project.altText}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1400px"
                />
              </div>

              <h3 className="mt-6 text-xl font-bold sm:text-2xl md:text-3xl">{project.title}</h3>

              <div className="mx-auto mt-4 max-w-4xl space-y-4 text-left text-sm leading-relaxed sm:text-base md:mt-5 md:text-lg md:leading-relaxed">
                {project.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>

              <div className="mt-6 md:mt-8">
                {project.url ? (
                  <Link
                    href={project.url}
                    className={projectButtonClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See this project
                  </Link>
                ) : (
                  <span className={`${projectButtonClass} cursor-default opacity-90`}>
                    See this project
                  </span>
                )}
              </div>
            </article>
          ))}

          <div className="mt-14 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 md:gap-8 lg:gap-10">
            {projectsInfo.map((project) => (
              <article key={project.title} className="flex flex-col items-center text-center">
                <h3 className="order-1 text-lg font-bold sm:text-xl md:text-2xl">{project.title}</h3>

                <div className="relative order-2 mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl md:mt-5">
                  <Image
                    src={project.imageSrc}
                    alt={project.altText}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 650px"
                  />
                </div>

                <p className="order-3 mt-4 w-full max-w-prose flex-1 text-left text-sm leading-relaxed sm:text-base md:mt-5">
                  {project.description}
                </p>

                <div className="order-4 mt-5 md:mt-6">
                  <Link
                    href={project.url}
                    className={projectButtonClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See this project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
