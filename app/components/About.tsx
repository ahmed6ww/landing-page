"use client"

import { motion } from "framer-motion";

export function About() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
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
    }} className="mt-[8rem] p-5 m-5 text-white md:mt-[2em]  text-3xl text-left md:text-center ">
    <motion.p variants={FADE_UP_ANIMATION_VARIANTS}><span>At Benefit Mine, we <strong className='text-[#F89B1F]'>constantly</strong> strive to introduce new idea and <strong className='text-[#F89B1F]'>revolutionize</strong> the way our users experience cryptocurrency <strong className='text-[#F89B1F]'>transactions.</strong> With a focus on speed, <strong className='text-[#F89B1F]'>efficiency, </strong>and <strong className='text-[#F89B1F]'>security,</strong> we leverage advanced technology, <strong className='text-[#F89B1F]'>collaborate</strong> with reputable payment providers, and adhere to strict protocols, ensuring <strong className='text-[#F89B1F]'>seamless</strong> and reliable transaction processing.</span></motion.p>
</motion.div>
  );
}

  
  export default About