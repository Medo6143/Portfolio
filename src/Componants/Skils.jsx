import { Skill } from "./Skil";
import Urlicon from "../assets/iconUrl";
export const Skils = () => {
  return (
    <section id="skills" className="mt-[12rem]">
      <div className="container mx-auto text-center  ">
        <h1
          data-aos="fade-up-left"
          className="hove text-3xl text-white font-bold w-2/3  sm:w-1/4 mx-auto p-3 rounded-full cursor-pointer bg-[#0F172A] border-2 border-b-[#32D3FF]  "
        >
          Skills & Tools
        </h1>
      </div>

      <div className="bg-[#222222] w-full sm:w-[70%] mx-auto rounded-3xl mt-16 h-[500px] sm:h-[400px] p-6 grid sm:grid-cols-4 grid-cols-3   sm:gap-1  ">
        {Urlicon.map((src, index) => (
          <Skill url={src} key={index} />
        ))}
      </div>
    </section>
  );
};
