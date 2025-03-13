import { useRef } from "react";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Project from "./Components/Project";
import Skill from "./Components/Skill";

function App() {
  const sectionRefs = {
    introRef: useRef(),
    skillRef: useRef(),
    projectRef: useRef(),
    aboutMeRef: useRef(),
    footerRef: useRef(),
  };
  return (
    <>
      <Header sectionRefs={sectionRefs} />
      <Intro ref={sectionRefs.introRef} />
      <Skill ref={sectionRefs.skillRef} />
      <Project ref={sectionRefs.projectRef} />
      <AboutMe ref={sectionRefs.aboutMeRef} />
      <Footer ref={sectionRefs.footerRef} />
    </>
  );
}

export default App;
