"use client"
import React from 'react'
import Image from 'next/image'


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


    const elementRef = useRef(null);


    const htmlToImageConvert = () => {
      toPng(elementRef.current, { cacheBust: true })
        .then((dataUrl) => {
          let link = document.createElement("a");
          link.download = "my-poster.png";
          link.href = dataUrl;
          link.click();
          /*
          window.location.reload();
          */
         
        })
        .catch((err) => {
          console.log(err);
        });
    };



  return (
    <div>






<Dialog>
  <DialogTrigger>




    <div className="hover:shadow-xl">

    <Image
        src={props.tmpltUrl}
        width={1920}
        height={1920}
        alt="Picture of the author"
        className="w-full cursor-pointer "
        />



    </div>




  </DialogTrigger>
  <DialogContent className="w-full flex align-middle max-w-[1200px] justify-between">
    <DialogHeader>
      <DialogTitle>Your Post is ready!</DialogTitle>
      <DialogDescription className="w-full flex justify-between align-middle">

<div ref={elementRef} className="relative flex align-middle justify-center">
      <Image
      src={props.tmpltUrl}
      width={1200}
      height={1200}
      alt="Picture of the author"
      className="w-full cursor-pointer max-w-[600px] w-full"
    />


<div className="absolute bottom-4 flex flex-col  gap-4">


<Image
          src="/user.jpg"
          width={100}
          height={100}
          alt="Picture of the author"
          className="max-w-[200px] rounded-full  mx-auto"
        />

<p className="text-center text-white text-3xl font-InknutAntiqua-SemiBold">Himanshu Kashyap</p>
        <p className="text-center text-white text-xl font-InknutAntiqua-SemiBold">CTO, Media-X-Infinity</p>
    
    
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