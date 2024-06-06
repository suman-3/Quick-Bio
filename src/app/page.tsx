import { Output } from "@/components/home/output";
import { UserInput } from "@/components/home/user-input";

import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import BlurIn from "@/components/magicui/blur-in";
import SparklesText from "@/components/magicui/sparkles-text";
import { ModeToggle } from "@/components/mode-toggle";
import GithubStarCount from "@/components/star-on-github";
import { BioProvider } from "@/context/bio-context";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProductHunt } from "./product-hunt-icon";

export default function Home() {
  return (
    <main className="grid relative grid-cols-1 slg:grid-cols-2 gap-12 px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:p-16 lg:px-24 lg:py-10">
      <div className="col-span-full w-full flex flex-col items-center justify-center space-y-2  sm:space-y-4 mb-4 text-center">
        {/* <Link
          href="https://github.com/suman-3/ai-powered-bio-gen"
          target="_blank"
          className=""
        > */}
        {/* <AnimatedGradientText className="px-6 py-2 rounded-full">
            <Star className="w-6 h-6 fill-yellow-300 text-yellow-400" />
            <hr className="mx-2 h-4 w-[1px] bg-gray-300" />
            Star On Github
            <ChevronRight className="ml-1 size-3 transition-transform delay-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedGradientText> */}
        {/* </Link> */}

        <div className="flex gap-2 items-center justify-end w-full">
          <ModeToggle />
        </div>
        <div className="flex gap-4 justify-center items-center w-full pb-5">
          <GithubStarCount repoUrl="https://github.com/suman-3/ai-powered-bio-gen" />
          <ProductHunt />
        </div>

        <h1 className="font-extrabold text-4xl md:text-5xl slg:text-6xl lg:text-7xl text-center w-full lg:w-[90%] uppercase mx-auto pt-4 pb-2 select-none pointer-events-none">
          CRAFT THE PERFECT PROFILE BIO IN SECONDS!
        </h1>
        <SparklesText
          className="text-sm sm:text-base md:text-lg lg:text-xl text-accent select-none pointer-events-none"
          text="Just answer a few questions, and we'll generate a bio that captures who you are."
        />
      </div>

      <BioProvider>
        <UserInput />
        <Output />
      </BioProvider>
    </main>
  );
}
