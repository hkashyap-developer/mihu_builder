import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const MainSidebar = () => {
  return (
    <div className="flex flex-col justify-between gap-4">

        <Link href="/">
            <Button className="text-xl font-semibold p-6 bg-[#3C99FE]">+ Create A Post</Button>
        </Link>


        <Link href="/my-team" className="flex flex-row gap-2">
            <p className="text-xl text-slate-400">My Team</p><Badge variant="outline" className="rounded-full text-xsm font-thin">Coming Soon</Badge>
        </Link>


        <Link href="/how-to-use">
            <p className="text-xl">How To Use</p>
        </Link>


        <Separator />

        <Link href="/my-team">
            <p className="text-xl">Settings</p>
        </Link>


        <Separator />

        <Link href="/my-team">
            <p className="text-xl text-slate-300">About Devs</p>
        </Link>



    </div>
  )
}

export default MainSidebar