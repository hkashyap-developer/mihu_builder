"use client"
import React from 'react'
import Image from 'next/image'

import { useEffect } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { useRef } from 'react';

import { toPng } from 'html-to-image';

const TemplateCard = (props:any) => {





  var image = localStorage.getItem('Image')!


  /*
  if(localStorage.getItem('Image')) {
    image 
  }
  else {
    image = '/user.jpg';
  }
*/

  var name = localStorage.getItem('Name');
  var designation = localStorage.getItem('Designation');


  let elementRef = useRef(null);
  let htmlToImageConvert;

  useEffect(() => {
  
    htmlToImageConvert = () => {
      toPng(elementRef.current!, { cacheBust: true })
        .then((dataUrl) => {
          let link = document.createElement("a");
          link.download = "my-poster.png";
          link.href = dataUrl;
          link.click();
          
          window.location.reload();
        
         
        })
        .catch((err) => {
          console.log(err);
        });
    };

    return () => {

    };
  }, []);   






















  return (
    <div>






<Dialog>
  <DialogTrigger>




    <div className="hover:shadow-xl relative">

    <Image
        priority
        src={props.tmpltUrl}
        width={1920}
        height={1920}
        alt="Picture of the author"
        className="w-full cursor-pointer "
        />



<div className="absolute bottom-6 flex flex-col  gap-2 mx-auto w-full">


<Image
          src={image}
          width={100}
          height={100}
          alt="Picture of the author"
          className="max-w-[200px] rounded-full  mx-auto"
        />

<p className="font-RajdhaniSemiBold w-full text-center text-white text-[200%] font-InknutAntiqua-SemiBold">{name}</p>
        <p className="font-RajdhaniSemiBold text-center text-white text-xl font-InknutAntiqua-SemiBold">{designation}</p>
    
    
    </div>



    </div>




  </DialogTrigger>
  <DialogContent className="w-full flex align-middle max-w-[520px] 2xl:max-w-[1200px] justify-between">
    <DialogHeader>
      <DialogTitle>Your Post is ready!</DialogTitle>
      <DialogDescription className="w-full flex flex-col 2xl:flex-row justify-between align-middle">

<div ref={elementRef} className="relative flex align-middle justify-center">
      <Image

      src={props.tmpltUrl}
      width={1200}
      height={1200}
      alt="Picture of the author"
      className="w-full cursor-pointer max-w-[600px]"
    />


<div className="absolute bottom-4 flex flex-col  gap-4">


<Image
          src={image}
          width={100}
          height={100}
          alt="Picture of the author"
          className="max-w-[200px] rounded-full  mx-auto"
        />

<p className="font-RajdhaniSemiBold text-center text-white text-4xl font-InknutAntiqua-SemiBold">{name}</p>
        <p className="font-RajdhaniSemiBold text-center text-white text-2xl font-InknutAntiqua-SemiBold">{designation}</p>
    
    
    </div>

</div>


    <div className="my-auto p-6 flex flex-col gap-8 max-w-[480px]">
    <p className="cursor-pointer text-xl hover:text-blue-600">It's FREE and it'll always remain free. You can donate us a cup of Coffee! ☕</p>
    <Button className="my-auto text-2xl  min-w-[280px] bg-[#3C99FE] min-h-[60px]" onClick={htmlToImageConvert}>Download</Button>
    </div>






      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>





    </div>
  )
}

export default TemplateCard