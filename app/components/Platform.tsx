"use client";

import Link from "next/link";
import { platfrom } from "../Data";
import { openSans } from "@/lib/fonts"
import { Variants, motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/fade-animation";
import Image from 'next/image'

function Platform() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const fadeInUP: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 1.15,
      },
    },
  };
  return (
    <>
   <section id="Platform">
      <div className="min-h-screen mx-auto flex flex-col items-center ">
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
          className=" text-[3rem] font-bold md:gap-5 gap-0 text-center justify-center md:mt-32 mt-28 "
        >
          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-white text-[3.5rem]"
          >
            Platform <span className="text-[#F89B1F]">Offerings</span>
          </motion.h1>
        </motion.div>

        

        <motion.div
          ref={ref}
          initial="hidden"
          variants={fadeInUP}
          animate={inView ? "show" : "hidden"}
          className="flex flex-col m-4 p-8 mt-[1rem]"
        >
          {platfrom.map((cont, index) => {
            return (
              <>
                <motion.div
                  variants={fadeInUP}
                  className="flex flex-col md:flex-row gap-10  max-w-6xl mt-[6rem] p-4 md:even:flex-row-reverse md:even:text-start  items-center justify-center "
                >
                   <video
                    
                    style={{ width: "300px", height: "250px",}}
                    loop
                    muted
                    autoPlay
                    playsInline
                    controls={false}
                    
                  >
                    <source src={cont.video} />
                  </video>
                    
                  
                  <div className="flex flex-col w-80%] md:w-[40%] ">
                    <h3 className="text-[2rem] mt-2 font-bold text-primary">
                      {cont.label}
                    </h3>
                    <p className={`${openSans.className} font-medium text-[0.9rem] mt-4 text-secondary leading-6`}>
                      {cont.content}
                    </p>
                    <div>
                    <motion.a
                    variants={FADE_DOWN_ANIMATION_VARIANTS}  href={cont.href} target="_blank" className="mt-8 md:mt-6 relative inline-flex items-center justify-start px-7 py-3 overflow-hidden font-bold rounded-full group">
<span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
<span className="absolute top-0 left-0 w-[16rem] h-48 -mt-1 transition-all duration-2000 ease-in-out rotate-45 -translate-x-96 -translate-y-24 bg-primary  group-hover:-translate-x-8"></span>
<span className="relative w-full text-left font-medium text-[0.8rem] text-secondary transition-colors duration-2000 ease-in-out group-hover:text-gray-900">{cont.button}</span>
<span className="absolute inset-0 border-1 border-primary rounded-full"></span>
</motion.a>
                    </div>
                  </div>
                </motion.div>
              </>
            );
          })}
        </motion.div>
      </div>
    </section>
    </>
  );
}

export default Platform;
