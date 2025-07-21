import Hero from "../pages/Hero";
import TechStack from "../pages/TechStack";
// import WorkExperience from "./pages/WorkExperiences";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
      <div className="w-fit pt-5 ">
        <Navbar/>
          <Hero />
          <TechStack />
          {/* <WorkExperience /> */}
          <Projects />
          <Contact />
          <Footer/>
      </div>
  );
}
export default Home;
