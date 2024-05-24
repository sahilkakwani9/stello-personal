/* eslint-disable @next/next/no-img-element */
"use client";
import { useInView } from "react-intersection-observer";
import { TUTORIALS_DATA } from "../constatnts";
import { motion, useAnimation } from "framer-motion";
function Tutorials() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  if (inView) {
    controls.start("visible");
  }
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
      }}
      className="w-[90%] min-h-min my-28 mx-auto "
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        {TUTORIALS_DATA.map((tutorial, index) => {
          return (
            <TutorialCard
              key={`${tutorial.image}-${index}`}
              description={tutorial.description}
              image={tutorial.image}
              title={tutorial.title}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
export default Tutorials;

type TutorialCardProps = {
  image: string;
  title: string;
  description: string;
};
function TutorialCard({ description, image, title }: TutorialCardProps) {
  return (
    <div className="flex w-[90%] flex-col gap-y-4">
      <img src={image} alt="" height={"100%"} width={"100%"} />
      <h2 className="font-secondary-regular text-[18px] lg:text-3xl">
        {title}
      </h2>
      <p className="font-secondary-light text-xs lg:text-lg text-secondary-text">
        {description}
      </p>
    </div>
  );
}
