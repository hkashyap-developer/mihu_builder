'use client'

import React from 'react'
import MainSetterSection from "@/components/customComponents/MainSetterSection/MainSetterSection";
import { useState } from 'react';


const MainCanvas = () => {



    const [userImage, setUserImage] = useState('/user.jpg');
    const [name, setName] = useState("Himanshu Kashyap");
    const [designation, setDesignation] = useState("CTO, Media-X-Infinity");
  
  


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