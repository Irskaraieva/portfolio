import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[320px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0,5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 pbject-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>     
      <motion.p 
      variants={fadeIn("", "", 0.1, 1)} 
      className="mt-4 text-secondary text-[17] max-w-4xl leading-[30px]">
          I'm a Front-End Developer transitioning into IT after many years of working in education. My teaching experience has equipped me with strong analytical skills, problem-solving abilities, and teamwork capabilities.<br />
          With a foundation in JavaScript, React and HTML/CSS, I focus on crafting functional, visually appealing web applications to enhance user experiences.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')