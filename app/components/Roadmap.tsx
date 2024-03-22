"use client";
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "@/app/components/ui/TimelineElement";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/fade-animation";

export default function Roadmap() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  type Phase = {
    title: string;
    points: string[];
  };

  const phases: Phase[] = [
    {
      title: "PHASE 1 (Completed)",
      points: [
        "Create social channels to promote BenefitMine (BFM) project.",
        "Develop the project whitepaper outlining its objectives and features.",
        "Mint 1,000,000,000 BFM tokens and conduct an audit of the token to ensure its integrity.",
        "Build a team with expertise in blockchain technology, trading, compliance, and marketing.",
      ],
    },
    {
      title: "PHASE 2 (Completed)",
      points: [
        "Develop a detailed project plan and allocate resources.",
        "Begin the development of the BFM Payment Gateway.",
        "Begin the development of Centralized Exchange (CEX) V1 with peer-to-peer, Spot, and over-the-counter trading functionalities.",
      ],
    },
    {
      title: "PHASE 3 (Completed)",
      points: [
        "Test and optimize the platform's performance, including speed, scalability, and uptime.",
        "Launch new BFM token website.",
        "Launch CEX V1 and unveil CEX demo version (trade on live price with non-real assets).",
        "Develop CEX share profit section.",
      ],
    },
    {
      title: "PHASE 4 (Completed)",
      points: [
        "Conduct a 1,000,000 BFM token airdrop to the private Telegram community.",
        "Launch a private sale of tokens of the core community and supporters.",
        "Freeze 50% of the tokens for two years to create scarcity and enhance value.",
        "Launch a token offering platform for initial coin offerings (ICOS).",
        "Freeze 11% of the BenefitMine team tokens for two years.",
      ],
    },
    {
      title: "PHASE 5 (Completed)",
      points: [
        "Expand the exchange's trading pairs, including fiat currencies and stablecoins.",
        "Launch of $BFM token at Coinstore Exchange",
        "Partnership with major projects to enhance the use case of BFM token.",
        "Introduce the BenefitMine Investment platform with staking options",
      ],
    },
    {
      title: "PHASE 6",
      points: [
        "Launch a Crypto Payment Gateway backed by $BFM Token.",
        "Implement a strong program to attract new users and icrease trading volumes",
        "Continuously improve the platform's security and performance to maintain user trust and satisfaction.",
      ],
    },
    {
      title: "PHASE 7",
      points: [
        "Unveil Centralized Exchange (CEX) real version (trade on live price with real assets).",
        "Launch additional features and improvements to enhance the BenefitMine ecosystem.",
        "Continue to innovate and adapt to evolving market trends and user needs.",
      ],
    },
  ];

  return (
    <>
      <section id="Roadmap">
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
          className="  font-bold md:gap-5 gap-0 text-center justify-center md:mt-28 mt-0 relative z-10"
        >
          <motion.h1
            variants={FADE_DOWN_ANIMATION_VARIANTS}
            className="text-secondary text-[3.5rem] font-bold relative z-20"
          >
            Our <span className="text-[#F89B1F]">Roadmap</span>
          </motion.h1>
        </motion.div>

{/*   1   */}

        <div className="  flex justify-center z-0 absolute min-h-screen w-[90%] top-[475rem] md:top-[305rem] left-[-2rem] md:left-0">
          <div className="bg-[#2cc4f5]    green blur-[120px] md:blur-[150px] rounded-full absolute h-[9em] w-[9em]  md:h-[12em] md:w-[12em]"></div>
        </div>

        <div className="  flex justify-center z-0 absolute min-h-screen w-[30%] top-[455rem]  md:top-[295rem] ml-[5rem] md:ml-[-16rem]">
          <div className=" bg-[#f89b1c]  green blur-[120px] md:blur-[150px]   rounded-full absolute h-[9em] w-[9em]  md:h-[12em] md:w-[12em]"></div>
        </div>


{/*   2   */}

<div className="  flex justify-center z-0 absolute min-h-screen w-[90%] top-[495rem] md:top-[335rem] left-[-2rem] md:left-0">
          <div className="bg-[#f89b1c]    green blur-[120px] md:blur-[150px] rounded-full absolute h-[9em] w-[9em]  md:h-[12em] md:w-[12em]"></div>
        </div>

        <div className="  flex justify-center z-0 absolute min-h-screen w-[30%] top-[525rem]  md:top-[325rem] ml-[5rem] md:ml-[-16rem]">
          <div className=" bg-[#2cc4f5]  green blur-[120px] md:blur-[150px]   rounded-full absolute h-[9em] w-[9em]  md:h-[12em] md:w-[12em]"></div>
        </div>


{/*   3   */}

<div className="  flex justify-center z-0 absolute min-h-screen w-[90%] top-[570rem] md:top-[365rem] left-[-2rem] md:left-0">
          <div className="bg-[#2cc4f5]    green blur-[120px] md:blur-[150px] rounded-full absolute h-[9em] w-[9em]  md:h-[12em] md:w-[12em]"></div>
        </div>

        <div className="  flex justify-center z-0 absolute min-h-screen w-[30%] top-[545rem]  md:top-[355rem] ml-[5rem] md:ml-[-16rem]">
          <div className=" bg-[#f89b1c]  green blur-[120px] md:blur-[150px]   rounded-full absolute h-[9em] w-[9em]  md:h-[12em] md:w-[12em]"></div>
        </div>

{/*   4   */}

<div className="  flex justify-center z-0 absolute min-h-screen w-[90%] top-[590rem] md:top-[395rem] left-[-2rem] md:left-0">
          <div className="bg-[#f89b1c]    green blur-[120px] md:blur-[150px] rounded-full absolute h-[9em] w-[9em]  md:h-[12em] md:w-[12em]"></div>
        </div>

        <div className="  flex justify-center z-0 absolute min-h-screen w-[30%] top-[620rem]  md:top-[385rem] ml-[5rem] md:ml-[-16rem]">
          <div className=" bg-[#2cc4f5]  green blur-[120px] md:blur-[150px]   rounded-full absolute h-[9em] w-[9em]  md:h-[12em] md:w-[12em]"></div>
        </div>


  {/*   5   */}

<div className="   justify-center z-0 absolute min-h-screen w-[90%] flex top-[570rem] md:top-[425rem] left-[-2rem] md:left-0">
          <div className="bg-[#2cc4f5]    green blur-[120px] md:blur-[150px] rounded-full absolute h-[9em] w-[9em]  md:h-[12em] md:w-[12em]"></div>
        </div>

        <div className="  flex justify-center z-0 absolute min-h-screen w-[30%] top-[640rem]  md:top-[415rem] ml-[5rem] md:ml-[-16rem]">
          <div className=" bg-[#f89b1c]  green blur-[120px] md:blur-[150px]   rounded-full absolute h-[9em] w-[9em]  md:h-[12em] md:w-[12em]"></div>
        </div>



        <section
          className="my-20 flex w-full scroll-mt-28 flex-col items-center justify-center gap-10"
          id="#experience"
        >
          <VerticalTimeline lineColor="#f89b1f">
            {phases.map((phase, index) => {
              return (
                <TimelineElement
                  key={index}
                  title={phase.title}
                  points={phase.points}
                />
              );
            })}
          </VerticalTimeline>
        </section>
      </section>
    </>
  );
}
