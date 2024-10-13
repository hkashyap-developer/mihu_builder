
/*

    <HeadSubHdContAndImg/>

*/

import Header from "@/components/customComponents/Header/Header";
import Footer from '@/components/customComponents/Footer/Footer'
import Image from "next/image";
import Link from "next/link";


import HeadSubHdContAndImg from '@/components/customComponents/HeadSubHdContAndImg/HeadSubHdContAndImg'
import MainSetterSection from "@/components/customComponents/MainSetterSection/MainSetterSection";


import MainCanvas from "@/components/customComponents/MainCanvas/MainCanvas";
import HeroBanner from "@/components/customComponents/HeroBanner/HeroBanner";
import { Button } from "@/components/ui/button";




export default function Home() {







  return (
    <div className="">
    <Header/>

    <div className="flex flex-column bg-slate-50">


    <div className="mt-24 p-4 min-w-[260px]">
      <div className="fixed top-20 flex flex-col justify-between gap-4">

  
        <Link href="/test">
        <Button className="text-xl font-semibold p-6 bg-[#3C99FE]">+ Create A Post</Button>
        </Link>

        <Link href="/my-details">
        <p className="text-xl">My Details</p>
        </Link>
        <Link href="/my-team">
        <p className="text-xl">My Team</p>
        </Link>

      </div>



    </div>




    <div className="mt-[72px] p-4 w-full bg-white rounded-2xl">




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
    </div>




    <Footer/>

    </div>
  );
}
