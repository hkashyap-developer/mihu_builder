"use client"

import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import Image from "next/image";
import {useForm} from 'react-hook-form'
import { useEffect } from 'react';


type FormValues = {
  image: string
  name: string
  desig: string
}


const AllInputs = (props:any) => {

  const form = useForm<FormValues>();
  const { register, control, handleSubmit } = form;







  useEffect(() => {







    return () => {





      const fileEl = document.getElementById('userPic');


      console.log(fileEl); 
  
      fileEl.addEventListener('change', ()=> {
    
        const fr = new FileReader();
        fr.readAsDataURL(fileEl.files[0]);
    
        fr.addEventListener('load', () => {
          props.setUserImageVar(fr.result);
          console.log(fr.result);
        })
    
      }); 





    };
  }, []);




  const onSubmit = (data:FormValues) => {

    /* Showing form data in console */

   

    
    console.log('Form Submitted', data);

    /* Dealing with picture */







    /* Dealing with names */ 
    
    props.setNameVar(data.name);
    localStorage.setItem("Name", data.name);
   
    /* Dealing with designation */     

    localStorage.setItem("Designation", data.desig);
    props.setDesignationVar(data.desig); 




  }








  return (
    <div className="flex flex-row flex-1  align-middle justify-center">


<div className="flex align-middle justify-center gap-6 flex-col border-2 w-full max-w-[400px] max-h-min p-8 rounded-xl">


    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

    <div className="grid w-full max-w-sm items-center gap-1.5">


      <div className="bg-slate-50 p-8 rounded-2xl">
      <Label htmlFor="picture" className="flex flex-col gap-4 font-bold cursor-pointer max-w-min rounded-full mx-auto">

      <Image
      src={props.userImageVar}
      width={200}
      height={200}
      alt="Picture of the author"
      className="max-w-[600px] rounded-2xl"
    />
   

      </Label>
      </div>


      <Input id="userPic" type="file" className=" cursor-pointer" {...register("image")}/>
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name" className="font-bold">Your Name / Company</Label>
      <Input 
      type="text" 
      id="name" 
      placeholder={props.nameVar} 
      {...register("name")}
      className="text-xl"
      />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="designation" className="font-bold">Designation / More</Label>
      
      <Input 
      type="text" 
      id="designation" 
      placeholder={props.designationVar} 
      {...register("desig")}
      className="text-xl"
      />

    </div>

    <Button type="submit" className="max-w-min min-w-[160px] mx-auto">Update Person</Button>

    </form>

    </div>


    </div>
  )
}

export default AllInputs