import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/About/AboutMe.js";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <AboutMe />
    <Projects />
    <Skills />
   </div>
  )
}
