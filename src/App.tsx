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
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Navbar />
      <div className="pt-20">
        <Home />
        <TechStack />
        <WorkExperience />
      </div>
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold text-white mb-6">Featured Project</h2>

        <Projects/>
      </section>
      
        <Contact/>
        <Footer />
      
    </ThemeProvider>
  );
}
export default App;
