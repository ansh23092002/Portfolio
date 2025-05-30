
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* sportligt adding  */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className=" flex h-screen  w-full items-center justify-center bg-black-100 dark:bg-grid-white/[0.01] obsolute top-0 left-0">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#14141c_1px,transparent_1px),linear-gradient(to_bottom,#14141c_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#14141c_1px,transparent_1px),linear-gradient(to_bottom,#14141c_1px,transparent_1px)]"
          )}
        />
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]  flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100  max-w-80">
              Dynamic Web Magic with Next.js{" "}
            </h2>

            <TextGenerateEffect
              filter={false}
              className=" text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Transforming Concepts into seamless User Experiences"
              duration={3}
            />
            <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">Hi, I&apos;m Ansh, a Next.js Developer based in Raipur.</p>
            <a href="#about">
               <MagicButton  title="show my work"   icon={<FaLocationArrow />}
              position="right"/>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
