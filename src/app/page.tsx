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



  const [userImage, setUserImage] = useState('Taylor');
  
  return (
    <div className="">
    <Header/>

    <div className="mt-[72px]">


    <MainSetterSection userImageVar={userImage} setUserImageVar={setUserImage}/>


    </div>

    <Footer/>

    </div>
  );
}
