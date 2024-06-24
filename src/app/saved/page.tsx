"use client";
import BioCard from "@/components/bioCollection/BioCard";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Home } from "lucide-react";
import { Bio, getBio } from "@/actions/get-bio";

const page = () => {
  const [bios, setBios] = useState<Bio[]>([]);

  useEffect(() => {
    const fetchBios = async () => {
      const data = await getBio();
      setBios(data.bios);
    };
    fetchBios();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center py-10 gap-3 md:gap-4 lg:gap-5 relative">
      <div className="">
        <h1 className="font-extrabold text-2xl md:text-3xl slg:text-4xl lg:text-6xl text-center w-full lg:w-[90%] uppercase mx-auto pt-4 pb-2 select-none pointer-events-none">
          BIO COLLECTION
        </h1>
      </div>

      <div className="h-full w-full px-4 md:px-6 lg:px-10">
        {bios.length > 0 ? (
          <ScrollArea className="flex min-h-[60vh] max-h-[84vh] mt-2 flex-col rounded-lg bg-muted/50 backdrop-blur-sm overflow-hidden border border-gray-500/50 px-2 md:px-4 lg:px-5 py-3 lg:py-5">
            <BioCard />
          </ScrollArea>
        ) : (
          <div className="flex min-h-[60vh] max-h-[84vh] items-center justify-center mt-2 rounded-lg bg-muted/50 backdrop-blur-sm overflow-hidden border border-gray-500/50">
            <Link href="/" className="flex flex-col space-y-2">
              <span className="text-xl md:text-2xl">
                Bio Collection is Empty
              </span>
            </Link>
          </div>
        )}
      </div>
      <Link href="/">
        <Button
          className="absolute top-5 left-5 md:top-7 md:left-7   lg:top-10 lg:left-12 flex items-center gap-1"
          variant="secondary"
        >
          <Home className="size-4 shrink-0" />
          <span className="hidden md:block">Home</span>
        </Button>
      </Link>
    </div>
  );
};

export default page;
