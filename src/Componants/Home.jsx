import { useState, useEffect, useRef } from "react";
import cv from "../cv/CV.pdf";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import url from "../cv/mohab.png";
export const Home = () => {
  const positions = ["Mechanical Engineer"];
  const [positionIndex, setPositionIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionIndex((index) => (index + 1) % positions.length);
      setTypingIndex(0);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = positions[positionIndex];
    const typingEffect = setInterval(() => {
      textRef.current.innerText = text.slice(0, typingIndex + 1);
      setTypingIndex((index) => index + 1);
      if (typingIndex >= text.length) {
        clearInterval(typingEffect);
      }
    }, 100);
    return () => clearInterval(typingEffect);
  }, [positionIndex, typingIndex]);

  return (
    <section
      id="home"
      className="sm:h-[500px] container flex sm:justify-around items-center sm:text-start flex-col sm:flex-row text-center font-mono "
    >
      <div
        className="text-white sm:w-3/6 w-5/6 mt-2 items-center  "
        data-aos="flip-left"
      >
        <h2 className="font-bold sm:text-2xl text-xl ">
          HI, I&apos;M Mohab Mahmoud
        </h2>
        <h3 className="sm:text-3xl mb-6 text-[20px] font-bold ">
          I Am a{" "}
          <span className="text-[#32D3FF] font-bold" ref={textRef}></span> |
        </h3>
        <p className="text-wrap ">
          I am a Mechanical Engineer with expertise in designing and optimizing
          mechanical systems, I’m passionate about turning
          ideas into efficient, high-quality products, and I’m dedicated to
          staying at the forefront of technological advancements in my field.
        </p>
        <div className=" mt-4 justify-center flex flex-col items-center gap-4 ">
          <a
            href={cv}
            download
            className="hove border-[2px] px-6 py-3 border-b-[#31CFFB] border-r-[#31CFFB] bg-[#0F172A] rounded-xl font-serif "
          >
            Download CV
          </a>
          <ul className="flex gap-4">
            <li className="cur cursor-pointer hover:text-[#32D3FF]">
              {" "}
              <a
                target="blank"
                href="https://www.facebook.com/share/r6yMhK74baTHh3j5/?mibextid=qi20mg"
              >
                <FaFacebook size={25} />
              </a>
            </li>
            <li className="cur cursor-pointer hover:text-[#32D3FF]">
              {" "}
              <a target="blank" href="https://github.com/Mohab-Mahmoud9">
                <FaGithub size={25} />
              </a>
            </li>
            <li className="cur cursor-pointer hover:text-[#32D3FF]">
              <a
                target="blank"
                href="https://www.linkedin.com/in/mohab-m-55bb761bb/"
              >
                <FaLinkedin size={25} />
              </a>
            </li>
            <li className="cur cursor-pointer hover:text-[#32D3FF]">
              <a target="blank" href="https://wa.me/01015977091">
                <FaWhatsapp size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="bg-black hove sm:w-[330px] w-5/6 h-[75%]  mt-7  animation-border "
      >
        <img
          src={url}
          alt="Mohab img"
          className="  w-[95%] -mt-8 mx-auto  rounded-lg"
        />
      </div>
    </section>
  );
};
