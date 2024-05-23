"use client";
import { TUTORIALS_DATA } from "../constatnts";
import { motion } from "framer-motion";
function Tutorials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ bounce: 1, duration: 1 }}
      className="w-[90%] min-h-min my-28 mx-auto "
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
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
      <h2 className="font-secondary-regular text-[18px] lg:text-4xl">{title}</h2>
      <p className="font-secondary-light text-xs lg:text-xl text-secondary-text">{description}</p>
    </div>
  );
}
