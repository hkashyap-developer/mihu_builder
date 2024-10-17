import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const HorzNavBar = () => {
  return (
    <div className="flex w-full justify-between align-middle">

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


    <div className="flex flex-col align-middle justify-center">


    <Link href="/">
        <div className="cursor-pointer flex flex-col align-middle justify-center max-w-min gap-2">
            <Button className="h-[60px] w-[220px] text-2xl font-bold bg-[#3C99FE]">Select Design</Button>
            <p className="text-center text-slate-600">Next Step</p>
        </div>
        </Link>



    </div>

    </div>
  )
}

export default HorzNavBar