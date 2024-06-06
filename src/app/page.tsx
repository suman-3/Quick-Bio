import AnimatedGradientText from "@/components/magicui/animated-gradient-text";
import BlurIn from "@/components/magicui/blur-in";
import SparklesText from "@/components/magicui/sparkles-text";
import GithubStarCount from "@/components/star-on-github";
import { ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex flex-col items-center justify-center space-y-4 mb-4 text-center">
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
        <GithubStarCount repoUrl="https://github.com/suman-3/ai-powered-bio-gen" />
        {/* </Link> */}

        {/* <SparklesText
          className="font-extrabold text-7xl text-center w-full lg:w-[90%] uppercase mx-auto pt-4 pb-2"
          text="CRAFT THE PERFECT PROFILE BIO IN SECONDS!"
        /> */}

        <h1
        className="font-extrabold text-7xl text-center w-full lg:w-[90%] uppercase mx-auto pt-4 pb-2"
        >
        CRAFT THE PERFECT PROFILE BIO IN SECONDS!
        </h1>
        <BlurIn
          className="text-lg text-accent p-0"
          word="Just answer a few questions, and we'll generate a bio that captures who you are."
        />
      </div>
    </main>
  );
}
