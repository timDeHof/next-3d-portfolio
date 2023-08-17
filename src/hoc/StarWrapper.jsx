import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { staggerContainer } from "../utils/motion";
import { StarsCanvas } from "@/components";
const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} flex flex-col mx-auto max-w-7xl`}>
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <div className='relative z-0'>
          <StarsCanvas />
          <Component />
        </div>
      </motion.section>
    );
  };

export default StarWrapper;
