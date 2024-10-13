
/*

    <HeadSubHdContAndImg/>

*/


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

          <HeroBanner />
          <MainCanvas />

    </div>

  );
}
