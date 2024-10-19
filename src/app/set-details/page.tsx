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




        <div className="flex flex-col gap-6 w-full max-w-[800px] bg-slate-50 mx-auto p-16 rounded-2xl">



        <h1 className="text-5xl font-bold mb-8">Set Details</h1>




    <div className="flex flex-row gap-20  rounded-2xl p-8 bg-white">


<div className="flex flex-col gap-6 justify-center max-w-[220px]">
        <Image
      src="/user.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
      className="max-w-[600px] rounded-full mx-auto"
    />
      <Input id="userPic" type="file" className=" cursor-pointer" />
</div>


    <div className="flex flex-col gap-6">


    <div className="rounded-2xl flex flex-col gap-6">
    <div className="grid gap-4 w-full max-w-sm items-center">
      <Label htmlFor="name" className="font-bold">Your Name / Company Name</Label>
      <Input 
      type="text" 
      id="name"      
      placeholder="Himanshu Kashyap"
      className="text-xl py-6 w-full  border-b-8"
      />
    </div>
    </div>









    <div className=" rounded-2xl flex flex-col gap-6">
    <div className="grid gap-4 w-full max-w-sm items-center">
      <Label htmlFor="name" className="font-bold">Designation / Subheading</Label>
      <Input 
      type="text" 
      id="name"     
      placeholder="Himanshu Kashyap"
      className="text-xl py-6 w-full border-b-8"
      />
    </div>
    </div>


    </div>












    </div>


    <Button type="submit" className="text-2xl p-6 max-w-min min-w-[160px]">Update</Button>

        </div>

















    </div>
  )
}

export default page