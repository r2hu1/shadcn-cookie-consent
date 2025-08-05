"use client";

import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type AnimationType = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "zoomIn";

interface AnimateInViewProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
  animationType?: AnimationType;
  distance?: number;
}

export const AnimateInView = ({
  children,
  delay = 0.1,
  duration = 0.6,
  once = true,
  className = "",
  animationType = "fadeUp",
  distance = 50,
}: AnimateInViewProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const getVariants = (type: AnimationType): Variants => {
    switch (type) {
      case "fadeUp":
        return {
          hidden: { opacity: 0, y: distance },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay, duration, ease: "easeOut" },
          },
        };
      case "fadeDown":
        return {
          hidden: { opacity: 0, y: -distance },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay, duration, ease: "easeOut" },
          },
        };
      case "fadeLeft":
        return {
          hidden: { opacity: 0, x: -distance },
          visible: {
            opacity: 1,
            x: 0,
            transition: { delay, duration, ease: "easeOut" },
          },
        };
      case "fadeRight":
        return {
          hidden: { opacity: 0, x: distance },
          visible: {
            opacity: 1,
            x: 0,
            transition: { delay, duration, ease: "easeOut" },
          },
        };
      case "zoomIn":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { delay, duration, ease: "easeOut" },
          },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  const variants = getVariants(animationType);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
