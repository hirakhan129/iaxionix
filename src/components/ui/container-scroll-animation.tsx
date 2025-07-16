
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
  backgroundColor,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  backgroundColor?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scaleDimensions = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -100]
  );

  return (
    <div
      ref={containerRef}
      className="h-[80vh] flex items-center justify-center relative"
      style={{
        backgroundColor: backgroundColor || "#000000",
      }}
    >
      <div className="relative mb-20 w-full h-full pt-20">
        <motion.div
          style={{
            scale: scaleDimensions,
            y: translateY,
          }}
          className="div min-h-[30vh] flex flex-col items-center justify-center"
        >
          {titleComponent}
        </motion.div>

        <motion.div
          style={{
            opacity: scrollYProgress,
          }}
          className="relative mt-24"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export const WordsRevealContainer = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const wordsArray = words.split(" ");
  
  return (
    <div className={className}>
      {wordsArray.map((word, idx) => (
        <span key={idx} className="mr-2.5 text-techGreen">
          {word}
        </span>
      ))}
    </div>
  );
};
