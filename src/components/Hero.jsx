import { motion } from "framer-motion";

import { styles } from "../styles";
import { NeuralNetworkCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-[65vh] mx-auto`}>
      {/* Canvas sits behind everything */}
      <div className='absolute inset-0 z-0'>
        <NeuralNetworkCanvas />
      </div>

      {/* Text content sits on top */}
      <div
        className={`absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pointer-events-none`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#692c94]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#692c94]'>Kokou</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I build machine learning systems  <br className='sm:block hidden' />
          for real-world problems
          </p>
          <p className='mt-4 text-secondary text-[16px] sm:text-[18px] max-w-lg leading-[28px]'>
            Specializing in computer vision, NLP, and deep learning. Recent
            work spans PCB defect detection at 0.983 mAP, real-time neural
            network visualization, and 3D LIDAR mapping.
          </p>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
