import React from 'react'
import Image from 'next/image'
import Logo from '/logo.png'

const HeroBanner = () => {
  return (
    <div className="bg-[url('/hero-bg.jpg')] min-h-[220px] bg-slate-50 text-center flex flex-col align-middle justify-center rounded-xl">
        <Image src="/logo-2.png" width="260" height="380" alt="logo" className="max-w-[400px] sm:max-w-[240px] mx-auto"/>  
        <p className="text-2xl text-white">Post Maker V.0</p>
    </div>
  )
}

export default HeroBanner