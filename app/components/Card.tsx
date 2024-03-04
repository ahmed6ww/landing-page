"use client";
import React from "react";
import { PinContainer } from "@/app/components/ui/3d-pin";
import { motion } from "framer-motion";
import { openSans } from "@/lib/fonts"
import { useInView } from "react-intersection-observer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/fade-animation";

export default function Card({ one }: any) {

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <motion.div ref={ref}
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
    }} className=" flex items-center rounded-xl justify-center p-8">
      <PinContainer title={one.href} href={one.href}>
        <motion.div
         variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="card w-[16em] h-[17em] sm:w-[20em] sm:h-[19em] rounded-xl shadow-xl border border-primary ">
          {/* Other card content */}
          <motion.div 
            className="card-body items-center text-center justify-center">
            <h2 className="card-title text-[1.5rem] text-secondary">{one.title}</h2>
            <p className={`${openSans.className} text-[13px] w-[17em] mt-5 text-secondary`}>{one.para}</p>
            <div className="card-actions">
              <button className="btn bg-primary text-black border-black hover:text-white w-[12em] font-sans font-medium hover:bg-black hover:border-[#f89b1f] rounded-full h-[32px] ">
                {one.button}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </PinContainer>
    </motion.div>
  );
}
