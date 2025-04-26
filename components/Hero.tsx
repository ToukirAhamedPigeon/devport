import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from '@/lib/utils'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 top-0 left-0">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)] opacity-70",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </div>
    <div className="flex justify-center relative my-20 z-10">
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-blue-100 max-w-80">Dynamic Web magic with Next.js</h2>
        <TextGenerateEffect words="Transforming concepts into Seamless User Experiences" className="text-[40px] text-center md:text-5xl lg:text-6xl" />
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
          Hi, I&apos;m Pigeon, a Next.js Developer
        </p>
        <a href="#about">
          <MagicButton title="Show My Work" icon={<FaLocationArrow/>} position='right'/>
        </a>
      </div>
    </div>
    </div>
  )
}

export default Hero
