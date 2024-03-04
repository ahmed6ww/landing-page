"use client";
import React, { useState } from "react";
import { Variants, motion } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/fade-animation"

const Accordion = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section className=" overflow-x-hidden relative z-20 mt-40 bg-black  dark:bg-dark  ">
      <div className=" flex flex-col items-center justify-center">
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

        <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS}  className="mb-2 block text-[3rem] font-bold text-primary">
          FAQ ' S
        </motion.h1>
        </motion.div>

        <div className=" mt-20  md:gap-20 flex flex-col md:flex-row duration-1000 ease-in-out ">
          <div className="">
            <AccordionItem
              header="What is Benefit Mine?"
              text="Benefit Mine is a leading cryptocurrency exchange platform that offers secure, transparent, and reliable services for trading various types of cryptocurrencies. Our platform aims to provide a user-friendly environment for both beginner and experienced traders to buy, sell, and trade digital assets."
            />
            <AccordionItem
              header="How do I verify my account?"
              text="
              To verify your account, you'll need to provide some identification documents. This process, known as Know Your Customer (KYC), helps us maintain a safe and secure trading environment. Simply follow the steps outlined in the verification section of your account dashboard."
            />
            <AccordionItem
              header="What if I need help or have more questions?"
              text="
              Our support team is available 24/7 to assist you. You can reach us via the Contact Us page. For common issues, we recommend checking our comprehensive Help Center, where you'll find guides and articles to help you navigate the platform."
            />
            <AccordionItem
              header="What are the fees on Benefit Mine?"
              text="
              Benefit Mine aims to maintain competitive and transparent fee structures. Fees vary depending on the type of transaction (e.g., trading, deposit, withdrawal). You can find a detailed breakdown on our Fees and Charges page."
            />
            <AccordionItem
              header="Which cryptocurrencies can I trade on Benefit Mine?"
              text="
              To deposit or withdraw, navigate to your account dashboard and click on the Deposit or Withdraw button. Follow the instructions provided. Please note that withdrawal times can vary depending on the cryptocurrency."
            />
          </div>
          <div className="mb-20">
            <AccordionItem
              header="How do I deposit and withdraw funds?"
              text="
              To deposit or withdraw, navigate to your account dashboard and click on the Deposit or Withdraw button. Follow the instructions provided. Please note that withdrawal times can vary depending on the cryptocurrency."
            />
            <AccordionItem
              header="How secure is Benefit Mine?"
              text="
              At Benefit Mine, we prioritize the security of your funds and personal information. We use state-of-the-art security measures, including advanced encryption techniques, two-factor authentication (2FA), and regular audits to ensure your data's safety."
            />
            <AccordionItem
              header="How do I create an account on Benefit Mine?
              "
              text="Creating an account is simple! Click on the Register button on our homepage, fill in your details including your email and a strong, unique password. Once done, you will receive a confirmation email to verify your account. Please make sure to check your spam folder if you don't see it in your inbox.
              "
            />
            <AccordionItem
              header="Does Benefit Mine have a mobile app?"
              text="
              Yes, we do! Our mobile app is available for download on both Android and iOS devices. It allows you to manage your assets, make trades, and get real-time market updates on the go."
            />
            <AccordionItem
              header="Can I access Benefit Mine from any country?"
              text="
              While Benefit Mine is accessible globally, there might be restrictions in certain jurisdictions due to local regulations. Please check our Terms and Conditions for the list of supported countries."
            />
          </div>
        </div>
      </div>

      {/* <div className="absolute md:top-40 z-[-2] md:left-0 bottom-0">
        <svg
          width="1240"
          height="426"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }: any) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event:any) => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 md:w-[428px]  w-[300px] rounded-lg bg-[#161616] hover:bg-black p-3 hover:border-primary hover:border  hover:duration-1000 hover:ease-in  shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)]  ">
      <div className="flex flex-col items-center justify-center ">
        <button
          className={`faq-btn flex items-center w-full text-left `}
          onClick={(e) => handleToggle(e)}
        >
          <div className="mr-5 flex h-7 w-full max-w-[30px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
            <svg
              className={`fill-primary stroke-primary duration-300 ease-in-out ${
                active ? "rotate-180" : ""
              }`}
              width="17"
              height="10"
              viewBox="0 0 17 10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z" />
            </svg>
          </div>

          <div className=" text-secondary">
            <h4 className="mt-1 text-[0.8rem] font-semibold text-dark dark:text-white max-w-[600px]  ">
              {header}
            </h4>
          </div>
        </button>

        <div
          className={`pl-[51px]  ${
            active ? "block" : "hidden"
          }`}
        >
          <p className="py-3 text-[0.7rem] duration-1000 ease-in-out  leading-relaxed text-body-color dark:text-dark-6 ">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};
