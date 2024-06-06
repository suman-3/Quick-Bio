"use client";
import React, { useContext } from "react";
import { Badge } from "../ui/badge";
import { BorderBeam } from "../magicui/border-beam";
import { BioContext } from "@/context/bio-context";
import { Skeleton } from "../ui/skeleton";
import CopyLabel from "./copy-label";
import { ScrollArea } from "../ui/scroll-area";

export const Output = () => {
  const { output, loading } = useContext(BioContext);

  return (
    <ScrollArea className="relative flex min-h-[100vh] max-h-[100vh] mt-2 flex-col rounded-xl bg-muted/50 backdrop-blur-sm overflow-hidden border border-primary/5">
      {loading && (
        <BorderBeam
          size={1200}
          duration={4}
          delay={9}
          borderWidth={1.5}
          className="z-10"
        />
      )}
      <Badge className="absolute top-3 right-3 z-50">Output</Badge>

      {loading ? (
        <Skeleton className="w-full h-full z-10 bg-primary/10" />
      ) : (
        <ul className="flex flex-col items-start justify-start space-y-9 sm:space-y-10 lg:space-y-12 py-5 px-4 pt-12 sm:px-5 sm:py-6 xs:py-10 xs:px-7 lg:py-14 lg:px-10">
          {output.data.map((data, index) => {
            return (
              <li
                key={index}
                className="w-full text-sm xs:text-base border border-primary/20 rounded-md p-4 relative bg-background rounded-br-none"
              >
                {data.bio}
                <span className="absolute top-[99%] right-[-0.5px]">
                  <CopyLabel text={data.bio} />
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </ScrollArea>
  );
};
