import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaWordpress, FaExternalLinkAlt, FaJs, FaGithub, FaHtml5, FaSass, FaCss3
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiBootstrap, SiHtml5 } from "react-icons/si";
import images from "../../constant/images";






const projects = [
  {
    title: "Weather App Using React & Tailwind CSS",
    description: "A sleek, responsive weather application built with React and Tailwind CSS. It integrates with a weather API to deliver accurate, real-time weather updates for any location worldwide.",
    image: images.weather,
    tech: [<FaReact className="text-cyan-400" />, 
    <SiTailwindcss className="text-sky-400" />],
    github: "https://github.com/SalmaMasioub/CityWeather-React",
  },

  {
    title: "Advanced To-Do List with Drag and Drop",
    description: "A dynamic JavaScript-based to-do list featuring drag-and-drop functionality. Users can create multiple lists, add personalized tasks, mark them as completed, edit, or delete them seamlessly.",
    image: images.todoList,
    tech: [<FaJs className="text-yellow-400" />, 
    <SiBootstrap className="text-purple-500" />],
    github: "https://github.com/SalmaMasioub/TODO-js.git",
  },

  {
    title: "Responsive Portfolio Landing Page",
    description: "A clean, single-page portfolio built with HTML, SASS, and Bootstrap. Fully responsive layout showcasing personal branding with modern styling and smooth user experience",
    image: images.easy,
    tech: [<FaHtml5 className="text-orange-500" />, 
    <FaSass className="text-pink-400" />, 
    <SiBootstrap className="text-purple-500" />],
    github: "https://github.com/SalmaMasioub/salma_masioub-finalProject_html-css",
  },

  {
    title: "Healthy Food Blog – WordPress Website",
    description: "A responsive WordPress-based blog focused on healthy eating. Features organized content sections, clean design, and an engaging user experience across all devices.",
    image: images.healthy,
    tech: [<FaWordpress className="text-blue-500" />, 
    <SiFigma className="text-pink-500" />],
    github: "https://github.com/SalmaMasioub/W-blog",
  },

  {
    title: "Flower Shop Homepage – WordPress Website",
    description: "A responsive WordPress homepage for an online flower store. Designed with a fresh and elegant layout to highlight products and provide a smooth browsing experience.",
    image: images.fiama,
    tech: [<FaWordpress className="text-blue-500" />,
       <SiFigma className="text-pink-500" />],
    github: "https://github.com/SalmaMasioub/fiama",
  },

  {
    title: "Responsive Web Page with HTML & CSS",
    description: "A fully responsive web page built from scratch using HTML and CSS. Focused on clean structure, modern layout, and cross-device compatibility.",
    image: images.array,
    tech: [<FaCss3 className="text-blue-500" />, 
    <SiHtml5 className="text-orange-500" />],
    github: "https://github.com/SalmaMasioub/array",
  }
]

const itemAnimation = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}




export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="w-full px-4 sm:px-6 md:px-12 pt-10 pb-20 bg-black text-white font-nunito scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } }
      }}>


      <motion.h2
        className="text-4xl sm:text-5xl font-extralight tracking-widest mb-16 text-pink-400 text-center"
        variants={itemAnimation}>
        My Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-zinc-800 rounded-2xl overflow-hidden shadow-md hover:shadow-pink-500/30 transition duration-300"
            variants={itemAnimation}>
              
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[4/3] object-cover"/>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                <FaGithub className="text-white text-4xl" />
              </a>
            </div>


            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="flex gap-3 text-xl text-pink-400 mb-4 flex-wrap">
                {project.tech.map((icon, i) => (
                  <div key={i} className="flex items-center gap-1">
                    {icon}
                  </div>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-pink-400 hover:underline">
                View Code <FaExternalLinkAlt />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
