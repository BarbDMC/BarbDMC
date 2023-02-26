import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/About/AboutMe.js";

export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <AboutMe />
   </div>
  )
}
