"use client";
import React from 'react'
import { Variants, motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/fade-animation";

function Security() {

    const { ref, inView } = useInView({
        triggerOnce: true,
      });

      
  return (
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
    }} className="flex flex-col md:flex-row md:gap-10 gap-5 p-[3rem] items-center justify-center">
    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className=" border-b-2 border-gray-900 backdrop:shadow-xl ">
      <img src="/111.png" alt="1" className='w-[20em] h-[20em]'/>
    </motion.div>
    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS} className="flex flex-col  gap-5 mb-32 md:mt-32">
      <h1 className=" md:text-[2.5rem] text-[1.7rem] font-medium text-secondary text-start">
        Your assets, <strong className="text-[#F89B1F]">secured</strong>
      </h1>
      <span className="text-start text-secondary text-[0.55rem] md:text-[1.1rem]  max-w-[260px] md:max-w-[700px]">
        Audited by the world's leading security firm,
        <strong className="text-[#F89B1F]"> Cyberscope</strong>, we're
        pleased to say that our score of
        <strong className="text-[#F89B1F]"> 9.3/10</strong>, makes us one of
        the safest projects coming to the market this year.
      </span>
    </motion.div>
  </motion.div>
  )
}

export default Security