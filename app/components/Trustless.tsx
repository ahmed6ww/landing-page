"use client";
import React from "react";
import { BackgroundGradient } from "@/lib/background-gradient";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/fade-animation";
import data from "@/app/securityData.json";

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
  interface FeaturedData {
    id: number;
    title: string;
    description: string;
    isFeatured: boolean;
  }
  const featuredData = data.courses.filter(
    (course: FeaturedData) => course.isFeatured
  );

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col items-center ">
      {/* Text */}
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
     }} className="flex flex-col md:flex-row items-center  text-[33px] md:text-[65px]  font-bold md:gap-5 gap-0 md:min-w-[949px] text-center justify-center md:mt-32 mt-28 ">
        {/* <h1 className="text-[3rem] text-white">Trustless </h1>
        <h1 className="text-[2rem]">And </h1>
        <h2 className="text-[3rem] text-[#f89b1f] ">Transparent</h2> */}
        <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-white p-1 text-[3.014rem]">
            Trustless & <span className="text-[#F89B1F]">Transparent</span>
          </motion.h1>
      </motion.div>
      {/* Cards       */}
      <motion.div
        ref={ref}
        initial="hidden"
        variants={fadeInUP}
        animate={inView ? "show" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-content-center place-items-center ml-1 mr-1 mt-16">
          {featuredData.map((course: FeaturedData) => (
            <div key={course.id} className="flex justify-center items-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-[250px] w-[200px] max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col items-center text-center  flex-grow ">
                  <p className="text-lg sm:text-xl text-black mt-4 mb-4  dark:text-neutral-200 pl-8 pr-8">
                    {course.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                    {course.description}
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </motion.div>
      {/* Message */}
      {/* <div className="flex flex-col md:flex-row md:gap-10 gap-5 items-center justify-center">
        <div className=" border-b-2 border-gray-900 backdrop:shadow-xl ">
          <img src="/111.png" alt="1" />
        </div>
        <div className="flex flex-col  gap-5 mb-32 md:mt-32">
          <h1 className=" md:text-[2.5rem] text-[1.7rem] font-medium text-secondary text-start">
            Your assets, secured
          </h1>
          <span className="text-start text-secondary text-[0.75rem] md:text-[1.2rem]  max-w-[260px] md:max-w-[750px]">
            Audited by the world's leading security firm,
            <strong className="text-[#F89B1F]"> Cyberscope</strong>, we're
            pleased to say that our score of
            <strong className="text-[#F89B1F]"> 9.3/10</strong>, makes us one of
            the safest projects coming to the market this year.
          </span>
        </div>
      </div> */}
    </div>
  );
}

