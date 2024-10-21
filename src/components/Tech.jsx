import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from '../styles';
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies that I got acquainted with</p>
        <h2 className={styles.sectionHeadText}>On the way to web development</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-12'>
        {technologies.map((technology, index) => (
          <motion.div variants={fadeIn("up", "spring",  0.2 + index * 0.2, 0.7)} className='bg-tertiary rounded-lg p-3 border-blue-600' key={technology.name}>
              <img src={technology.icon} className="object-cover w-20 h-20"/>           
          </motion.div>
        ))}
      </div>
    </>

  );
};

export default SectionWrapper(Tech, "");
