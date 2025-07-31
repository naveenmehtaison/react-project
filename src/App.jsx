import React from "react";
import About from "./components/About";
import Contact from "./components/Contacts";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import AnimatedCursor from "react-animated-cursor";
export default function App() {
  return (
    <main className="text-gray-400 bg-black body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <AnimatedCursor
        innerSize={16}
        outerSize={30}
        color="59, 130, 246"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        trailingSpeed={20}
      />
    </main>
  );
}
