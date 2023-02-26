import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/About/AboutMe.js";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <AboutMe />
    <Projects />
    <Skills />
    <Footer />
   </div>
  )
}
