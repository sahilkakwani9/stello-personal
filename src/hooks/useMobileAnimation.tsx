import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export function useMobileAnimation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  //   const [isMobile, setIsMobile] = useState(false);

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setIsMobile(window.innerWidth <= 768); // Adjust the threshold as needed
  //     };
  //     handleResize(); // Check initial width
  //     window.addEventListener("resize", handleResize);
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  const isMobile = window.matchMedia("(max-width: 992px)").matches;
  useEffect(() => {
    if (inView && isMobile) {
      controls.start("visible");
    }
  }, [inView, controls, isMobile]);

  return { ref, controls, isMobile };
}
