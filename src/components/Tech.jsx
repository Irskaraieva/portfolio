import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from '../styles';
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies that I got acquainted with</p>
        <h2 className={styles.sectionHeadText}>On the way to web development</h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10 mt-6'>
        {technologies.map((technology) => (
          <div className='bg-tertiary rounded-lg p-3 border-blue-600' key={technology.name}>
            {/* <BallCanvas icon={technology.icon} /> */}
            
              <img src={technology.icon} className="object-cover w-20 h-20"/>
           
          </div>
        ))}
      </div>
    </>

  );
};

export default SectionWrapper(Tech, "");