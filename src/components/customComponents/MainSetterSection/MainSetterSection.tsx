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
    <div className="max-w-[1400px] mx-auto px-2 sm:px-6 py-6 flex align-middle justify-center gap-8">
        <div className="flex flex-row flex-1">



            <AllInputs
            
            userImageVar={props.userImageVar} 
            setUserImageVar={props.setUserImageVar}
            nameVar={props.nameVar}
            setNameVar={props.setNameVar}
            designationVar={props.designationVar}
            setDesignationVar={props.setDesignationVar}
            
            />

        </div>

        <div className="flex flex-1">

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