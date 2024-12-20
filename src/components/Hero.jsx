import { motion } from 'framer-motion';
import { styles } from '../styles';
import MyPdf from '/CV_Skaraieva.pdf';

import React from 'react';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[140px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justyfy-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Ira</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Developing user-friendly responsive pages is my specialty.<br />
            Proposals for cooperation with technologies that need to be studied are welcome!
          </p>
          <div className='mt-6 rounded-md text-base bg-[#915eff] px-3.5 py-2.5 w-[220px]'>
            <a href={MyPdf} download="CV_Skaraieva.pdf">
              <button>Download CV (.pdf)
                <span className='ml-2 underline'>&#11015;</span>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
