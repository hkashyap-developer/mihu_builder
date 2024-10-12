import React from 'react'
import Image from "next/image" 
import { AspectRatio } from "@/components/ui/aspect-ratio"

import Output from './template-01.png'
import { Button } from '@/components/ui/button'

import { useRef } from 'react';

import { toPng } from 'html-to-image';

const PrimaryOutput = (props:any) => {

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
    <div className="flex-1 flex flex-col gap-4 bg-slate-100 p-8 rounded-xl">




<AspectRatio ref={elementRef} ratio={1 / 1}>
    <Image src={Output} alt="Image" className="rounded-md  w-full min-w-full" width="1920" height="1920" />


    <div className="absolute flex flex-col gap-4 bottom-6 left-4 w-full">



        <Image
          src={props.userImageVar}
          width={100}
          height={100}
          alt="Picture of the author"
          className="max-w-[200px] rounded-full  mx-auto"
        />



        <p className="text-center text-white text-3xl font-InknutAntiqua-SemiBold">{props.nameVar}</p>
        <p className="text-center text-white text-xl font-InknutAntiqua-SemiBold">{props.designationVar}</p>
    </div>


  </AspectRatio>


    <div className="flex justify-between">

        <div className="flex flex-1 text-center justify-start">
            <Button className="p-6 bg-green-800 text-white" onClick={htmlToImageConvert}>Download</Button>
        </div>





    </div>


    </div>
  )
}

export default PrimaryOutput