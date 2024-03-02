"use client"
import { VerticalTimeline } from "react-vertical-timeline-component";
import TimelineElement from "@/app/components/ui/TimelineElement";


export default function Roadmap() {

  type Phase = {
    title: string;
    points: string[];
  }
  
  const phases: Phase[] = [
    {
      title: "PHASE 1",
      points: [
        "Create social channels to promote BenefitMine (BFM) project.",
        "Develop the project whitepaper outlining its objectives and features.",
        "Mint 1,000,000,000 BFM tokens and conduct an audit of the token to ensure its integrity.",
        "Build a team with expertise in blockchain technology, trading, compliance, and marketing."
      ],
    },
    {
      title: "PHASE 2",
      points: [
        "Develop a detailed project plan and allocate resources.",
        "Begin the development of Centralized Exchange (CEX) V1 with peer-to-peer, Spot, and over-the-counter trading functionalities.",
        "Build the exchange's infrastructure, including servers, APIs, and databases.",
        "Develop the user interface and experience, including trading charts, order books, and portfolio management tools."
      ],
    },
    {
      title: "PHASE 3",
      points: [
        "Test and optimize the platform's performance, including speed, scalability, and uptime.",
        "Launch new BFM token website.",
        "Launch CEX V1 and unveil CEX demo version (trade on live price with non-real assets)",
        "Develop CEX share profit section"
      ],
    },
    {
      title: "PHASE 4",
      points: [
        "Conduct a 1,000,000 BFM token airdrop to the private Telegram community.",
        "Freeze 50% of the tokens for two years to create scarcity and enhance value.",
        "Launch a token offering platform for initial coin offerings (ICOS)",
        "Freeze 11% of the BenefitMine team tokens for two years."
      ],
    },
    {
      title: "PHASE 5",
      points: [
        "Launch an initial Exchange offering (IEOs) in popular Exchange.",
        "Expand the exchange's trading pairs, including fiat currencies and stablecoins.",
        "List token in CMC, Coin Gecko.",
        "Launch token in 3 popular Exchanges."
      ],
    },
    {
      title: "PHASE 6",
      points: [
        "Implement an advertising program to attract new users and increase trading volumes.",
        "Continuously improve the platform's security and performance to maintain user trust and satisfaction.",
        "Introduce the BenefitMine Investment platform with staking options.",
        "Unveil Centralized Exchange (CEX) real version (trade on live price with real assets)"
      ],
    },
    {
      title: "PHASE 7",
      points: [
        "Launch additional features and improvements to enhance the BenefitMine ecosystem.",
        "Continue to innovate and adapt to evolving market trends and user needs."
      ],
    },
  ];

  

  return (
    <>
      <div className=' text-[3rem] font-bold md:gap-5 gap-0 text-center justify-center md:mt-32 mt-28 '>
  
  <h1 className='text-white'>Our <span className='text-[#F89B1F]'>Roadmap</span></h1>
  </div>
    <section
      className="my-20 flex w-full scroll-mt-28 flex-col items-center justify-center gap-10"
      id="#experience"
    >
      <VerticalTimeline lineColor="#f89b1f">
        {phases.map((phase, index) => {
          return ( <TimelineElement key={index} title={phase.title} points={phase.points} /> );
        })}
      </VerticalTimeline>
    </section>
    </>
  );
}