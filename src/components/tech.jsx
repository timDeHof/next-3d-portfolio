import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "@styles/styles";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

const TechnologiesCard = ({ index, heading, subHeading, tech }) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='w-full p-5 rounded-2xl bg-tertiary'>
        <div className='flex flex-col items-center justify-center'>
          <h3 className='text-[18px] font-bold tracking-wider text-white'>
            {heading}
          </h3>
          <p className='mt-2 text-[14px] tracking-wider text-secondary'>
            {subHeading}
          </p>
        </div>
        <div className='grid items-center grid-cols-2 px-8 mt-5 gap-x-5 gap-y-2'>
          {tech.map((item, index) => {
            return (
              <div
                key={`technology-${item.name}`}
                className='flex flex-row gap-4'>
                <Image
                  src={item.icon}
                  alt={item.name}
                  title={item.name}
                  loading='lazy'
                  width='100%'
                  height='100%'
                  className='object-contain w-5 h-5'
                />
                <span className='text-[12px]'>{item.name}</span>
              </div>
            );
          })}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      <div className='flex flex-wrap mt-10 gap-7'>
        {technologies.map((technology, index) => (
          <TechnologiesCard
            key={technology.heading}
            index={index}
            {...technology}
          />
        ))}
      </div>
    </>
  );
};
export default Tech;
// export default SectionWrapper(Tech, "");
