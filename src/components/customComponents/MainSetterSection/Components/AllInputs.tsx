import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import Image from "next/image";


const AllInputs = () => {
  return (
    <div className="flex flex-row flex-1  align-middle justify-center">


<div className="flex align-middle justify-center gap-6 flex-col border-2 w-full max-w-[400px] max-h-min p-4 rounded-xl my-auto">

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture" className="flex flex-col gap-4 font-bold cursor-pointer max-w-min rounded-full mx-auto">

      <Image
      src="/user.jpg"
      width={240}
      height={240}
      alt="Picture of the author"
      className="max-w-[200px] rounded-full border-2"
    />
    <Button  variant="outline" className="max-w-min mx-auto">Add Image</Button>

      </Label>
      <Input id="picture" type="file" className="hidden cursor-pointer"/>
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name" className="font-bold">Name</Label>
      <Input type="text" id="name" placeholder="" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className="font-bold">Designation</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>

    <Button variant="outline" className="max-w-min font-bold mx-auto">Update Person</Button>

    </div>


    </div>
  )
}

export default AllInputs