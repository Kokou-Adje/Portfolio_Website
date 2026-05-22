import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { github } from "../assets";

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 z-50 flex items-center justify-center p-4'
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className='absolute inset-0 bg-black/70 backdrop-blur-sm' />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className='relative bg-[#1d1836] rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-secondary/20'
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className='absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors'
            >
              ✕
            </button>

            {/* Project image */}
            <div className='relative w-full h-[250px] overflow-hidden rounded-t-2xl'>
              <img
                src={project.image}
                alt={project.name}
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-[#1d1836] to-transparent' />
            </div>

            {/* Content */}
            <div className='p-8 -mt-10 relative'>
              {/* Title + tags */}
              <h2 className='text-white text-[28px] font-bold'>{project.name}</h2>
              <div className='mt-2 flex flex-wrap gap-2'>
                {project.tags.map((tag) => (
                  <span
                    key={tag.name}
                    className={`text-[13px] ${tag.color} bg-white/5 px-3 py-1 rounded-full`}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className='mt-5 text-secondary text-[15px] leading-[26px]'>
                {project.description}
              </p>

              {/* Methodology */}
              {project.details?.methodology && (
                <div className='mt-6'>
                  <h3 className='text-white text-[18px] font-semibold flex items-center gap-2'>
                    <span className='text-[#692c94]'>▎</span>Methodology
                  </h3>
                  <p className='mt-2 text-secondary text-[14px] leading-[24px]'>
                    {project.details.methodology}
                  </p>
                </div>
              )}

              {/* Tools */}
              {project.details?.tools && (
                <div className='mt-6'>
                  <h3 className='text-white text-[18px] font-semibold flex items-center gap-2'>
                    <span className='text-[#692c94]'>▎</span>Tools & Technologies
                  </h3>
                  <div className='mt-2 flex flex-wrap gap-2'>
                    {project.details.tools.map((tool) => (
                      <span
                        key={tool}
                        className='text-[13px] text-white bg-[#692c94]/30 border border-[#692c94]/50 px-3 py-1 rounded-full'
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Results */}
              {project.details?.results && (
                <div className='mt-6'>
                  <h3 className='text-white text-[18px] font-semibold flex items-center gap-2'>
                    <span className='text-[#692c94]'>▎</span>Results
                  </h3>
                  <p className='mt-2 text-secondary text-[14px] leading-[24px]'>
                    {project.details.results}
                  </p>
                </div>
              )}

              {/* GitHub link */}
              <div className='mt-8 flex gap-4'>
                <a
                  href={project.source_code_link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-2 px-5 py-2.5 bg-[#692c94] hover:bg-[#7d3aab] text-white text-[14px] font-medium rounded-lg transition-all duration-300'
                >
                  <img src={github} alt='github' className='w-5 h-5 object-contain' />
                  View Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
