"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, ButtonGroup } from "@nextui-org/react";
import { useRef, useState, useEffect } from "react";
const Navbar = () => {
  const navlinks = {
    mainnav: [
      {
        label: "About",
        href: "#About",
      },
      {
        label: "Platform Offering",
        href: "#Platform",
      },
      {
        label: "Our Team",
        href: "#Team",
      },
      {
        label: "Security",
        href: "#Security",
      },
      {
        label: "Roadmap",
        href: "#Roadmap",
      },
      {
        label: "FAQ's",
        href: "#Faqs",
      },
      {
        lalel: "Whitepaper",
        href: "https://benefitmine-organization.gitbook.io/benefit-mine-whitepaper-vol-1",
      },
    ],
    socials: [
      {
        label: "Twitter",
        href: "https://twitter.com/benefitmine",
      },
      {
        label: "Discord",
        href: "https://discord.com/invite/BenefitMine",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/benefitmine_official/",
      },
      {
        label: "Telegram",
        href: "https://t.me/benefitmine_official",
      },
    ],
  };

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id.substring(1));
    const navbar = document.querySelector(".navbar") as HTMLElement | null;
    if (element && navbar) {
      const navbarHeight: number = navbar.offsetHeight;
      const offsetTop: number = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="navbar drop-shadaow md:p-5 p-2 h-[1rem]  text-secondary sticky top-0 z-[1000] bg-black">
        <div className="navbar-start  bg-black">
          <div className="dropdown bg-black">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" bg-black menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              <li></li>
              {navlinks.mainnav.map((link) => {
                return (
                  <li>
                    <a onClick={() => scrollToSection(link.href)}>
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="cursor-pointer">
            <a onClick={() => scrollToSection("#/")}>
              <Image
                src="/logo.png"
                width={220}
                height={40}
                alt="Benefit Mine"

              />
            </a>
          </div>
        </div>
        <div className="navbar-center  hidden xl:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                href="https://benefitmine-organization.gitbook.io/benefit-mine-whitepaper-vol-1"
                target="_blank"
              >
                Whitepaper
              </Link>
            </li>
            {navlinks.mainnav.map((link) => {
              return (
                <li>
                  <a onClick={() => scrollToSection(link.href)}>{link.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-end gap-4">
       
          
            {/* <button className="relative  md:flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={()=>scrollToSection("#Signup")}>
              <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffcc00_0%,#EBECF0_50%,#f89b1f_100%)] rounded-full" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-[0.8rem] font-light text-white backdrop-blur-3xl">
              Sign Up
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-[0.25rem] w-5 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </button> */}


            
     
      
   

<a
     href="https://presale.benefitmine.io/" target="_blank" className=" relative inline-flex items-center px-[1.5rem] md:px-[2rem]  py-[0.1rem] md:py-[0.4rem] overflow-hidden text-lg font-medium text-secondary border-2 border-primary rounded-full hover:text-black group hover:bg-black
    ">
<span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease
 bg-gradient-to-br from-[#ff8a05] via-primary to-[#633a02] group-hover:from-[#ffddad] group-hover:via-primary group-hover:to-[#8a5102] 
"></span>
<span className="absolute right-0 flex items-center justify-start w-5 md:w-7 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease
">
<svg className="w-4 md:w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative font-bold text-[0.7rem] md:text-[0.9rem]  ">BUY $BFM</span>
</a>


          
      
        </div>
      </div>
    </>
  );
};

export default Navbar;
