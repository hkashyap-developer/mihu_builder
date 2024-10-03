import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
