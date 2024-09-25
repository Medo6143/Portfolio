import { useState, useEffect, useRef } from "react";
import image from "../assets/Animation - 1721902992703.json";
import Lottie from "lottie-react";
import cv from "../cv/Mohamed_Wael_CV.pdf";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
export const Home = () => {
  const positions = ["FRONT-END DEVELOPER", "REACT.JS DEVELOPER"];
  const [positionIndex, setPositionIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionIndex((index) => (index + 1) % positions.length);
      setTypingIndex(0);
    }, 6000);
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
    }, 200);
    return () => clearInterval(typingEffect);
  }, [positionIndex, typingIndex]);

  return (
    <section
      id="home"
      className="sm:h-[500px] container flex sm:justify-around items-center sm:text-start my-12 flex-col sm:flex-row text-center font-mono "
    >
      <div
        className="text-white sm:w-3/6 w-5/6 mt-2 items-center  "
        data-aos="flip-left"
      >
        <h2 className="font-bold sm:text-2xl text-xl ">
          HI, I&apos;M MOHAMED WAEL
        </h2>
        <h3 className="sm:text-3xl mb-6 text-[20px] font-bold ">
          I AM A{" "}
          <span className="text-[#32D3FF] font-bold" ref={textRef}></span> |
        </h3>
        <p className="text-wrap ">
          I Am A Passionate React.Js Developer. With A Strong Background In Web
          Development And A Love For Building User-Friendly Interfaces, I Thrive
          On Bringing Ideas To Life Through The Power Of React
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
                href="https://www.facebook.com/profile.php?id=100037952316588&locale=ar_AR"
              >
                <FaFacebook size={25} />
              </a>
            </li>
            <li className="cur cursor-pointer hover:text-[#32D3FF]">
              {" "}
              <a target="blank" href="https://github.com/Medo6143">
                <FaGithub size={25} />
              </a>
            </li>
            <li className="cur cursor-pointer hover:text-[#32D3FF]">
              <a
                target="blank"
                href="https://www.linkedin.com/in/mohamed-wael-469744273/"
              >
                <FaLinkedin size={25} />
              </a>
            </li>
            <li className="cur cursor-pointer hover:text-[#32D3FF]">
              <a target="blank" href="https://wa.me/01001324231">
                <FaWhatsapp size={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="bg-black hove sm:w-2/6 w-5/6 md:h-[70%] h-[70%] sm:h-[50%] rounded-lg items-center mt-7 animation-border "
      >
        <Lottie
          animationData={image}
          loop={true}
          className="sm:w-[200px] w-[300px]  md:w-[300px] mx-auto mt-8 "
        />

      </div>
    </section>
  );
};
