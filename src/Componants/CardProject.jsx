import { FaGithub } from "react-icons/fa";
import { MdOutlineLink } from "react-icons/md";
import { useState } from "react";
import PropTypes from "prop-types";

export const CardProject = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      data-aos="fade-right"
      className="bg-[#222222] w-[350px] sm:w-[400px]  mx-auto p-3 my-auto rounded-xl mt-2 h-[200px] sm:h-[200px] relative hover:opacity-75 transition-opacity duration-500 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={props.url} alt="Image Project1" loading="lizy" className="w-full h-full object-cover" />
      <div
        className={`text-white absolute bottom-0 left-0 bg-[#81D4FA] gap-20 bg-opacity-80 p-2 w-[100%] h-[100%] flex items-center justify-center ${
          isHovered ? "visible" : "hidden"
        } transition-opacity duration-500 ease-in-out`}
      >
        <a href={props.demo}>
          <MdOutlineLink
            size={30}
            className="cursor-pointer hover:text-[#22D3FF]"
          />
        </a>
        <a href={props.code}>
          <FaGithub size={30} className="cursor-pointer hover:text-[#22D3FF]" />
        </a>
      </div>
    </div>
  );
};

CardProject.propTypes = {
  url: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
