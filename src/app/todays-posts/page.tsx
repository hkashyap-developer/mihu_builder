import { client } from '@/app/lib/sanity'
import { templates } from '@/app/lib/interface'
import { urlFor } from '@/app/lib/sanity'

import HorzNavBar from '@/components/customComponents/HorzNavBar/HorzNavBar'
import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import TemplateCard from '@/components/customComponents/TemplateCards/TemplateCard'
import HeroBanner from "@/components/customComponents/HeroBanner/HeroBanner";


export const revalidate = 10;

async function getTemplates() {
  const query=`
*[_type == 'event' ] {
  "image": image.asset->url
}`;

  const templates = await client.fetch(query); 
  return templates; 
}



const page = async() => {


  const templates: templates = await getTemplates(); 
  console.log(templates); 

  return (
    <div className="flex flex-col gap-4">



        <HeroBanner/>

        <HorzNavBar/>










        <h1 className="text-5xl font-bold mb-8 mt-4 p-16mx-auto w-full text-center">Today's Posts</h1>

        <p className="mb-8 text-center">Click on the design to Download.</p>


        <div className="max-w-[600px] 2xl:max-w-[1200px] grid grid-cols-1 2xl:grid-cols-2 gap-8 mx-auto">





        {
          templates && templates.map((template:any) => {
            return (
              <TemplateCard tmpltUrl={urlFor(template.image).url()}/> 
            )
          })
        }





</div>













    </div>
  )
}

export default page