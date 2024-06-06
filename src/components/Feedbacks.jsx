import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { github, linkedin, facebook } from "../assets";

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] ">
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Where can you find me?</p>
          <h2 className={styles.sectionHeadText}>Social networks.</h2>
        </motion.div>
      </div>

      <motion.div variants={textVariant()} className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        <a href="https://github.com/Irskaraieva" className="w-[30%] flex justify-center">
          <img src={github} className="h-12 w-12" />
        </a>
        <a href="https://www.linkedin.com/in/iryna-skaraieva-84832a279/" className="w-[30%] flex justify-center">
          <img src={linkedin} className="h-12 w-12" />
        </a>
        <a href="https://www.facebook.com/irina.skaraeva/" className="w-[30%] flex justify-center">
          <img src={facebook} className="h-12 w-12" />
        </a>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");