'use client'

import React from 'react'
import { Button } from "@/components/ui/button"


const Settings = () => {

  function deleteAllUserData() {
    console.log("yes")
  }


  return (
    <div className="max-w-[600px] mx-auto py-8 min-h-[600px] flex flex-col gap-8">
        <h1 className="text-5xl font-bold">Settings</h1>

        <div className="flex flex-col gap-4 border p-4 md:p-8 rounded-xl">
          <h2 className="text-2xl font-bold">Delete Local Storage</h2>
          <p>We do not save any data in the backedn. Eveything happens on your browswer. You can delete the data that's stored in your browser.</p>
          <Button variant="destructive" onClick={deleteAllUserData} className="max-w-min text-md">Delete Data</Button>
        </div>
        



    </div>
  )
}

export default Settings