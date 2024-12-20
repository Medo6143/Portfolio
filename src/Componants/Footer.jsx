import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-[#222222] text-white py-8 mt-16">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Mohamed Wael</h2>
        <p className="text-center mb-6">Front-End Developer | React.js Specialist</p>
        <ul className="flex gap-6 mb-6">
        
          <li>
            <a href="https://github.com/Medo6143" target="_blank" rel="noopener noreferrer" className="hover:text-[#32D3FF] transition-colors">
              <FaGithub size={24} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mohamed-wael-469744273/" target="_blank" rel="noopener noreferrer" className="hover:text-[#32D3FF] transition-colors">
              <FaLinkedin size={24} />
            </a>
          </li>
          <li>
            <a href="https://wa.me/201001324231" target="_blank" rel="noopener noreferrer" className="hover:text-[#32D3FF] transition-colors">
              <FaWhatsapp size={24} />
            </a>
          </li>
        </ul>
        <p className="text-sm">&copy; 2024 Mohamed Wael. All rights reserved.</p>
      </div>
    </footer>
  );
};
