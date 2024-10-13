import HeroBanner from '@/components/customComponents/HeroBanner/HeroBanner2'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className="flex flex-col gap-4">

        <HeroBanner/>


    
        <div className="flex flex-row gap-4">


            <Link href="/">
            <div className="cursor-pointer flex flex-col align-middle justify-center max-w-min gap-2">
                <div className="flex flex-row bg-slate-100 w-[60px] h-[60px] align-middle justify-center p-2 pl-[18px] rounded-full">
                    <Image src="/back.svg" width="36" height="36" alt="back"/>
                </div>
                <p className="text-center text-slate-600">Back</p>
            </div>
            </Link>

        </div>


        <div className="w-full max-w-[800px] bg-slate-50 mx-auto p-8 rounded-2xl">



        <h1 className="text-5xl font-bold">Set Details</h1>




        </div>



























    </div>
  )
}

export default page