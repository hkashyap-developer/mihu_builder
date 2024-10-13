import React from 'react'
import Image from 'next/image'
import Logo from '/logo.png'
import { Button } from '@/components/ui/button'

const HeroBanner = () => {
  return (
    <div className="flex flex-col gap-4">
    <div className="bg-[url('/hero-bg.jpg')] min-h-[280px] bg-slate-50 flex flex-col  justify-center rounded-xl p-8 ">
    <div className="flex flex-col gap-4 max-w-[800px]">
    <p className="text-4xl text-white">Happy Diwali 🪔</p>
    <p className="text-xl text-white">Make beautiful visual documents with Canva Docs. Design docs templates with photos, videos, graphics, charts, diagrams—everything you need to make an impactful document.</p>
        <Image src="/logo-2.png" width="260" height="380" alt="logo" className="max-w-[400px] sm:max-w-[140px] "/>  
        </div>
    </div>
    <div className="flex flex-row gap-4">
    <Button variant="outline" className="max-w-min text-xl">Diwali</Button>
    <Button variant="outline" className="max-w-min text-xl">Dussehra</Button>
    <Button variant="outline" className="max-w-min text-xl">Shree Ram</Button>
    <Button variant="outline" className="max-w-min text-xl">Deepak</Button>
    </div>
    </div>
  )
}

export default HeroBanner