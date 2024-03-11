import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { montserrat } from "@/lib/fonts"


const inter = Inter({ subsets: ["latin"] });
import {Providers} from "./providers";



export const metadata: Metadata = {
  title: "Benefit Mine",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-black overflow-x-hidden`}>
        <Providers>
    
        {children}</Providers></body>
    </html>
  );
}
