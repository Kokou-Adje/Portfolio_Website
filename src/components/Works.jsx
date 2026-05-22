import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        className='bg-tertiary rounded-2xl p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto relative'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-secondary hover:text-white text-[24px] font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors'
        >
          ✕
        </button>

        {/* Project image */}
        <div className='w-full h-[250px] rounded-xl overflow-hidden mb-6'>
          <img
            src={project.image}
            alt={project.name}
            className='w-full h-full object-cover'
          />
        </div>

        {/* Title and tags */}
        <h3 className='text-white font-bold text-[28px]'>{project.name}</h3>
        <div className='mt-2 flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <span
              key={tag.name}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className='mt-4 text-secondary text-[16px] leading-[28px]'>
          {project.description}
        </p>

        {project.details && (
          <>
            {/* Methodology */}
            <div className='mt-6'>
              <h4 className='text-white font-semibold text-[18px] mb-2'>Methodology</h4>
              <p className='text-secondary text-[15px] leading-[26px]'>
                {project.details.methodology}
              </p>
            </div>

            {/* Tools */}
            <div className='mt-5'>
              <h4 className='text-white font-semibold text-[18px] mb-2'>Tools & Technologies</h4>
              <div className='flex flex-wrap gap-2'>
                {project.details.tools.map((tool) => (
                  <span
                    key={tool}
                    className='bg-black-100 px-3 py-1 rounded-full text-secondary text-[14px]'
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className='mt-5'>
              <h4 className='text-white font-semibold text-[18px] mb-2'>Results</h4>
              <p className='text-secondary text-[15px] leading-[26px]'>
                {project.details.results}
              </p>
            </div>
          </>
        )}

        {/* GitHub link */}
        <div className='mt-6 flex gap-4'>
          <a
            href={project.source_code_link}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-2 bg-black-100 hover:bg-[#292345] px-5 py-2.5 rounded-lg transition-colors'
          >
            <img src={github} alt='github' className='w-5 h-5 object-contain' />
            <span className='text-white text-[14px] font-medium'>View Source Code</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  details,
  onCardClick,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        onClick={() => onCardClick({ name, description, tags, image, source_code_link, details })}
        className='cursor-pointer'
      >
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link, "_blank");
              }}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px] line-clamp-3'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {/* View Details hint */}
        <p className='mt-3 text-[#692c94] text-[13px] font-medium'>
          Click to view details →
        </p>
      </Tilt>
      </div>
    </motion.div>
  );
};

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience in
          artificial intelligence and machine learning. Each project demonstrates
          my ability to apply advanced AI techniques to solve real-world problems.
          Click on any project to view detailed methodology, tools, and results.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
            onCardClick={setSelectedProject}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Works, "projects");
