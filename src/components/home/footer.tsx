import { cn } from "@/lib/utils";
import React from "react";
import { Dock, DockIcon } from "../magicui/dock";
import NextJsIcon from "../icons/next-js-icon";
import TsIcon from "../icons/ts-icon";
import TailwindIcon from "../icons/tailwind-icon";
import VercelIcon from "../icons/vercel-icon";
import ShadcnIcon from "../icons/shadcn-icon";
import OpenAiIcon from "../icons/open-ai-icon";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      className={cn(
        "w-full h-[17vh] md:h-[15vh] bg-gray-900/5 backdrop-blur-sm  flex flex-col-reverse md:flex-row items-center justify-between pt-8 md:py-0 border-t px-10",
        className
      )}
    >
      <div className="mb-2 mt-1 md:mb-0">
        <p className="text-sm">
          &copy; {currentYear}, Built with ❤️ by{" "}
          <a
            href="https://suman-mondal-portfolio.vercel.app/"
            target="_blank"
            className="font-semibold cursor-pointer"
          >
            Suman
          </a>
          {" & "}
          <a
            // href="https://suman-mondal-portfolio.vercel.app/"
            target="_blank"
            className="font-semibold"
          >
            Gourab
          </a>{" "}
        </p>
      </div>
      <div className="pt-6 md:pt-0 mt-0 lg:-mt-6 flex items-center justify-center">
        <Dock className="flex items-center">
          <DockIcon className="">
            <NextJsIcon className="size-6" />
          </DockIcon>
          <DockIcon className="">
            <TsIcon className="size-6" />
          </DockIcon>
          <DockIcon className="">
            <TailwindIcon className="size-6" />
          </DockIcon>
          <DockIcon className="">
            <VercelIcon className="size-6" />
          </DockIcon>
          <DockIcon className="">
            <ShadcnIcon className="size-5" />
          </DockIcon>
          <DockIcon className="">
            <OpenAiIcon className="size-5" />
          </DockIcon>
        </Dock>
      </div>
    </div>
  );
};
