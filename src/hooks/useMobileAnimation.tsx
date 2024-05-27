import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export function useMobileAnimation() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(max-width: 992px)").matches) {
        console.log("inside mobile width");

        setIsMobile(true);
        controls.start("hidden");
      } else {
        console.log("inside desktop width");
        setIsMobile(false);
        controls.start("desktop");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (inView && isMobile) {
      console.log("now I am in view");

      controls.start("visible");
    }
  }, [inView, controls, isMobile]);

  return { ref, controls, isMobile };
}
