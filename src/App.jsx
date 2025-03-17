import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Project from "./Components/Project";
import Skill from "./Components/Skill";
import { FloatButton } from "antd";

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Skill />
      <Project />
      <AboutMe />
      <Footer />
      <FloatButton.BackTop />
    </>
  );
}

export default App;
