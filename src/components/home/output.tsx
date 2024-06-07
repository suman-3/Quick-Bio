"use client";
import React, { useContext, useEffect, useState } from "react";
import { Badge } from "../ui/badge";
import { BorderBeam } from "../magicui/border-beam";
import { BioContext } from "@/context/bio-context";
import { Skeleton } from "../ui/skeleton";
import CopyLabel from "./copy-label";
import { ScrollArea } from "../ui/scroll-area";
import { motion } from "framer-motion";
import { RefreshButton } from "../refresh-button";
import { useRouter } from "next/navigation";

export const Output = () => {
  const { output, loading } = useContext(BioContext);
  const [count, setCount] = useState(0);
  const router = useRouter();
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  useEffect(() => {
    if (output.data.length > 0) {
      setCount(output.data.length);
    }
   
  }, [output.data]);

  return (
    <ScrollArea className="relative flex min-h-[100vh] max-h-[100vh] mt-2 flex-col rounded-xl bg-muted/50 backdrop-blur-sm overflow-hidden border border-gray-500/50">
      {loading && (
        <BorderBeam
          size={1200}
          duration={4}
          delay={9}
          borderWidth={1.5}
          className="z-10"
        />
      )}
      <div className="flex items-center justify-end gap-3 pr-3 pt-2">
        <RefreshButton />
        <Badge className="z-20 inline-flex h-auto animate-background-shine cursor-pointer items-center justify-center rounded-full border border-gray-800 bg-[linear-gradient(110deg,#000,45%,#4D4B4B,55%,#000)] bg-[length:250%_100%] px-4 py-1 text-xs font-medium text-gray-300 ">
          Output
        </Badge>
      </div>

      {loading ? (
        <ul className="flex flex-col items-start justify-between space-y-9 sm:space-y-10 lg:space-y-12 py-5 px-4 pt-12 sm:px-5 sm:py-6 xs:py-10 xs:px-7 lg:py-14 lg:px-10">
          <Skeleton className="w-full h-[14vh] md:h-[16vh] slg:h-[19vh] z-10 bg-gray-400/30 dark:bg-gray-300/20 backdrop-blur-sm " />
          <Skeleton className="w-full h-[14vh] md:h-[16vh] slg:h-[19vh] z-10 bg-gray-400/30 dark:bg-gray-300/20 backdrop-blur-sm " />
          <Skeleton className="w-full h-[14vh] md:h-[16vh] slg:h-[19vh] z-10 bg-gray-400/30 dark:bg-gray-300/20 backdrop-blur-sm " />
          <Skeleton className="w-full h-[14vh] md:h-[16vh] slg:h-[19vh] z-10 bg-gray-400/30 dark:bg-gray-300/20 backdrop-blur-sm " />
        </ul>
      ) : (
        <ul className="flex flex-col items-start justify-start space-y-9 sm:space-y-10 lg:space-y-12 py-5 px-4 pt-12 sm:px-5 sm:py-6 xs:py-10 xs:px-7 lg:py-14 lg:px-10">
          {output.data.map((data, index) => {
            return (
              <motion.li
                initial="hidden"
                animate="visible"
                transition={{ duration: 1 }}
                variants={defaultVariants}
                key={index}
                className="w-full text-sm xs:text-base border
                   border-primary/20 rounded-md p-4 relative bg-background rounded-br-none"
              >
                {data.bio}
                <span className="absolute top-[99%] right-[-0.5px]">
                  <CopyLabel text={data.bio} />
                </span>
              </motion.li>
            );
          })}
        </ul>
      )}
    </ScrollArea>
  );
};
