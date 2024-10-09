"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import Image from "next/image";
import {useForm} from 'react-hook-form'

type FormValues = {
  MethodOfComnctn: string
  PreferdAcmdn: string
  destinationIndia: string
}


const AllInputs = (props:any) => {

  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;


  const onSubmit = (data:FormValues) => {

    /* Showing form data in console */

   

    
    console.log('Form Submitted', data);



  }








  return (
    <div className="flex flex-row flex-1  align-middle justify-center">


<div className="flex align-middle justify-center gap-6 flex-col border-2 w-full max-w-[400px] max-h-min p-8 rounded-xl my-auto">


    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture" className="flex flex-col gap-4 font-bold cursor-pointer max-w-min rounded-full mx-auto">

      <Image
      src="/user.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
      className="max-w-[200px] rounded-full"
    />
    <Button  variant="outline" className="max-w-min mx-auto min-w-[160px]">Upload Image</Button>

      </Label>
      <Input id="picture" type="file" className="hidden cursor-pointer" {...register("image")}/>
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name" className="font-bold">Your Name / Company</Label>
      <Input type="text" id="name" placeholder={props.nameVar} {...register("name")}/>
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="designation" className="font-bold">Designation / More</Label>
      <Input type="text" id="designation" placeholder={props.designationVar} {...register("desig")}/>
    </div>

    <Button type="submit" className="max-w-min min-w-[160px] mx-auto">Update Person</Button>

    </form>

    </div>


    </div>
  )
}

export default AllInputs