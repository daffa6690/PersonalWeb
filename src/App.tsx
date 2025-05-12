import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ThemeProvider } from "./components/ThemeProvider";
import Projects from "./pages/Projects";
import WorkExperience from "./pages/WorkExperiences";
import TechStack from "./pages/TechStack";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
      <div className="w-fit">
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar />
        <div className="pt-20">
          <Home />
          <TechStack />
          <WorkExperience />
        </div>
        <section className="mx-auto px-4 py-10">
        
          <Projects />
        </section>

        <Contact />
        <Footer />
    </ThemeProvider>
      </div>
  );
}
export default App;
