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
    titleHref: "Socials"
  };
  const cardProps2 = {
    title: "Staking",
    para: "Explore our staking, gain and grow your BFM holding.",
    button: "Stake Now",
    href: "https://staking.benefitmine.io",
     titleHref: "Staking"
  };
  const cardProps3 = {
    title: "Earn From Company Income",
    para: "Participate in our token burning mechanism and receive a share of the Exchange Income.",
    button: "Read Whitepaper",
    href: "https://benefitmine-organization.gitbook.io",
    titleHref: "Whitepaper"
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <>
      <section id="/">
    
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
             
              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="  flex justify-center z-0 absolute min-h-screen w-[90%] top-[3rem] md:top-0 left-[-2rem] md:left-0"
              >
                
                <div className="bg-[#2cc4f5]  green blur-[140px] md:blur-[140px] lg:blur-[140px] rounded-full absolute h-[14em] w-[14em] md:h-[14em] md:w-[14em] lg:h-[14em] lg:w-[14em] "></div>

              </motion.div>

              <motion.div
                variants={FADE_DOWN_ANIMATION_VARIANTS}
                className="  flex justify-center z-0 absolute min-h-screen w-[30%] top-[16rem] md:top-0  ml-[0rem]"
              >
               
                <div className=" bg-[#f89b1c] green blur-[140px] md:blur-[140px] lg:blur-[140px] rounded-full absolute h-[14em] w-[14em] md:h-[14em] md:w-[14em] lg:h-[14em] lg:w-[14em] "></div>

              </motion.div>




              <div className="z-10">
                <motion.h1
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  className="text-secondary text-[2.5rem] mr-[1rem] ml-[1rem] md:text-[4rem] z-10"
                >
                  The Home of{" "}
                  <span className="text-[2.9rem] md:text-[4rem] text-[#f89b1f] ">
                    Benefit Mine
                  </span>
                </motion.h1>
              </div>
              <div className="z-10">
                <motion.p
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  className="text-[#f89b1f]  text-center text-sm md:text-2xl mt-4 md:mt-2 "
                >
                  Your Business
                  <span className="text-secondary"> Our Responsibility</span>
                </motion.p>
              </div>
              <div>
              

                <motion.a
                  variants={FADE_DOWN_ANIMATION_VARIANTS}
                  href="#Signup"
                  className="mt-8 md:mt-4 relative inline-flex items-center justify-start px-8 py-3 overflow-hidden font-bold rounded-full group"
                >
                  <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-primary opacity-100 group-hover:-translate-x-8"></span>
                  <span className="relative w-full text-left text-secondary transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                    Sign Up
                  </span>
                  <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
                </motion.a>
              </div>
            </motion.div>
            {/* Second Heading */}
            <div className="text-[0.9rem] mt-[-1rem]  flex font-bold text-center justify-center">
           
            </div>
          </div>

          {/* Cards */}
       
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[7em]   ">
            <Card one={cardProps1} />
            <Card one={cardProps2}  />
            <div className="md:col-span-2 flex justify-center xl:col-span-1">
              <Card one={cardProps3}  />
            </div>
          </div>
        </div>
  
      </section>
    </>
  );
}
