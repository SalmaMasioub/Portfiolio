import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontFamily: "'Source Code Pro', monospace" }} // فونت ديال الكود
      className="text-5xl md:text-6xl font-bold text-pink-400 bg-gray-800 p-4 rounded-md shadow-lg"
    >
      {displayedText}
      <span className="blink">|</span>
      <style>{`
        .blink {
          animation: blink 1s step-start infinite;
          color: #f472b6; /* pink-400 */
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </motion.h1>
  );
};

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900 px-6 text-center">
      <TypingText text=" <Every line writes a story, every bug is a mystery. />" speed={80} />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="mt-6 max-w-xl text-gray-400 text-lg md:text-xl font-mono"
      >
        Crafting minimalistic portfolios with a feminine touch and smooth animations.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 px-8 py-3 bg-pink-500 rounded-md text-white font-semibold shadow-lg hover:bg-pink-600 transition font-mono"
      >
        Explore!
      </motion.button>
    </section>
  );
};

export default Home;
