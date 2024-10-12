'use client'

import React from 'react'
import MainSetterSection from "@/components/customComponents/MainSetterSection/MainSetterSection";
import { useState } from 'react';


const MainCanvas = () => {



    const [userImage, setUserImage] = useState('');
    const [name, setName] = useState("Himanshu Kashyap p");
    const [designation, setDesignation] = useState("Yuva Neta");
  
  


  return (
    <div>



<MainSetterSection 
    userImageVar={userImage} 
    setUserImageVar={setUserImage}
    nameVar={name}
    setNameVar={setName}
    designationVar={designation}
    setDesignationVar={setDesignation}
    />


    </div>
  )
}

export default MainCanvas