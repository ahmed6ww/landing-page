"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useFormik } from "formik";
import * as Yup from "yup";
const Form = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      // Do something with the form values, like submitting to a server
      formik.resetForm();
      // Reset form and set the next `initialValues` of the form

      // Open the modal after the form is successfully submitted
      onOpen();
    },
  });

  return (
    <section id="Signup">
      <div className="hero min-h-[40em]  bg-transparent ">
        <div className="hero-content flex-col lg:flex-row-reverse  ">
        

            
<div className="  flex justify-center z-10 absolute min-h-screen w-[90%] top-[714rem] sm:top-[502rem]  md:top-[450rem] left-[-2rem] md:left-0">
              <div className="bg-[#f89b1c]    green blur-[140px]  sm:blur-[140px] md:blur-[160px] rounded-full absolute h-[12em] w-[12em]  md:h-[14em] md:w-[14em]"></div>
            </div>

            <div className="  flex justify-center z-10 absolute min-h-screen w-[0%] top-[700rem] sm:top-[505rem] md:top-[460rem] ml-[5rem] md:ml-[-16rem]">
              <div className=" bg-[#2cc4f5]  green blur-[140px] sm:blur-[140px] md:blur-[160px]   rounded-full absolute h-[12em] w-[12em]  md:h-[14em] md:w-[14em]"></div>
            </div>
            
{/*      2         */}

            <div className="  flex justify-center z-10 absolute min-h-screen w-[90%] top-[784rem] sm:top-[502rem]  md:top-[506rem] left-[-2rem] md:left-0">
              <div className="bg-[#2cc4f5]    green blur-[140px]  sm:blur-[140px] md:blur-[150px] rounded-full absolute h-[12em] w-[12em]  md:h-[18em] md:w-[18em]"></div>
            </div>

            <div className="  flex justify-center z-10 absolute min-h-screen w-[0%] top-[760rem] sm:top-[505rem] md:top-[510rem] ml-[5rem] md:ml-[-16rem]">
              <div className=" bg-[#f89b1c]  green blur-[140px] sm:blur-[140px] md:blur-[150px]   rounded-full absolute h-[12em] w-[12em]  md:h-[18em] md:w-[18em]"></div>
            </div>

  <motion.div
            ref={ref}
            initial="hidden"
            variants={fadeInUP}
            animate={inView ? "show" : "hidden"}
            className="text-center lg:text-left lg:ml-20 xl:ml-32 "
          >
            <motion.h1
              variants={fadeInUP}
              className="text-3xl sm:text-4xl md:text-5xl text-primary font-semibold relative z-10"
            >
              STAY UP TO DATE WITH ALL THE LATEST NEWS
            </motion.h1>
            <motion.p
              variants={fadeInUP}
              className="py-6 text-secondary font-sans relative z-10"
            >
              SIGN UP BELOW TO RECEIVE ALL THE LATEST UPDATES FROM BENEFIT MINE
              HQ
            </motion.p>
          </motion.div>
          <div className="card shrink-0 w-[15em] xs:w-[20em]  md:w-[25em]  flex  max-w-sm shadow-2xl border text-secondary border-primary relative z-10">
            <form className="card-body" onSubmit={formik.handleSubmit}>
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text text-secondary">Email</span>
                </label>
                <input
                  className="input input-bordered bg-black border-secondary focus:border-primary"
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="mt-2 text-red-600">{formik.errors.email}</div>
                ) : null}
              </div>

              <div className="form-control mt-6">
                <Button
                  type="submit"
                  className="bg-black h-12 text-white border border-r-1 border-primary"
                >
                  Register
                </Button>
              </div>
            </form>
            <Modal
              backdrop="blur"
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              radius="lg"
              classNames={{
                body: "py-6",
                backdrop: "bg-primary/10 backdrop-opacity-20",
                base: "border-black bg-black dark:bg-[#19172c] text-[#a8b0d3]",
                header: "",
                footer: "border-t-[1px] border-[#292f46]",
                // closeButton: "hover:bg-white/5 active:bg-primary/50",
              }}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-3"></ModalHeader>
                    <ModalBody>
                      <p>
                        Thank you for registering your email! We'll keep you
                        informed about any exciting news and updates.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        className="bg-primary shadow-lg shadow-indigo-500/20"
                        onPress={onClose}
                      >
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
