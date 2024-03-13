"use client";
import * as React from "react";
import { Chart } from "react-google-charts";
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/fade-animation"


const newData = [
  { id: 0, value: 20, label: "Marketing" },
  { id: 1, value: 11, label: "BFM Team" },
  { id: 2, value: 5, label: "Charity" },
  { id: 3, value: 12.6, label: "Token Redemption" },
  { id: 4, value: 20, label: "Token Burn" },
  { id: 5, value: 6.4, label: "Token Presale(ICO & IEO)" },
  { id: 6, value: 25, label: "Exchange support,rewards and airdrops" },
];

export default function PieActiveArc() {

    const { ref, inView } = useInView({
        triggerOnce: true,
      });

  return (
    <div className=" bg-black min-h-screen">
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
      className="  font-bold  text-center justify-center p-2 pt-7 ">
        <motion.h1 variants={FADE_DOWN_ANIMATION_VARIANTS} className="text-white text-[2.8rem]  font-bold">
          BFM <span className="text-[#F89B1F]">Tokenomics</span>
        </motion.h1>
      </motion.div>


      <Chart
        chartType="PieChart"
        data={[
          ["Task", "Hours per Day"],
          ...newData.map((item) => [item.label, item.value]),
        ]}
        options={{
          is3D: true,
          pieSliceText: "none", // Hide data labels
          colors: [
            "#ff7432",
            "#ffd068",
            "#f89b1f",
            "#ffb438",
            "#FF8C00",
            "#ffb438",
            "#ff8c00",
          ],
          backgroundColor: "black", // Shades of orange,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -50, color: "gray" },
          legend: {
            textStyle: { color: "#EBECF0" },
            fontSize: 10,
            position: "bottom",
            top: "200%",
            width: "100%"
          }, // Change legend text color to white
          chartArea: {
            top: "5%",
            width: "90%",
            height: "70%",
            position: "center",
          },
        }}
        width={"100%"}
        height={"500px"}
      />
      {/* Add custom CSS to target the text size within the chart */}
      <style>
        {`
          svg text {
            font-size: 12px !important;
            
          },
          .google-visualization-chart-legend-item {
            width: 60px; /* Adjust the width of each legend item */
          }
        `}
      </style>

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
        <motion.ul variants={FADE_DOWN_ANIMATION_VARIANTS} className=" relative flex flex-col  items-center text-start  p-10 bg-black text-secondary">
          <li>
            50% of BFM tokens will be locked for two years when the ICO starts.
          </li>
          <li>
            The team's token share, following the conclusion of the ICO, will be
            subject to a two-year lock-up period.
          </li>
        </motion.ul>
      </motion.div>
    </div>
  );
}