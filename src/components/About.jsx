import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary rounded-[20px] py-5 px-8 min-h-[280px] flex justify-evenly items-center flex-col relative overflow-hidden'
        >
          {/* Default view: icon + title */}
          <div
            className={`flex flex-col items-center justify-evenly flex-1 transition-all duration-300 ${
              hovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <img
              src={icon}
              alt={title}
              className='w-16 h-16 object-contain'
            />
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
            </h3>
          </div>

          {/* Hover view: title + description */}
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-300 ${
              hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <h3 className='text-white text-[18px] font-bold text-center mb-3'>
              {title}
            </h3>
            <p className='text-secondary text-[13px] text-center leading-[20px]'>
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Dedicated Master's student in Artificial Intelligence (AI) with hands-on experience 
        in machine learning, computer vision, natural language processing, and deep learning. 
        Experienced in applying academic concepts through coursework and projects. 
        Aspiring to contribute as an AI Engineer by leveraging advanced AI techniques 
        to address real-world problems.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
