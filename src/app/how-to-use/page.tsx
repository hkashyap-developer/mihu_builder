import HeroBanner from '@/components/customComponents/HeroBanner/HeroBanner2'
import HorzNavBar from '@/components/customComponents/HorzNavBar/HorzNavBar'
import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'

const page = () => {
  return (
    <div className="flex flex-col gap-4">

        <HeroBanner/>

        <HorzNavBar/>











        <h1 className="text-5xl font-bold mb-8 mt-4 p-16 max-w-[800px] mx-auto w-full">How To Use
        </h1>





        <Image
      src="/how-to.png"
      width={800}
      height={800}
      alt="Picture of the author"
      className=" mx-auto"
    />









    </div>
  )
}

export default page