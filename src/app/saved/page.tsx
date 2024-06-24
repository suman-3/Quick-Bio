import BioCard from '@/components/bioCollection/BioCard'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div className='item-center justify-center text-center h-auto w-full flex flex-col'>
      <div className=" mt-5">
        <div className="absolute left-12 lg:left-48">
          <Link href={"/"}>
            <Button>
              Back Home
            </Button>
          </Link>
        </div>
        <h1 className='text-3xl font-bold ml-24 lg:ml12'>
          Your Bio Collection
        </h1>
      </div>
      <div className="flex flex-col h-auto bg-slate-100 px-4 mx-12 lg:mx-48 rounded-md  shadow-lg hover:shadow-lg transition duration-150 ease-in-out border border-gray-800 py-4 mt-3 mb-5">
        <BioCard />
      </div>
    </div>
  )
}

export default page;
