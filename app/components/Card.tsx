"use client";
import React from "react";
import { PinContainer } from "@/app/components/ui/3d-pin";
import { motion } from "framer-motion";

export default function Card({ one }: any) {
  return (
    <motion.div className=" flex items-center rounded-xl justify-center p-8">
      <PinContainer title={one.href} href={one.href}>
        <motion.div className="card w-[16em] h-[17em] sm:w-[20em] sm:h-[19em] rounded-xl shadow-xl border border-primary ">
          {/* Other card content */}
          <div className="card-body items-center text-center justify-center">
            <h2 className="card-title text-[1.5rem]">{one.title}</h2>
            <p className="text-[13px] w-[17em] mt-5">{one.para}</p>
            <div className="card-actions">
              <button className="btn bg-primary text-black border-black hover:text-white w-[12em] font-sans font-medium hover:bg-black hover:border-[#f89b1f] rounded-full h-[32px] ">
                {one.button}
              </button>
            </div>
          </div>
        </motion.div>
      </PinContainer>
    </motion.div>
  );
}
