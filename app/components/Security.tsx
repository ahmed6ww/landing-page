"use client";
import React from 'react'
import { Variants, motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/fade-animation";
import Image from 'next/image'

function Security() {

    const { ref, inView } = useInView({
        triggerOnce: true,
      });

      
  return (
    <section id='Security'>
    <motion.div   ref={ref}
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
    }} className="flex flex-col md:flex-row md:gap-10 gap-6 p-[3rem] items-center justify-center mt-[2rem]">
    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className=" border-b-2 border-gray-900 backdrop:shadow-xl ">
    <video
                    
                   
                    loop
                    muted
                    autoPlay
                    playsInline
                    controls={false}
                    className='w-[25em] h-[25em]'
                    
                  >
                    <source src={"/cyberscope.mp4"} />
                  </video>
    </motion.div>
    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex flex-col  gap-5 mb-32 md:mt-32 relative z-10">
      <h1 className=" md:text-[2.6rem] text-[2rem] font-medium text-secondary text-start">
        Your assets, <strong className="text-[#F89B1F]">secured</strong>
      </h1>
      <span className="text-start text-secondary text-[1rem] md:text-[1.2rem]  max-w-[260px] md:max-w-[700px]">
        Audited by the world's leading security firm,
        <strong className="text-[#F89B1F]"> Cyberscope</strong>, we're
        pleased to say that our score of
        <strong className="text-[#F89B1F]"> 9.3/10</strong>, makes us one of
        the safest projects coming to the market this year.
      </span>
    </motion.div>
  </motion.div></section>
  )
}

export default Security