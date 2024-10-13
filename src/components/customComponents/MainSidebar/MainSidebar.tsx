import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"


const MainSidebar = () => {
  return (
    <div className="flex flex-col justify-between gap-4">

        <Link href="/set-details">
            <Button className="text-xl font-semibold p-6 bg-[#3C99FE]">+ Create A Post</Button>
        </Link>

        <Link href="/my-details">
            <p className="text-xl">My Details</p>
        </Link>
        <Link href="/my-team">
            <p className="text-xl">My Team</p>
        </Link>

        <Separator />

        <Link href="/my-team">
            <p className="text-xl text-slate-300">About Devs</p>
        </Link>


    </div>
  )
}

export default MainSidebar