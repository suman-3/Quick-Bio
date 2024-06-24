"use client";
import React, { useEffect, useState } from "react";
import DeleteLabel from "./delete-label";
import { Skeleton } from "../ui/skeleton";
import { motion } from "framer-motion";
import { format } from "date-fns";
import CopyLabel from "../home/copy-label";

interface Bio {
  _id: string;
  bio: string;
  createdAt: string;
}

const getBio = async (): Promise<{ bios: Bio[] }> => {
  try {
    const res = await fetch("/api/bio", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch bio");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading bios", error);
    return { bios: [] };
  }
};

const BioCard: React.FC = () => {
  const [bios, setBios] = useState<Bio[]>([]);

  useEffect(() => {
    const fetchBios = async () => {
      const data = await getBio();
      setBios(data.bios);
    };
    fetchBios();
  }, []);

  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-9 gap-3 md:gap-4 lg:gap-5">
      {bios.length > 0 ? (
        <>
          {bios.map((bio) => (
            <motion.div
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
              variants={defaultVariants}
              key={bio._id}
              className="col-span-1 md:col-span-3 w-full h-full text-sm xs:text-base rounded-md p-4 relative bg-background text-black border dark:border-none dark:text-white flex flex-col gap-1 lg:ml-2"
            >
              <p className="mb-2 text-left text-sm xs:text-base">{bio.bio}</p>
              <div className="flex md:flex-col lg:flex-row items-left lg:items-center justify-between w-full gap-3">
                <p className="text-sm">
                  <span className="font-semibold">Saved At: </span>
                  {/* {new Date(bio.createdAt).toLocaleDateString()} */}
                  {format(new Date(bio.createdAt), "MMM d, yyyy")}
                </p>
                <div className="flex space-x-1">
                  <DeleteLabel id={bio._id} className="rounded-sm p-1 px-2" />
                  <CopyLabel text={bio.bio} className="rounded-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </>
      ) : (
        <>
          <Skeleton className="col-span-1 md:col-span-3 h-[20vh] md:h-[21vh] lg:h-[23vh] z-10 bg-gray-400/30 dark:bg-gray-300/20 backdrop-blur-sm " />
          <Skeleton className="col-span-1 md:col-span-3 h-[20vh] md:h-[21vh] lg:h-[23vh] z-10 bg-gray-400/30 dark:bg-gray-300/20 backdrop-blur-sm " />
          <Skeleton className="col-span-1 md:col-span-3 h-[20vh] md:h-[21vh] lg:h-[23vh] z-10 bg-gray-400/30 dark:bg-gray-300/20 backdrop-blur-sm " />
        </>
      )}
    </div>
  );
};

export default BioCard;
