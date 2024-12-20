import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { github, linkedin, facebook } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [ loading, setLoading ] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Iryna',
        from_email: form.email,
        user_email: form.email,
        to_email: 'mishytkina14@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
   ).then(() => {
    setLoading(false);
    alert('Thank you, message sent! I will answer you soon!');
    setForm({
      name: '',
      email: '',
      message: ''
    });
   }, (error) => {
    setLoading(false);
    console.log(error);
    alert('There was a problem sending the message. Please try again');
   });
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <div className={`mt-5 pb-6 flex flex-wrap gap-7`}>
            <a href="https://github.com/Irskaraieva" className="flex-grow flex justify-center">
              <img src={github} className="h-10 w-10" />
            </a>
            <a href="https://www.linkedin.com/in/iryna-skaraieva-84832a279/" className="flex-grow flex justify-center">
              <img src={linkedin} className="h-10 w-10" />
            </a>
            <a href="https://www.facebook.com/irina.skaraeva/" className="flex-grow flex justify-center">
              <img src={facebook} className="h-10 w-10" />
            </a>
        </div>
        <h3 className={styles.sectionHeadText}>Contact by email:</h3>        
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What`s you name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />

          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What`s you email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />

          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea 
              rows='7'              
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none"
            />
          </label>
          <button type="submit" className="bg-tertiary py-3 px-8 outline-none w-full text-white font-bold shadow-md shadow-primary rounded-xl">
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact"); 