"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/fade-animation"

export function About() {

  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (

    <>
<section id="About">
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
      className="mt-[8rem] p-5  text-white  text-2xl md:text-3xl text-left   
      md:mr-[40%] md:ml-[15%] md:w-[25em]"
    >
      <motion.p variants={FADE_DOWN_ANIMATION_VARIANTS}>
        <span>
          At Benefit Mine, we{" "}
          <strong className="text-[#F89B1F]">constantly</strong> strive to
          introduce new idea and{" "}
          <strong className="text-[#F89B1F]">revolutionize</strong> the way our
          users experience cryptocurrency{" "}
          <strong className="text-[#F89B1F]">transactions.</strong> With a focus
          on speed, <strong className="text-[#F89B1F]">efficiency, </strong>and{" "}
          <strong className="text-[#F89B1F]">security,</strong> we leverage
          advanced technology,{" "}
          <strong className="text-[#F89B1F]">collaborate</strong> with reputable
          payment providers, and adhere to strict protocols, ensuring{" "}
          <strong className="text-[#F89B1F]">seamless</strong> and reliable
          transaction processing.
        </span>
      </motion.p>
    </motion.div>
</section>
   
     
    </>

  );
}

export default About;
