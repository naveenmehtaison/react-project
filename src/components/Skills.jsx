import { frontendSkills } from "../data";
import { backendSkills, toolsAndWorkflow } from "../data";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import Card from "./Card";
export default function Skills() {
  const renderSkillSection = (title, skillsArray) => (
    <div className="mb-12 m-2">
      <h2 className="text-2xl text-white font-semibold mb-4">{title}</h2>
      <div className="flex flex-wrap m-2 p-1 lg:p-0  lg:m-0">
        {skillsArray.map((skill) => (
          <Card
            icon={skill?.icon}
            name={skill?.name}
            color={skill?.color}
            key={skill?.name}
          />
          // <div key={skill} className="p-2 sm:w-1/2 w-full">
          //   <div className="bg-gray-800 rounded flex p-4 h-full items-center">
          //     <span className="title-font font-medium text-white">{skill}</span>
          //   </div>
          // </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto ">
        <div className="text-center mb-16">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400">
            A strong combination of frontend, backend, and development tools for
            building modern web applications.
          </p>
        </div>

        {renderSkillSection("Frontend", frontendSkills)}
        {renderSkillSection("Backend", backendSkills)}
        {renderSkillSection("Tools & Workflow", toolsAndWorkflow)}
      </div>
    </section>
  );
}
