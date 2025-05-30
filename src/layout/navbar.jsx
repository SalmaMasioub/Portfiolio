import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import images from "../constant/images";




const Navbar = () => {
  const [open, setOpen] = useState(false)


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-md font-mono text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img src={images.logo} width={150} alt="Logo" />

        <ul className="hidden md:flex gap-10 text-xl tracking-wider list-none">
          <li>
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-pink-500 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-pink-500 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-pink-500 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-pink-500 transition">
              Contact
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>



      {open && (
        <ul className="md:hidden bg-black bg-opacity-95 backdrop-blur-md flex flex-col items-center gap-6 py-6 text-sm tracking-wider list-none">
          <li>
            <Link to="/" onClick={() => setOpen(false)} className="hover:text-pink-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setOpen(false)} className="hover:text-pink-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-pink-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-pink-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
