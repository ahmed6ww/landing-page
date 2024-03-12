"use client";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
const Navbar = () => {
  const navlinks = {
    mainnav: [
      {
        label: "Home",
        href: "#/",
      },
      {
        label: "About",
        href: "#About",
      },
      {
        label: "Platform Offering",
        href: "#Platform",
      },
      {
        label: "How it Works",
        href: "#Trustless",
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
    ],
    socials: [
      {
        label: "Team",
        href: "https://benefitmine.io/Team.html",
      },
      {
        label: "View Whitepaper",
        href: "https://benefitmine-organization.gitbook.io/benefit-mine-whitepaper-vol-1/",
      },
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
    const navbar = document.querySelector('.navbar') as HTMLElement | null;
    if (element && navbar) {
      const navbarHeight: number = navbar.offsetHeight;
      const offsetTop: number = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };
  return (
    <>
      <div className="navbar  drop-shadaow p-5 text-secondary sticky top-0 z-[1000] bg-black">
        <div className="navbar-start bg-black">
          <div className="dropdown bg-black">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              {navlinks.mainnav.map((link) => {
                return (
                  <li>
                    <a onClick={() => scrollToSection(link.href)}>{link.label}</a>
                  </li>
                );
              })}

              <li>
                <details>
                  <summary>Socials</summary>
                  <ul className="p-2">
                    {navlinks.socials.map((link) => {
                      return (
                        <li>
                          <Link href={link.href} target="_blank">{link.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </details>
              </li>
            </ul>
          </div>
          <div>
            <Image src="/logo.png" width={220} height={40} alt="Benefit Mine" />
          </div>
        </div>
        <div className="navbar-center  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks.mainnav.map((link) => {
              return (
                <li>
                  <a onClick={() => scrollToSection(link.href)}>{link.label}</a>
                </li>
              );
            })}

            <li>
              <details className="">
                <summary>Socials</summary>
                <ul className="p-2 bg-black ">
                  {navlinks.socials.map((link) => {
                    return (
                      <li>
                        <Link href={link.href} target="_blank">
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffcc00_0%,#EBECF0_50%,#f89b1f_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-3 py-1 text-[0.8rem] font-light text-white backdrop-blur-3xl">
              BUY $BFM
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
          </button>
          {/* <a className="btn ">Sign Up</a> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
