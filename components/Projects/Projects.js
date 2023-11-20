import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectsInfo from './projectsInfo';
import starProjectInfo from './starProjectInfo';

const Projects = () => {
  return (
    <div
      className={`mx-32 my-[140px] shadow-[4px_4px_25px_4px_rgba(0,0,0,0.25)] [background:linear-gradient(180.00deg,rgba(199,227,255,0.85)_22.97%,rgba(249,138,170,0.85)_112.07%)] flex justify-start items-center flex-col min-w-[1367px] box-border pl-[69px] pr-[73px] pt-[49px] pb-20 rounded-br-[40px] rounded-t-[40px] rounded-bl-[40px]`}
    >
           <p className={`[font-family:Signika_Negative] text-[40px] font-bold text-center text-[rgba(41,55,74,1)] self-stretch grow-0 shrink-0 basis-auto`}>Best Projects</p>

        <div className={`flex justify-start items-center flex-col gap-[39px] grow-0 shrink-0 basis-auto pl-[59px] pr-[38px]`}>
        {starProjectInfo.map((info) => (
           <div key={info}>
              <Image src={info.imageSrc}
            alt={info.altText}
            width={1250} height={250}
            className="`object-cover [border-top-style:none] [border-right-style:none] [border-bottom-style:none] [border-left-style:none] w-[1128px] h-[130px] max-w-[initial] box-border block self-stretch grow-0 shrink-0 basis-auto rounded-br-[31.5px] rounded-t-[31.5px] rounded-bl-[31.5px]"
              />

          <p className={`[font-family:Signika_Negative] text-[32px] font-bold text-center text-[rgba(41,55,74,1)] mt-[-3px] self-stretch grow-0 shrink-0 basis-auto`}>
            {info.title}
          </p>
           </div>
        ))}
        </div>

      <div className={`flex justify-start items-stretch flex-row self-stretch grow-0 shrink-0 basis-auto mt-20`}>
      </div>
    </div>
  )
}

export default Projects