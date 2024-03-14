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
                  <Image
                    
                    style={{ marginInline:"80px", width: "300px", height: "170px",}}
                    
                    width={300}
                    height={170}
                    alt="videos"
                    
                     src={cont.video} 
                    
                  />
                    
                  
                  <div className="flex flex-col w-80%] md:w-[40%] ">
                    <h3 className="text-[2rem] mt-2 font-bold text-primary">
                      {cont.label}
                    </h3>
                    <p className={`${openSans.className} font-medium text-[0.9rem] mt-4 text-secondary leading-6`}>
                      {cont.content}
                    </p>
                    <div>
                    <Link href={cont.href} target="_blank">
                      <button className="btn bg-black text-secondary border-primary mt-7 hover:text-black w-[14em] font-sans font-medium hover:bg-primary hover:border-[#f89b1f] rounded-full h-[32px] duration-500">
                        {cont.button}
                      </button>
                      </Link>
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
