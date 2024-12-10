"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IoArrowForward } from 'react-icons/io5';

const Contact = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return null;
  return (
    <div className='lg:flex block gap-5 w-full p-7 bg-[#fefcfd]'>
      <Image src="/contact.png" alt="/contact" width={100} height={100} style={{height: "300px"}} className={`w-2/5 hidden lg:block object-cover rounded-md`} />
      <div className='flex flex-col lg:w-3/5 w-full bg-[#5cd2dd33] p-7 rounded-lg gap-6'>
        <h1 className='lg:text-4xl text-xl'>S&apos;inscrire & économiser <span className='text-[#5cd2dd]'>10%</span></h1>
        <p className='text-lg text-gray-400'>Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn&apos;t. Yet busy any meeting shark light marginalised 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.</p>
        <div className='sm:flex block gap-2 w-full'>
            <input type="text" className='p-4 rounded-md sm:w-4/5 mb-1 w-full focus:outline-none' placeholder='john@jeo.com'/>
            <button className='flex items-center text-lg text-white bg-[#5CD2DD] rounded-md justify-center sm:w-1/5 w-full p-2'>S&apos;INSCRISE <IoArrowForward/></button>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Contact
