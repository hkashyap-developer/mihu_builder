'use client'

import React from 'react'
import { useState, useRef } from 'react';


import AllInputs from './Components/AllInputs'
import PrimaryOutput from './Components/PrimaryOutput'




import DefaultImage from "../assets/upload-photo-here.png";
import EditIcon from "../assets/edit.svg";
import UploadingAnimation from "../assets/uploading.gif";


const MainSetterSection = (props:any) => {


  return (
    <div className="w-full mx-auto px-2 sm:px-0 py-6 flex align-middle justify-center gap-8 ">
        <div className="max-w-[400px] flex flex-row flex-1 overflow-y-visible">



            <AllInputs
            
            userImageVar={props.userImageVar} 
            setUserImageVar={props.setUserImageVar}
            nameVar={props.nameVar}
            setNameVar={props.setNameVar}
            designationVar={props.designationVar}
            setDesignationVar={props.setDesignationVar}
            
            />

        </div>

        <div className="flex flex-1 justify-center">

            <PrimaryOutput
            
            userImageVar={props.userImageVar} 
            setUserImageVar={props.setUserImageVar}
            nameVar={props.nameVar}
            setNameVar={props.setNameVar}
            designationVar={props.designationVar}
            setDesignationVar={props.setDesignationVar}
            
            />

        </div>

    </div>
  )
}

export default MainSetterSection