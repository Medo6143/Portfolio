import { useState } from "react";
import projects from "../assets/projects";
import { ButtonFilter } from "./ButtonFilter";
import { CardProject } from "./CardProject";
export const Projects = () => {
  const [project, setProject] = useState(projects);

  // filter projects
  const react = "React&Tailwind";
  const tailwind = "React&Tailwind";
  const bootstrap = "Bootstrap";
  const js = "js";
  const css = "css";

  const FilterProject = (catagory) => {
    setProject(projects.filter((project) => project.category === catagory));
  };
  return (
    <section id="projects" className="mt-[10rem]">
      <div className="text-center w-full flex justify-center">
        <h1
          data-aos="fade-up"
          data-aos-duration="3000"
          className="border-[1px] text-2xl text-white  bg-gray-800 hove font-bold text-center p-3 w-[400px] rounded-2xl  "
        >
          Projects
        </h1>
      </div>
      {/* filter Buttons */}
      <div className="flex gap-3  justify-center mt-10 flex-wrap">
        <ButtonFilter
          button={"All"}
          click={() => {
            setProject(projects);
          }}
        />
        <ButtonFilter button={"React"} click={() => FilterProject(react)} />
        <ButtonFilter
          button={"Tailwind"}
          click={() => FilterProject(tailwind)}
        />
        <ButtonFilter
          button={"Bootstap"}
          click={() => FilterProject(bootstrap)}
        />
        <ButtonFilter button={"js"} click={() => FilterProject(js)} />
        <ButtonFilter button={"Css"} click={() => FilterProject(css)} />
      </div>
      {/* Area projects */}
      <div className="flex flex-wrap gap-0 mt-20">
        {project.map((project, index) => (
          <CardProject
            key={index}
            url={project.img}
            demo={project.demo}
            code={project.code}
          />
        ))}
      </div>
    </section>
  );
};
