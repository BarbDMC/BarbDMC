import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CheckCircle2 } from 'lucide-react';

const AboutMe = () => {
  const highlights = [
    'Full Stack Developer with focus on meaningful solutions',
    'Passionate about technology in education',
    'Committed to accessibility and inclusivity',
    'Continuous learner and developer'
  ];

  return (
    <section
      id="about"
      className="relative py-20 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-blue-950/20 dark:via-slate-950 dark:to-slate-950" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-12 text-center">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"
          >
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Get to know me better
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I&apos;m a Full Stack developer passionate about using technology to build useful solutions 
                that enhance people&apos;s lives and maximize the positive impact technology can provide.
              </p>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I continuously develop myself by learning modern technologies like JavaScript, React, 
                Node.js, MongoDB, and many others to collaborate effectively in the education sector 
                and build scalable applications.
              </p>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I&apos;m committed to contributing to fields like volunteering, E-learning, and web accessibility, 
                believing that technology should be inclusive and available to everyone.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 dark:text-slate-300">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="space-y-4">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader>
                <CardTitle className="text-2xl">My Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Experience</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">2+ Years</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">In full stack development</p>
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-1">
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Projects</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">10+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Successfully completed</p>
                  </div>

                  <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-1">
                    <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Focus</p>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">Quality</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Education & Accessibility</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6 pt-8">
          <Card className="text-center border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle className="text-lg">Quality Code</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">Writing clean, maintainable, and well-tested code</p>
            </CardContent>
          </Card>

          <Card className="text-center border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <CardTitle className="text-lg">Innovation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">Creating modern solutions with latest technologies</p>
            </CardContent>
          </Card>

          <Card className="text-center border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <CardTitle className="text-lg">Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-600 dark:text-slate-400">Building solutions that make a real difference</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
