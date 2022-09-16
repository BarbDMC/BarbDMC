import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="w-full">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Personal Web Resume" />
        <meta name="author" content="Barbara Morantes" />
        <title>Barbara Morantes - Resume</title>
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      </Head>

      <main className=''>
        <div className='mt-4 mx-32 flex justify-between items-center'>
          <div>
            <ul>
              <a href="#workExperience"><li className="font-bold font-roboto text-gray-500 text-lg opacity-75 float-left m-8">Work Expirence</li></a>
              <a href="#skillsTools"><li className="font-bold font-roboto text-gray-500 text-lg opacity-75 float-left m-8">Skills and tools</li></a>
              <a href="#projects"><li className="font-bold font-roboto text-gray-500 text-lg opacity-75 float-left m-8">Projects</li></a>
              <a href="#contact"><li className="font-bold font-roboto text-gray-500 text-lg opacity-75 float-left m-8">Contact</li></a>
            </ul>
          </div>
          <div className='grid grid-cols-3 gap-3 z-50'>
            <a className="text-2xl" target="_blank" href="https://www.linkedin.com/in/barbara-morantes-carvajal/" rel='noreferrer'>
              <i className="fab fa-linkedin-in text-white"></i>
            </a>
            <a className="text-2xl" target="_blank" href="https://github.com/BarbDMC" rel='noreferrer'>
              <i className="fab fa-github text-white"></i>
            </a>
            <a className="text-2xl" target="_blank" href="https://twitter.com/BarbDMG" rel='noreferrer'>
              <i className="fab fa-twitter text-white"></i>
            </a>
          </div>
        </div>


        <div>
          <img className=" absolute -top-56 left-[50%] w-1/4" src="/assets/img/leftRectangle.png" alt='leftRectangle' />
          <img className="absolute -top-52 -right-12  w-1/2 z-30" src="/assets/img/centerRectangle.png" alt='centerRectangle' layout='fill' />
          <img className="absolute top-24 right-72 w-72 z-40" src="/assets/img/bigCircle.png" alt='bigCircle' layout='fill' />
          <img className="absolute top-26 right-[302px] w-64 z-40" src="/assets/img/smallCircle.png" alt='smallCircle' layout='fill' />
          <img className="absolute rounded-full w-60 top-[115px] right-[310px] z-40" src="/assets/img/avatar.jpg" alt='avatar' layout='fill' />
          <img className="absolute -right-40 top-32 w-1/3" src="/assets/img/rightRectangle.png" alt='rightRectangle' layout='fill' />
        </div>

        <div className="mt-32 mx-40">
          <p className="font-bold text-2xl text-gray-500 mb-5">Hey, there!</p>
          <h1 className="font-bold text-4xl text-gray-500 mb-5">I am <span className="text-[#8089DF]">Barbara Morantes</span></h1>
          <p className="font-thin text-xl text-gray-500">In each area in which I have had the opportunity to</p>
          <p className="font-thin text-xl text-gray-500">perform, I always give my best so my work and</p>
          <p className="font-thin text-xl text-gray-500">my  relationships with the team are excellent. My main</p>
          <p className="font-thin text-xl text-gray-500">objective is to stay in constant development at a</p>
          <p className="font-thin text-xl text-gray-500">personal, academic and professional level.</p>
        </div>

        <div id="workExperience" className="mt-60">
          <div className="flex flex-col items-center">
            <h2 className="font-nunito font-bold text-4xl text-gray-500 opacity-80">Work <span className="text-[#8089DF]">Expirence</span></h2>
            <img src="/assets/img/titleLines.png" />
          </div>

          <div className='flex flex-row items-center mt-5 justify-between'>
            <div className="relative">
              <img className='-top-20 max-w-xl' src="/assets/img/bigWave.png" />
              <img className="absolute top-0 max-w-lg" src="/assets/img/smallWave.png" />
              <section className="absolute flex w-full top-0 bottom-0 left-2 items-center">
                <img className="max-w-sm" src="/assets/img/idukay.svg" />
              </section>
            </div>

            <div className="mr-10 max-w-2xl">
              <h3 className="font-roboto text-4xl text-[#8089DF] font-bold">Full Stack Developer</h3>
              <p className="text-xl font-roboto text-gray-500 mt-3"><b>Urban Lab</b> 10 month(s)</p>
              <p className="text-xl font-roboto text-gray-500 my-8">Quito - Ecuador</p>
              <p className="text-xl font-roboto text-gray-500 my-8 max-w-xl">
                Functional responsibilities: Maintenance and bug fixing of
                the idukay platform in frontend and backend.
              </p>
            </div>
          </div>
        </div>

        <div id="skillsTools" className="mt-20 pt-5 pb-5 bg-[#F8F5F5]">
          <div className="flex flex-col items-center">
            <h2 className="font-nunito font-bold text-4xl text-gray-500 opacity-80">Skills <span className="text-[#8089DF]">and tools</span></h2>
            <img src="/assets/img/titleLines.png" />
          </div>

          <div className="mt-20 mb-20">
            <div className="flex justify-between">

              <div className="w-1/5 ml-52 bg-white rounded-3xl">
                <div className="pt-6 flex flex-col items-center">
                  <img className="w-2/6" src="/assets/img/skills/frontend.svg" />
                  <p className="font-nunito font-bold text-2xl text-[#65BCE9] mt-5">Fronted</p>
                  <ul className="text-center mt-5">
                    <li className="font-bold font-nunito text-lg text-gray-500 opacity-80 leading-10">
                      HTML
                    </li>
                    <li className="font-bold font-nunito text-lg text-gray-500 opacity-80 leading-10">
                      CSS
                    </li>
                    <li className="font-bold font-nunito text-lg text-gray-500 opacity-80 leading-10">
                      AngularJs
                    </li>
                    <li className="font-bold font-nunito text-lg text-gray-500 opacity-80 leading-10">
                      Javascript
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-1/5 bg-white rounded-3xl">
                <div className="pt-6 flex flex-col items-center">
                  <img className="w-2/6" src="/assets/img/skills/backend.png" />
                  <div className="font-nunito font-bold text-2xl text-[#65BCE9] mt-5">Backend</div>
                  <ul className="text-center mt-5">
                    <li className="font-bold font-nunito text-lg text-gray-500 opacity-80 leading-10">
                      NodeJs
                    </li>
                    <li className="font-bold font-nunito text-lg text-gray-500 opacity-80 leading-10">
                      MongoDB
                    </li>
                    <li className="font-bold font-nunito text-lg text-gray-500 opacity-80 leading-10">
                      Python
                    </li>
                  </ul>
                </div>
              </div>

              <div className="w-1/5 mr-52 bg-white rounded-3xl">
                <div className="pt-6 flex flex-col items-center">
                  <img className="w-2/6" src="/assets/img/skills/testing.png" />
                  <div className="font-nunito font-bold text-2xl text-[#65BCE9] mt-5">Testing</div>
                  <ul className="text-center mt-5">
                    <li className="font-bold font-nunito text-lg text-gray-500 opacity-80 leading-10">
                      Jasmine
                    </li>
                    <li className="font-bold font-nunito text-lg text-gray-500 opacity-80 leading-10">
                      Cypress
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="projects" className="mt-36">
          <div className="flex flex-col items-center">
            <h2 className="font-nunito font-bold text-4xl text-gray-500 opacity-80">Projects</h2>
            <img src="/assets/img/titleLines.png" />
          </div>

          <div className="flex flex-col items-center mt-20">
            <div className='relative z-50'>
              <img className="rounded-2xl opacity-95 w-[450px]" src="/assets/img/portfolio/mysql-logo.svg" />
            </div>

            <div className='relative z-40 -top-72'>
              <img className="w-[600px] opacity-95" src="/assets/img/projectsWave.png" />
            </div>


            <div className="relative z-50 bg-white -top-[700px] w-[400px] py-5 px-5 h-[350px] rounded-2xl">
              <h3 className="text-2xl text-center font-roboto font-bold text-gray-500 mt-3 leading-10">Academic offer in Ecuador</h3>
              <h4 className="text-xl text-center font-roboto font-bold text-gray-500 mt-3">In progress</h4>
              <p className="text-lg text-center font-roboto text-gray-500 mt-3 max-w-xl">Search engine with the university  offer in Ecuador for students that  need to
                investigate about the  careers oportunities in their cities
              </p>
              <p className="text-lg text-[#51E1A7] font-roboto font-bold leading-10 text-center pt-5">Technologies used: <br />
                HTML, CSS, MySQL, Javascript</p>
            </div>
          </div>
        </div>
      </main>

      <footer id="contact" className="bg-[#F8F5F5] py-20 flex flex-col">
       <div className='m-auto'>
        <h3 className="font-bold font-nunito text-[#707070] text-4xl opacity-80">Contact</h3>
          <div className='inline-grid grid-cols-3 gap-4'>
            <a className="text-4xl text-black opacity-75" target="_blank" href="https://www.linkedin.com/in/barbara-morantes-carvajal/" rel='noreferrer'>
              <i className="fab fab fa-linkedin-in"></i>
            </a>
            <a className="text-4xl text-black opacity-75" target="_blank" href="https://github.com/BarbDMC" rel='noreferrer'>
              <i className="fab fa-github"></i>
            </a>
            <a className="text-4xl text-black opacity-75" target="_blank" href="https://twitter.com/BarbDMG" rel='noreferrer'>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
       </div>
      </footer>
     
      <Script
        id='freshdesk-widget'
        dangerouslySetInnerHTML={{
          __html: `
          window.fwSettings={
            'widget_id': 151000000646
            };!function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}()
          `
        }}
      /> 

      <Script type='text/javascript' src='https://widget.freshworks.com/widgets/151000000646.js' async defer />
      <Script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossOrigin='anonymous' async />
    </div>
  )
}
