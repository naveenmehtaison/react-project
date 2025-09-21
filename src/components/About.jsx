import React from "react";
import profilephoto from "../assets/Profile.jpg";
import { motion } from "motion/react";
import sunset from "../assets/sunset.jpg";
import cool from "../assets/cool.jpg";
import Typewriter from "../CoustomHooks/useTypewriter";
export default function About() {
  const Profession = Typewriter(
    [
      "Frontend Developer",
      "Backend Developer",
      "Designer",
      "FullStackDeveloper",
    ],
    900
  );
  const name = Typewriter("Naveen", 300);

  const Build = Typewriter(["Website", "WebApp", "MobileApp"], 1100);
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className=" bg-[url('https://images.unsplash.com/photo-1645668160759-55565bd94987?q=80&w=1206&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center h-screen  container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hi, I'm {name}. I'm a {Profession}.
              <br className="hidden lg:inline-block" />I love to build amazing{" "}
              {Build}.
            </h1>

            <p className="mb-8 leading-relaxed">
              Full-stack developer proficient in .NET, Angular, React, Node.js,
              and the MERN stack, with strong expertise in TypeScript and SQL.
              Experienced in building scalable web applications, REST APIs, and
              dynamic front-end interfaces. Passionate about delivering clean,
              efficient, and maintainable code across the full stack.”
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
              >
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover rounded-3xl mt-10 left-0 object-center "
              alt="hero"
              src={cool}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
