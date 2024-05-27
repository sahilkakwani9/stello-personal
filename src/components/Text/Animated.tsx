import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { textVariant } from "@/constants";

function AnimatedText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Ensures animation is triggered only once
    threshold: 0.1, // Triggers when 10% of the element is in view
  });
  if (inView) {
    controls.start("visible");
  }
  return (
    <div className="overflow-hidden">
      <motion.p
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariant}
        className={className}
      >
        {children}
      </motion.p>
    </div>
  );
}

export default AnimatedText;
