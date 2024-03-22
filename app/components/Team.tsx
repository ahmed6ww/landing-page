"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/fade-animation";

export default function Trustless() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const fadeInUP: Variants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,

      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section id="Team">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >


<div
                
                className="  flex justify-center z-0 absolute min-h-screen w-[90%] top-[150rem]  md:top-[120rem] left-[-2rem] md:left-0"
              >
                
                <div className="bg-[#f89b1c]    green blur-[120px] md:blur-[160px] rounded-full absolute h-[7em] w-[7em]  md:h-[15em] md:w-[15em]"></div>

              </div>

              <div
                
                className="  flex justify-center z-0 absolute min-h-screen w-[30%] top-[175rem]  md:top-[105rem] ml-[5rem] md:ml-[-16rem]"
              >
               
                <div className=" bg-[#2cc4f5]  green blur-[120px] md:blur-[160px]   rounded-full absolute h-[7em] w-[7em]  md:h-[15em] md:w-[15em]"></div>

              </div>

{/*           */}

<div
                
                className="  flex justify-center z-0 absolute min-h-screen w-[90%] top-[235rem]  md:top-[150rem] left-[-2rem] md:left-0"
              >
                
                <div className="bg-[#2cc4f5]   green blur-[120px] md:blur-[160px] rounded-full absolute h-[7em] w-[7em]  md:h-[15em] md:w-[15em]"></div>

              </div>

              <div
                
                className="  flex justify-center z-0 absolute min-h-screen w-[30%] top-[205rem]  md:top-[135rem] ml-[5rem] md:ml-[-16rem]"
              >
               
                <div className=" bg-[#f89b1c]  green blur-[120px] md:blur-[160px]   rounded-full absolute h-[7em] w-[7em]  md:h-[15em] md:w-[15em]"></div>

              </div>

{/*      */}

<div
                
                className="  flex justify-center z-0 absolute min-h-screen w-[90%] top-[265rem] md:top-[190rem] left-[-2rem] md:left-0"
              >
                
                <div className="bg-[#f89b1c]    green blur-[120px] md:blur-[160px] rounded-full absolute h-[7em] w-[7em]  md:h-[15em] md:w-[15em]"></div>

              </div>

              <div
                
                className="  flex justify-center z-0 absolute min-h-screen w-[30%] top-[308rem]  md:top-[180rem] ml-[5rem] md:ml-[-16rem]"
              >
               
                <div className=" bg-[#2cc4f5]  green blur-[120px] md:blur-[160px]   rounded-full absolute h-[7em] w-[7em]  md:h-[15em] md:w-[15em]"></div>

              </div>


{/*         team    */}


<div
                
                className="  flex justify-center z-0 absolute min-h-screen w-[90%] top-[365rem] md:top-[230rem] left-[-2rem] md:left-0"
              >
                
                <div className="bg-[#2cc4f5]    green blur-[120px] md:blur-[160px] rounded-full absolute h-[7em] w-[7em]  md:h-[15em] md:w-[15em]"></div>

              </div>

              <div
                
                className="  flex justify-center z-0 absolute min-h-screen w-[30%] top-[340rem]  md:top-[220rem] ml-[5rem] md:ml-[-16rem]"
              >
               
                <div className=" bg-[#f89b1c]  green blur-[120px] md:blur-[160px]   rounded-full absolute h-[7em] w-[7em]  md:h-[15em] md:w-[15em]"></div>

              </div>


{/*         security    */}


<div
                
                className="  flex justify-center z-0 absolute min-h-screen w-[90%] top-[385rem] md:top-[270rem] left-[-2rem] md:left-0"
              >
                
                <div className="bg-[#f89b1c]    green blur-[120px] md:blur-[140px] rounded-full absolute h-[7em] w-[7em]  md:h-[10em] md:w-[10em]"></div>

              </div>

              <div
                
                className="  flex justify-center z-0 absolute min-h-screen w-[30%] top-[406rem]  md:top-[260rem] ml-[5rem] md:ml-[-16rem]"
              >
               
                <div className=" bg-[#2cc4f5]  green blur-[120px] md:blur-[160px]   rounded-full absolute h-[7em] w-[7em]  md:h-[10em] md:w-[10em]"></div>

              </div>




        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6 mb-4 relative z-10">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16 font-bold md:gap-5 gap-0 text-center justify-center  mt-25 ">
            <motion.h1
              variants={FADE_DOWN_ANIMATION_VARIANTS}
              className="text-secondary text-[3.5rem] font-bold z-10"
            >
              Our <span className="text-[#F89B1F]">Team</span>
            </motion.h1>
          </div>
          <motion.div
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="flex flex-col  items-center justify-center  md:mt-31 gap-[2.5rem] md:gap-[5rem] "
          >

            <div className="flex md:flex-row flex-col gap-10 md:gap-[20rem] z-11">
              <div className="text-center text-secondary">
                <img
                  className="mx-auto mb-4 w-40 h-40 rounded-full border-2 "
                  src={"/team1.jpg"}
                  alt="Bonnie Av/atar"
                />
                <h3 className="mb-1 text-2xl flex flex-col font-bold tracking-tight text-primary">
                  <a href="#">Jason Alan <span>Goldberg</span> </a>
                </h3>
                <p>CEO</p>
              </div>
              <div className="text-center text-secondary">
                <img
                  className="mx-auto mb-4 w-40 h-40 rounded-full border-2 "
                  src={"/team2.jpg"}
                  alt="Helene A/vatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary">
                  <a href="#">Helen Tek</a>
                </h3>
                <p>CIO</p>
              </div>
              
            </div>

            <div className="flex flex-col md:flex-row gap-10 md:gap-[20rem] ">
              <div className="text-center text-secondary md:w-[16.22rem]">
                <img
                  className="mx-auto mb-4 w-40 h-40 rounded-full border-2 "
                  src={"/team4.jpg"}
                  alt="Taufique"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary ">
                  <a href="#">Taufique</a>
                </h3>
                <p>CTO</p>
              </div>

              <div className="text-center text-secondary">
                <img
                  className="mx-auto mb-4 w-40 h-40 rounded-full border-2 "
                  src={"/team3.jpg"}
                  alt="Jese Avatar"
                />
                <h3 className="mb-1 text-2xl font-bold tracking-tight text-primary">
                  <a href="#">Wex Lathar</a>
                </h3>
                <p>CMO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
