"use client"

/*

    <HeadSubHdContAndImg/>

*/

import Header from "@/components/customComponents/Header/Header";
import Footer from '@/components/customComponents/Footer/Footer'
import Image from "next/image";


import HeadSubHdContAndImg from '@/components/customComponents/HeadSubHdContAndImg/HeadSubHdContAndImg'
import MainSetterSection from "@/components/customComponents/MainSetterSection/MainSetterSection";

import { useState } from 'react';




export default function Home() {



  const [userImage, setUserImage] = useState('');
  const [name, setName] = useState("Himanshu Kashyap");
  const [designation, setDesignation] = useState("Yuva Neta");



  function settingName(nameVar:any) {
    setName(nameVar);
  }
  function settingDesg(desgVar:any) {
    setName(desgVar);
  }



  return (
    <div className="">
    <Header/>

    <div className="mt-[72px]">


    <MainSetterSection 
    userImageVar={userImage} 
    setUserImageVar={setUserImage}
    nameVar={name}
    setNameVar={settingName}
    designationVar={designation}
    setDesignationVar={settingDesg}
    />


    </div>

    <Footer/>

    </div>
  );
}
