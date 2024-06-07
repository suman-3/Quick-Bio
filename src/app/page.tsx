import { Output } from "@/components/home/output";
import { UserInput } from "@/components/home/user-input";
import SparklesText from "@/components/magicui/sparkles-text";
import { ModeToggle } from "@/components/mode-toggle";
import GithubStarCount from "@/components/star-on-github";
import { BioProvider } from "@/context/bio-context";
import { ProductHunt } from "./product-hunt-icon";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <>
      <main className="grid relative grid-cols-1 slg:grid-cols-2 gap-12 px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:p-16 lg:px-24 lg:py-10">
        <div className="col-span-full w-full flex flex-col items-center justify-center space-y-2  sm:space-y-4 mb-4 text-center">
          <div className="flex gap-2 items-center justify-end w-full">
            <ModeToggle />
          </div>
          <div className="flex gap-4 flex-col lg:flex-row justify-center items-center w-full pb-5">
            <GithubStarCount repoUrl="https://github.com/suman-3/ai-powered-bio-gen" />
            <ProductHunt />
          </div>

          <h1 className="font-extrabold text-4xl md:text-5xl slg:text-6xl lg:text-7xl text-center w-full lg:w-[90%] uppercase mx-auto pt-4 pb-2 select-none pointer-events-none">
            CRAFT THE PERFECT PROFILE BIO IN SECONDS!
          </h1>
          <SparklesText
            className="text-sm sm:text-base md:text-lg lg:text-xl text-accent select-none pointer-events-none"
            text="Just provide some details , and we'll generate a bio that captures who you are."
          />
        </div>
        <BioProvider>
          <UserInput />
          <Output />
        </BioProvider>
      </main>

      <Footer className="mt-10" />
    </>
  );
}
