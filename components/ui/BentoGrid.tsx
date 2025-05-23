'use client'
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationDate from "@/data/Confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

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
        className
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
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

   const handleCopy = ()=>{
    navigator.clipboard.writeText('anshsharma7400@gmail.com');
    setCopied(true);
  }

  const [copied, setCopied] = useState(false);
  return (
    <div
      className={cn(
        "group/bento shadow-input overflow-hidden row-span-1 flex flex-col relative justify-between space-y-4 rounded-3xl border border-white/[0.1]    transition duration-200 hover:shadow-xl   dark:shadow-none ",
        className
      )}
      style={{
        background: "#07071f",
        backgroundColor:
          " linear-gradient(90deg,rgba(7, 7, 31, 1) 0%, rgba(87, 199, 133, 1) 100%, rgba(51, 56, 61, 1) 49%)   ",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 6 && (
          // add background animation , remove the p tag
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>

          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-2 w-fit absolute -right-1 lg:-right-2 ">
              <div className="flex flex-col gap-3   md:gap-3 lg:gap-5">
                {["React.js", "next.js", "TypeScipte"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py4 lg:px-3 px-3 text-xs lg:text-base opactiy-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}

              </div>
            </div>
          )}

          {id ===6 && (
            <div className="mt-5  relative">
              <div className={`absolute -bottom-5 right-0 `}>
                <Lottie options={{
                  loop:copied,
                  autoplay:copied,
                  animationData: animationDate,
                  rendererSettings:{
                    preserveAspectRatio:'xMidYMid slice',
                  }
                }}/>
              </div>
              <MagicButton
              title={copied ? "Email copied ": "Copy my email address"} 
              icon={ <IoCopyOutline/>}
              position="left"
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}/>
              </div>
          )}
        </div>
        <div className="transition duration-200 group-hover/bento:translate-x-2"></div>
      </div>
    </div>
  );
};
