import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  // Separate "Relevant Coursework:" label from actual bullet points
  const hasCourseworkLabel = experience.points[0] === "Relevant Coursework:";
  const label = hasCourseworkLabel ? experience.points[0] : null;
  const bulletPoints = hasCourseworkLabel ? experience.points.slice(1) : experience.points;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      {label && (
        <p className='mt-4 mb-1 text-white text-[15px] font-semibold italic'>
          {label}
        </p>
      )}

      <ul className={`${label ? 'mt-1' : 'mt-5'} list-disc ml-5 space-y-2`}>
        {bulletPoints.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  let lastCategory = "";

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My academic journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education & Certifications.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => {
            const showHeader = experience.category && experience.category !== lastCategory;
            if (experience.category) lastCategory = experience.category;

            return (
              <React.Fragment key={`experience-${index}`}>
                {showHeader && (
                  <div className='py-6 flex justify-center'>
                    <span className='bg-primary px-6 py-2 text-white text-[26px] font-bold rounded-full border border-secondary/30'>
                      {experience.category}
                    </span>
                  </div>
                )}
                <ExperienceCard experience={experience} />
              </React.Fragment>
            );
          })}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "education");
