"use client"
import React, { useEffect, useState } from 'react';
import DeleteLabel from './delete-label';

interface Bio {
  _id: string;
  bio: string;
  createdAt: string;
}

const getBio = async (): Promise<{bios: Bio[]}> => {
  try {
    const res = await fetch('/api/bio', {
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
}

const BioCard = () => {
  const [bios, setBios] = useState<Bio[]>([]);

  useEffect(() => {
    const fetchBios = async () => {
      const data = await getBio();
      setBios(data.bios);
    }
    fetchBios();
  }, [])

  return (
    <div className='flex flex-col space-y-4'>
      {bios.map((bio) => (
        <div key={bio._id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-shadow duration-300 hover:shadow-lg">
          <p className="text-gray-800 text-base mb-2">{bio.bio}</p>
          <p className="text-gray-500 text-sm"><span className='font-bold'>Date: </span>{new Date(bio.createdAt).toLocaleDateString()}</p>
          <div className="flex left-0 ">
          <DeleteLabel id={bio._id}/>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BioCard;
