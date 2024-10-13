import React from 'react'
import Image from 'next/image'
import Logo from '/logo.png'
import { Button } from '@/components/ui/button'

import bannerImage from './bg-2.png'

const HeroBanner = () => {
  return (
    <div className="flex flex-col gap-4">
    <div className="bg-[url('/hero-bg.jpg')] min-h-[220px] bg-slate-50 flex flex-col  justify-center rounded-xl ">
    <div className="w-full flex flex-row gap-4 justify-between">

      <div className="flex flex-col gap-4 max-w-[800px] w-full my-auto p-8">
        <p className="text-4xl text-white">Happy Diwali 🪔</p>
        <p className="text-xl text-white">Make beautiful visual documents with Canva Docs. Design docs templates with photos, videos, graphics, charts, diagrams—everything you need to make an impactful document.</p>
        <Image src="/logo-2.png" width="260" height="380" alt="logo" className="max-w-[400px] sm:max-w-[140px] "/>    
      </div>
        
      <div className="flex">
        <Image src={bannerImage} width="440" height="440" alt="logo" className="rounded-2xl"/>  
      </div>

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