import React from 'react'
import Image from "next/image" 
import { AspectRatio } from "@/components/ui/aspect-ratio"

import Output from './template-01.png'
import { Button } from '@/components/ui/button'

const PrimaryOutput = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 bg-slate-100 p-8 rounded-xl">




<AspectRatio ratio={1 / 1}>
    <Image src={Output} alt="Image" className="rounded-md  w-full min-w-full" width="1920" height="1920" />


    <div className="absolute flex flex-col gap-4 bottom-4 left-4 w-full">



        <Image
          src="/user.jpg"
          width={100}
          height={100}
          alt="Picture of the author"
          className="max-w-[200px] rounded-full bg-white mx-auto"
        />



        <p className="text-center text-white text-3xl font-InknutAntiqua-SemiBold">Himanshu kashyap</p>
        <p className="text-center text-white text-2xl font-InknutAntiqua-SemiBold">test</p>
    </div>


  </AspectRatio>


    <div className="flex justify-between">

        <div className="flex flex-1 text-center">
            <Button variant="outline" className="text-right">Download</Button>
        </div>





    </div>


    </div>
  )
}

export default PrimaryOutput