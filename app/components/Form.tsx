"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Form = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const fadeInUP: Variants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <div className="hero min-h-[40em]  bg-black ">
      <div className="hero-content flex-col lg:flex-row-reverse  ">
        <motion.div
          ref={ref}
          initial="hidden"
          variants={fadeInUP}
          animate={inView ? "show" : "hidden"}
          className="text-center lg:text-left lg:ml-20 xl:ml-32 "
        >
          <motion.h1
            variants={fadeInUP}
            className="text-3xl sm:text-4xl md:text-5xl text-primary font-semibold "
          >
            STAY UP TO DATE WITH ALL THE LATEST NEWS
          </motion.h1>
          <motion.p
            variants={fadeInUP}
            className="py-6 text-secondary font-sans"
          >
            SIGN UP BELOW TO RECEIVE ALL THE LATEST UPDATES FROM BENEFIT MINE HQ
          </motion.p>
        </motion.div>
        <div className="card shrink-0 w-[15em] md:w-[25em]  flex  max-w-sm shadow-2xl border text-secondary border-primary">
          <form className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-secondary">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-black border-secondary focus:border-primary"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn duration-500 border-primary bg-black text-secondary hover:bg-primary hover:border-primary hover:text-black">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
