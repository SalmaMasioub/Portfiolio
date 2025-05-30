import React from "react";
import { motion } from "framer-motion";
import { FaTerminal, FaReact, FaJs, FaBootstrap, FaWordpress, FaHtml5, FaSass, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";

const Skill = ({ icon, label }) => (
  <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
    {icon}
    <span className="text-sm mt-2">{label}</span>
  </div>)


const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col md:flex-row justify-center items-start px-12 py-32 bg-black text-white font-mono gap-20"
    >
      <motion.div className="flex-1 max-w-3xl" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }} viewport={{ once: true, amount: 0.5 }}>
        <motion.h2 className="text-6xl font-extralight tracking-widest mb-12 text-pink-400 select-none" initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          About Me
        </motion.h2>

        <motion.p className="text-xl leading-relaxed text-gray-300 font-light mb-10" initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          I'm a{" "}<span className="font-semibold text-pink-400">full stack developer</span>{" "}
          passionate about crafting minimalist, elegant, and user-friendly digital experiences. I specialize in React, Tailwind CSS, and Framer
          Motion to bring smooth animations and polished UI to life.
        </motion.p>

        <motion.div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center text-3xl" initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}>
          <Skill icon={<FaJs className="text-yellow-400" />} label="JavaScript" />
          <Skill icon={<FaReact className="text-cyan-400" />} label="React" />
          <Skill icon={<SiTailwindcss className="text-sky-400" />} label="Tailwind" />
          <Skill icon={<FaBootstrap className="text-purple-500" />} label="Bootstrap" />
          <Skill icon={<SiFigma className="text-pink-500" />} label="Figma" />
          <Skill icon={<FaWordpress className="text-blue-500" />} label="WordPress" />
          <Skill icon={<FaHtml5 className="text-orange-500" />} label="HTML" />
          <Skill icon={<FaSass className="text-pink-400" />} label="Sass" />
          <Skill icon={<FaGitAlt className="text-orange-700" />} label="Git" />


        </motion.div>
      </motion.div>

      <motion.div
        className="flex-1 w-full max-w-lg h-96 rounded-3xl shadow-lg flex flex-col justify-center items-center gap-6 px-8 py-12 cursor-pointer
          bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-700
          hover:scale-105 hover:from-pink-600 hover:via-purple-700 hover:to-indigo-800 transition-transform duration-500"
        initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true, amount: 0.5 }} whileHover={{ scale: 1.1 }}>
        <FaTerminal className="text-white text-8xl" />
      </motion.div>
    </div>
  );
};

export default About;
