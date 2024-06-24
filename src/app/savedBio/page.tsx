import BioCard from '@/components/bioCollection/BioCard'
import React from 'react'

const page = () => {
  return (
    <div className='item-center justify-center text-center h-auto w-full flex flex-col'>
      <h1 className='text-3xl font-bold'>
      Your Bio Collection
      </h1>
      <div className="flex flex-col h-auto bg-slate-300 px-4 mx-12 lg:mx-48 rounded-md  shadow-lg hover:shadow-lg transition duration-150 ease-in-out border border-gray-800 py-4">
        <BioCard/>
      </div>
    </div>
  )
}

export default page
