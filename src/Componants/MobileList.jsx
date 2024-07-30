import {
  FaHome,
  FaAddressCard,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";

export const MobileList = () => {
  return (
    <div className="fixed bottom-10 right-3 sm:hidden w-[70%] mr-8 rounded-3xl  bg-[#4E4E5F] ">
      <ul className="flex justify-around items-center h-20 mx-auto -">
        <li>
          <a
            href="#home"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            <FaHome size={30} />
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            <FaAddressCard size={30} />
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            <FaTools size={30} />
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            <FaProjectDiagram size={30} />
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            <FaEnvelope size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
};
