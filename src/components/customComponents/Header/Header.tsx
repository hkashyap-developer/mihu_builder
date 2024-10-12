import React from 'react'
import Image from 'next/image'


import MainNavigation from './Components/MainNavigation'

import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import HamburgerIcon from './Components/hamburger.webp'


import MobileNavigation from './Components/MainNavigation';
import HeaderAccountDetails from './Components/HeaderAccountDetails';

import Logo from './Components/logo.png'

const Header = async() => {


  return (
    <div className="fixed border-t-[0px] border-slate-400 top-0 z-50 w-full">
    <div className="flex flex-row align-middle justify-between px-2 sm:px-6 py-2 min-h-[72px]">
 
    <Link href="/" className="xl:min-w-[200px] flex flex-col align-start justify-center">
      <Image src={Logo} width="160" height="220" alt="logo" className="max-w-[100px] sm:max-w-[140px]"/>        
    </Link>




    <div className="hidden xl:flex">
    <MainNavigation/>
    </div>


    <div className="flex flex-row gap-4 xl:min-w-[200px] justify-end">


    <div className="flex gap-4 flex-row align-middle justify-center">



      <div className="flex align-middle justify-center">
      <Button className="hidden  my-auto">Test</Button>
      </div>
      <div className="flex align-middle justify-center">
      <Button className="flex my-auto text-sm sm:text-lg">Contact</Button>
      </div>







    </div>



   <div className="flex xl:hidden flex-col  align-middle justify-center">





   <Sheet>
  <SheetTrigger>
    <Image src={HamburgerIcon} width="40" height="40" alt="Hamburger Menu Icon"/>

  </SheetTrigger>
  <SheetContent className="overflow-y-scroll">
    <SheetHeader className="mb-8">
      <SheetTitle className="text-left mt-4">MIHU Builder</SheetTitle>
      <SheetDescription className="text-left mb-8">
      We are dedicated microfinance institution empowering small businesses and promoting financial inclusion for all.
      </SheetDescription>

    </SheetHeader>

    <div className="mb-4">
    <HeaderAccountDetails/>
    </div>

    <MobileNavigation/>

  </SheetContent>
</Sheet>









    </div>

   </div>


   </div>

    </div>
  )
}

export default Header