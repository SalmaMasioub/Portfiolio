import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md px-8 py-5 flex flex-col md:flex-row items-center justify-between font-mono text-gray-300 z-50 shadow-inner">
      
      <span className="text-sm md:text-base tracking-wide select-none">
        © {new Date().getFullYear()} <strong className="text-pink-500">Scorpion</strong>. All rights reserved.
      </span>

      <div className="flex gap-8 mt-4 md:mt-0">
        {[{
          href: "https://github.com/SalmaMasioub",
          label: "GitHub",
          icon: <FaGithub size={24} />
        }, {
          href: "https://www.linkedin.com/in/salma-masioub-08b668325/",
          label: "LinkedIn",
          icon: <FaLinkedin size={24} />
        }, {
          href: "mailto:salma.masioub6@gmail.com",
          label: "Email",
          icon: <FaEnvelope size={24} />
        }].map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-gray-400 hover:text-pink-500 transition-transform duration-300 ease-in-out transform 
            hover:-translate-y-1 hover:scale-110">
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
