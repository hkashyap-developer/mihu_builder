"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const locations: { title: string; href: string; description: string }[] = [
 
  {
    title: "Loan Consulting",
    href: "",
    description: "",
  },
  {
    title: "Membership Cards",
    href: "",
    description:
      "",
  },
  {
    title: "Credit Building Subscription",
    href: "",
    description: "",
  },
  {
    title: "Channel Partners",
    href: "",
    description:
      "",
  }
]


const experiences: { title: string; href: string; description: string }[] = [
 
  {
    title: "Tour Packages",
    href: "",
    description: "",
  },
  {
    title: "Weekend Getaways",
    href: "",
    description: "",
  },
  {
    title: "Experiences",
    href: "",
    description:"",
  },  
]



export default function MainNavigation() {
  return (

    <>

    <NavigationMenu>
      <NavigationMenuList className="flex gap-0 xl:gap-8 flex-row">
       

        {/*

        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="text-base">
                About
              </p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>





        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-base">Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="text-base grid w-[400px] gap-3 p-4 md:w-[330px] md:grid-cols-1 lg:w-[330px] ">
              {locations.map((location) => (
                <ListItem
                  key={location.title}
                  title={location.title}
             
                >
                  {location.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>




        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="text-base">
                Contact
              </p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

     */}


      </NavigationMenuList>
    </NavigationMenu>


   

    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"