import React from 'react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'

const AllInputs = () => {
  return (
    <div className="flex flex-1  align-middle justify-center">


<div className="flex gap-6 flex-col border-2 max-w-[400px] max-h-min p-4 rounded-xl">

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture" className="">Picture</Label>
      <Input id="picture" type="file" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="name" className="">Name</Label>
      <Input type="text" id="name" placeholder="" />
    </div>

    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email" className="">Designation</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>

    <Button variant="outline" className="max-w-min">Update Person</Button>

    </div>


    </div>
  )
}

export default AllInputs