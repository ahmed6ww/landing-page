"use client";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

import Card from "@/app/components/Card";
import { title } from "process";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/fade-animation";
import Link from "next/link";

export default function Hero() {
  const cardProps1 = {
    title: "Socials",
    para: "Join our socials to stay updated on the latest project news and developments!",
    button: "Join Now",
    href: "https://linktr.ee/BenefitMine",
  };
  const cardProps2 = {
    title: "Testnet",
    para: "Explore our platform, gain experience, and practice trading risk-free.",
    button: "Start Now",
    href: "https://testnet.benefitmine.io",
  };
  const cardProps3 = {
    title: "Earn From Company Income",
    para: "Participate in our token burning mechanism and receive a share of the Exchange Income.",
    button: "Read Whitepaper",
    href: "https://benefitmine-organization.gitbook.io",
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <section id="/" className="z-2">
      {/* <BackgroundGradientAnimation className="h-[10rem]"> */}
        <div className="min-h-screen min-w-screen text-white overflow-x-hidden z-10">
          {/* text */}
          <div>
            {/* First heading */}
            <motion.div
              initial="hidden"
              animate="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
              className="flex flex-col  font-bold md:gap-5 gap-0  text-center justify-center md:mt-32 mt-28 "
            >
              {/* <h1 className="text-[2rem] md:text-[4rem]">The Home of</h1>
            <h2 className="text-[2.8rem] md:text-[4rem] text-[#f89b1f] ">
              {" "}
              Benefit Mine
            </h2> */}
              <motion.h1
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="text-secondary text-[2.5rem] mr-[1rem] ml-[1rem] md:text-[4rem]"
              >
                The Home of{" "}
                <span className="text-[2.9rem] md:text-[4rem] text-[#f89b1f]">
                  Benefit Mine
                </span>
              </motion.h1>
              <div>
                <motion.p
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  className="text-[#f89b1f]  text-center text-sm md:text-2xl mt-4 md:mt-2"
                >
                  Your Business
                  <span className="text-secondary"> Our Responsibility</span>
                </motion.p>
              </div>
              <div>
                {/* <Link href="https://presale.benefitmine.io/" target="_blank">
                  <motion.button
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className=" relative inline-flex mt-6 md:mt-4 h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffcc00_0%,#EBECF0_50%,#f89b1f_100%)] " />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-[1.5rem] py-[1rem] md:text-[1rem] text-[0.8rem]  text-white backdrop-blur-3xl font-semibold">
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
                  </motion.button>
                </Link> */}
    <motion.a
                    variants={FADE_DOWN_ANIMATION_VARIANTS} href="https://presale.benefitmine.io/" target="_blank" className="md:mt-5 mt-9 relative inline-flex items-center px-11 py-3 overflow-hidden text-lg font-medium text-secondary border-2 border-primary rounded-full hover:text-black group hover:bg-black
    ">
<span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease
 bg-gradient-to-br from-[#ff8a05] via-primary to-[#633a02] group-hover:from-[#ffddad] group-hover:via-primary group-hover:to-[#8a5102] 
"></span>
<span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease

">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span className="relative font-medium">BUY $BFM</span>
</motion.a>













              </div>
            </motion.div>
            {/* Second Heading */}
            <div className="text-[0.9rem] mt-[-1rem]  flex font-bold text-center justify-center">
              {/* <h1 className="text-[#f89b1f]">Your Business</h1>
          <h2 className=" ">Our Responsibility</h2> */}
              {/* <TypewriterEffectSmoothDemo /> */}
            </div>
          </div>

          {/* Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 place-items-center mt-20 "> */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[7em]   ">
            <Card one={cardProps1} />
            <Card one={cardProps2} />
            <div className="md:col-span-2 flex justify-center xl:col-span-1">
              <Card one={cardProps3} />
            </div>
          </div>
        </div>
        {/* </BackgroundGradientAnimation> */}
      </section>
    </>
  );
}
