"use client";
import Image from "next/image";
import Link from "next/link";
import { MotionUl, MotionLi } from "@/lib/motiondDiv";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/fade-animation";
import Marquee from "react-fast-marquee";


const Partners = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const fadeInUP: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    // <div className=" max-w-full ">
    <>
      {" "}
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
        className=" text-5xl md:text-7xl text-center font-bold md:gap-5 gap-0 md:min-w-[949px] flex items-center  justify-center md:mt-32 mt-28 "
      >
        <motion.h1
          variants={FADE_DOWN_ANIMATION_VARIANTS}
          className="text-secondary p-[2rem] text-[3.5rem]"
        >
          Our <span className="text-primary">Partners</span>
        </motion.h1>
      </motion.div>


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
        }}>
      <motion.div
      variants={FADE_DOWN_ANIMATION_VARIANTS} className=" w-screen md:w-[75%] flex gap-10 text-center md:m-auto items-center justify-center" >
      <Marquee autoFill pauseOnHover pauseOnClick className="gap-10">
        <Link href="https://bscscan.com/" target="_blank">
        <div className="ml-[3rem]">
          <Image src={"/partner1.png"} width={300} height={300} alt="BSC Scan" />
        </div>
        </Link>
        <Link href="https://www.cyberscope.io/" target="_blank">
        <div className="ml-[3rem]">
          <Image src={"/partner2.png"} width={300} height={300} alt="BSC Scan" />
        </div>
        </Link>
        <Link href="https://www.tradingview.com/" target="_blank">
        <div className="ml-[3rem]">
          <Image src={"/partner3.png"} width={300} height={300} alt="BSC Scan" />
        </div>
        </Link>
        <Link href="https://www.blockliz.com/" target="_blank">
        <div className="ml-[3rem]">
          <Image src={"/partner4.png"} width={300} height={300} alt="BSC Scan" />
        </div>
        </Link>
        </Marquee>

      </motion.div>
      </motion.div>
    </>

    // </div>
  );
};

export default Partners;
