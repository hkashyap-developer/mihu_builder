import React from 'react'
import Image from 'next/image'
import Logo from '/logo.png'

const HeroBanner = () => {
  return (
    <div className="min-h-[220px] bg-slate-50 text-center flex flex-col align-middle justify-center">
        <Image src="/logo.png" width="160" height="220" alt="logo" className="max-w-[100px] sm:max-w-[140px] mx-auto"/>  
        <p className="text-2xl">Post Maker</p>
    </div>
  )
}

export default HeroBanner