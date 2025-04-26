"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "./GridGlobe";
import { useState } from "react";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import dynamic from "next/dynamic";
import animationData from "@/data/confetti.json";
const LottiePlayer = dynamic(() => import('./LottiePlayer'), { ssr: false });

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;    
}) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText('toukir.ahamed.pigeon@gmail.com');
        setCopied(true);
    }
  return (
    <div
      className={cn(
        "group/bento overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 relative rounded-3xl transition duration-200 hover:shadow-xl dark:shadow-none border border-white/[0.1]",
        className,
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor:'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)',
      }}
    >
      <div className={`${id===6 && 'flex justify-center h-full'}`}>
        <div className="w-full h-full absolute">
            {img && <Image src={img} alt={title as string} width={100} height={100} className={cn('object-cover object-center', imgClassName)} />}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
            {spareImg && <Image src={spareImg} alt={title as string} width={100} height={100} className='object-cover object-center w-full h-full' />}
        </div>
        {id===6 && (
            <BackgroundGradientAnimation>
                <div className="absolute z-50 flex justify-center items-center text-white font-bold"/>
            </BackgroundGradientAnimation>
        )}
        <div className={cn(titleClassName,"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10")}>
           <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
            {description}
           </div>
           <div className="font-sans font-bold text-lg max-w-96 lg:text-3xl z-10 text-neutral-600 dark:text-neutral-200">
            {title}
            </div>
            {id===2 && (
            <GridGlobe />
        )}
        {id===3 && (
           <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg-gap-8">
                {['React.js','Next.js', 'TypeScript'].map((item)=>(
                    <span key={item} className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                        {item}
                    </span>
                ))}
                <span className="px-3 py-4 rounded-lg text-center bg-[#10132e]" />
            </div>
            <div className="flex flex-col gap-3 lg-gap-8">
                <span className="px-3 py-4 rounded-lg text-center bg-[#10132e]" />
                {['Laravel','Vue.js', 'Flutter'].map((item)=>(
                    <span key={item} className="py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                        {item}
                    </span>
                ))}
            </div>
           </div>
        )}
        {id===6 && (
            <div className="mt-5 relative">
                <div className={`absolute -bottom-5 right-0`}>
                    <LottiePlayer loop={copied} animationData={animationData} />
                </div>
                <MagicButton title={copied ? 'Email Copied' : 'Copy Email'} icon={<IoCopyOutline />} otherClasses="`bg-[#161a31]`" handleClick={handleCopy}/>
            </div>
        )}
        </div>
      </div>
    </div>
  );
};
