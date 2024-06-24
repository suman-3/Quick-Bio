"use client";
import { Output } from "@/components/home/output";
import { UserInput } from "@/components/home/user-input";
import SparklesText from "@/components/magicui/sparkles-text";
import { ModeToggle } from "@/components/mode-toggle";
import GithubStarCount from "@/components/star-on-github";
import { BioProvider } from "@/context/bio-context";
import { ProductHunt } from "./product-hunt-icon";
import { Footer } from "@/components/home/footer";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Save, Star } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRedirectSaved = () => {
    setLoading(true);
    setTimeout(() => {
      router.push("/saved");
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <main className="grid relative grid-cols-1 slg:grid-cols-2 gap-12 px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:p-16 lg:px-24 lg:py-10">
        <div className="col-span-full w-full flex flex-col items-center justify-center space-y-2 sm:space-y-4 mb-4 text-center">
          <div className="flex gap-4 items-center justify-end w-full">
            <ModeToggle />
            <SignedOut>
              <SignInButton mode="modal" signUpForceRedirectUrl="/">
                <Button type="button" size="sm" variant="shine">
                  Log In
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <ClerkLoading>
                <Skeleton className="h-10 w-10 rounded-full bg-gray-700/50 dark:bg-gray-300/40" />
              </ClerkLoading>
              <ClerkLoaded>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-9 w-9",
                    },
                  }}
                />
              </ClerkLoaded>
            </SignedIn>
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
          <div className="w-full flex flex-col gap-6">
            <Output />
            <SignedOut>
              <SignInButton mode="modal" signUpForceRedirectUrl="/">
                <Button className="flex items-center gap-2" variant="shine">
                  <Star className="size-4 shrink-0" />
                  Sign in to save
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button
                className="flex items-center gap-2"
                variant="shine"
                loadingText="Redirecting"
                isLoading={loading}
                onClick={handleRedirectSaved}
              >
                <Save className="size-4 shrink-0" />
                Saved Bio
              </Button>
            </SignedIn>
          </div>
        </BioProvider>
      </main>

      <Footer className="mt-4 sm:mt-5 md:mt-7 slg:mt-8 lg:mt-10" />
    </>
  );
}
