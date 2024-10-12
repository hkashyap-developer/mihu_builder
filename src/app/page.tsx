
/*

    <HeadSubHdContAndImg/>

*/

import Header from "@/components/customComponents/Header/Header";
import Footer from '@/components/customComponents/Footer/Footer'
import Image from "next/image";


import HeadSubHdContAndImg from '@/components/customComponents/HeadSubHdContAndImg/HeadSubHdContAndImg'
import MainSetterSection from "@/components/customComponents/MainSetterSection/MainSetterSection";


import MainCanvas from "@/components/customComponents/MainCanvas/MainCanvas";
import HeroBanner from "@/components/customComponents/HeroBanner/HeroBanner";




export default function Home() {







  return (
    <div className="">
    <Header/>

    <div className="mt-[72px]">


<HeroBanner/>


    <MainCanvas/>


{/*
    <MainSetterSection 
    userImageVar={userImage} 
    setUserImageVar={setUserImage}
    nameVar={name}
    setNameVar={settingName}
    designationVar={designation}
    setDesignationVar={settingDesg}
    />
*/}

    </div>

    <Footer/>

    </div>
  );
}
