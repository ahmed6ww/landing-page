"use client";
import { TypewriterEffectSmooth } from "@/app/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Your",
      className: "text-primary dark:text-primary",
    },
    {
      text: "Business",
      className: "text-primary dark:text-primary",
    },
    {
      text: "Our",
      className: "text-secondary dark:text-secondary",
    },
    {
      text: "Responsibility",
      className: "text-secondary dark:text-secondary",
    },
  ];
  return <TypewriterEffectSmooth words={words} />;
}
