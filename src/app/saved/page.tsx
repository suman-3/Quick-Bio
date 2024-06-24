import BioCard from "@/components/bioCollection/BioCard";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col items-center py-10 gap-3 md:gap-4 lg:gap-5">
      <div className="">
        <h1 className="font-extrabold text-2xl md:text-3xl slg:text-4xl lg:text-6xl text-center w-full lg:w-[90%] uppercase mx-auto pt-4 pb-2 select-none pointer-events-none">
          BIO COLLECTION
        </h1>
      </div>

      <div className="h-full w-full px-4 md:px-6 lg:px-10">
        <ScrollArea className="flex min-h-[60vh] max-h-[84vh] mt-2 flex-col rounded-lg bg-muted/50 backdrop-blur-sm overflow-hidden border border-gray-500/50 px-2 md:px-4 lg:px-5 py-3 lg:py-5">
          <BioCard />
        </ScrollArea>
      </div>
    </div>
  );
};

export default page;
