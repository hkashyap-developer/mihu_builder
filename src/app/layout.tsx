import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";

import Header from "@/components/customComponents/Header/Header";
import Footer from '@/components/customComponents/Footer/Footer';
import MainSidebar from "@/components/customComponents/MainSidebar/MainSidebar";

const InknutAntiquaSemiBold = localfont({
  src: [
    {
    path: "../../public/fonts/Sahitya-Bold.ttf",
    weight: "700",
    }
  ], 
  variable: "--font-InknutAntiqua-SemiBold",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InknutAntiquaSemiBold.variable}`}
      >




      <div className="">
      <Header />

      <div className="flex flex-column bg-slate-50">
        <div className="mt-24 p-4 min-w-[260px]">
          <div className="fixed top-20">
            <MainSidebar />
          </div>
        </div>

        <div className="mt-[72px] p-4 w-full bg-white rounded-2xl">
            {children}
        </div>
      </div>

      <Footer />
    </div>




      </body>
    </html>
  );
}
