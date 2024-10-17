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



  var image = localStorage.getItem('Image');
  var name = localStorage.getItem('Name');
  var designation = localStorage.getItem('Designation');














  useEffect(() => {





    const fileEl = document.getElementById('userPic');


    console.log(fileEl); 

    fileEl.addEventListener('change', ()=> {
  
      const fr = new FileReader();
      fr.readAsDataURL(fileEl.files[0]);
  
      fr.addEventListener('load', () => {
        props.setUserImageVar(fr.result);
        console.log(fr.result);
        localStorage.setItem("Image", fr.result);
      })
  
    }); 




    return () => {


   




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
    <div className="flex flex-col flex-1">



<div className="flex align-middle my-auto justify-center gap-6 flex-col border-2 w-full max-w-[400px] max-h-min p-6 rounded-xl">


    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">

    <div className="grid w-full max-w-sm items-center gap-8">


      <div className=" rounded-2xl flex flex-col gap-6">
      <Label htmlFor="picture" className="flex flex-col gap-4 font-bold cursor-pointer max-w-min rounded-full mx-auto">

      <Image
      src={image}
      width={200}
      height={200}
      alt="Picture of the author"
      className="max-w-[600px] rounded-full"
    />
   

      </Label>


      <Input id="userPic" type="file" className="flex align-middle justify-center cursor-pointer text-xl pb-10 pt-3 w-full border-b-8" {...register("image")}/>
      </div>



    </div>





    <div className=" rounded-2xl flex flex-col gap-6">
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name" className="font-bold">Your Name / Company</Label>
      <Input 
      type="text" 
      id="name" 
      placeholder={name}
      {...register("name")}
      className="text-xl py-6 w-full border-b-8"
      />
    </div>
    </div>



    <div className=" rounded-2xl flex flex-col gap-6">
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="designation" className="font-bold">Designation / More</Label>
      
      <Input 
      type="text" 
      id="designation" 
      placeholder={designation}
      {...register("desig")}
      className="text-xl py-6 w-full border-b-8"
      />

    </div>

    </div>


    <Button type="submit" className="max-w-min min-w-[160px] mx-auto  text-xl font-bold p-6 bg-[#3C99FE] text-white">Update Person</Button>

    </form>

    </div>
    👆 How It works?


    </div>
  )
}

export default AllInputs