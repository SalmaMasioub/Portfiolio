import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import About from "../about/about";
import Projects from "../projects/projects";
import Contact from "../contact/contact";


const Home = () => {
  const [text, setText] = useState("");
  const fullText = "Building seamless web experiences from front to back."


  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index))
        index++
      }else {
        clearInterval(interval)
      }
    }, 35)
    return () => clearInterval(interval)
  }, [])



   const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      }
    }
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <div className="relative min-h-screen bg-black flex flex-col justify-center items-center px-6 text-white pt-40 font-mono w-full">
      <motion.div className="max-w-4xl text-center" variants={container} initial="hidden" animate="visible">
        <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-extralight tracking-wide mb-6 select-none text-pink-400 w-full " >
          Hello, I'm <span className="font-semibold text-white">Scorpion</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed font-light">
          {text}
          <motion.span className="inline-block w-[1px] h-6 bg-white ml-1 animate-pulse" key={text.length} />
        </motion.p>

        <motion.div variants={fadeUp} className="flex justify-center gap-8">
          <a href="#about" className="px-8 py-3 border-2 border-pink-400 rounded-full text-pink-400 hover:bg-pink-400 hover:text-black
           transition-all duration-300 font-medium" >
            Learn More
          </a>
          <a href="https://github.com/SalmaMasioub" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-white 
          rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 font-medium">
            GitHub
          </a>
        </motion.div>
      </motion.div>

 

      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
