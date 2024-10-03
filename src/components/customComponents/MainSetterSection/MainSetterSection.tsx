'use client'

import React from 'react'
import { useState, useRef } from 'react';


import AllInputs from './Components/AllInputs'
import PrimaryOutput from './Components/PrimaryOutput'




import DefaultImage from "../assets/upload-photo-here.png";
import EditIcon from "../assets/edit.svg";
import UploadingAnimation from "../assets/uploading.gif";


const MainSetterSection = () => {

    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [image, setImage] = useState("");


  return (
    <div className="max-w-[1400px] mx-auto px-2 sm:px-6 py-2 flex align-middle justify-center gap-8">
        <div className="flex flex-1 align-middle justify-center">

            <AllInputs/>

        </div>

        <div className="flex-1">

            <PrimaryOutput/>

        </div>

    </div>
  )
}

export default MainSetterSection