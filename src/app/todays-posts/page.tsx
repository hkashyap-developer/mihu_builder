
import HorzNavBar from '@/components/customComponents/HorzNavBar/HorzNavBar'
import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import TemplateCard from '@/components/customComponents/TemplateCards/TemplateCard'
import HeroBanner from "@/components/customComponents/HeroBanner/HeroBanner";

const page = () => {
  return (
    <div className="flex flex-col gap-4">



        <HeroBanner/>

        <HorzNavBar/>



        <h1 className="text-5xl font-bold mb-8 mt-4 p-16mx-auto w-full text-center">Today's Posts</h1>

        <p className="mb-8 text-center">Click on the design to Download.</p>


        <div className="max-w-[600px] 2xl:max-w-[1200px] grid grid-cols-1 2xl:grid-cols-2 gap-8 mx-auto">

        <TemplateCard tmpltUrl="/placeholder-raw.png"/> 
        <TemplateCard tmpltUrl="/diwali.png"/> 
        <TemplateCard tmpltUrl="/diwali-2.png"/> 
        <TemplateCard tmpltUrl="/placeholder-5.jpg"/> 
        <TemplateCard tmpltUrl="/placeholder-6.png"/> 
        <TemplateCard tmpltUrl="/placeholder.png"/>
        <TemplateCard tmpltUrl="/placeholder-2.png"/>
        <TemplateCard tmpltUrl="/placeholder-3.png"/>
        <TemplateCard tmpltUrl="/placeholder-4.png"/>
        <TemplateCard tmpltUrl="/placeholder-3.png"/>
        <TemplateCard tmpltUrl="/placeholder-4.png"/>



</div>













    </div>
  )
}

export default page