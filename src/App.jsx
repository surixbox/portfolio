import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CursorLight from "./components/CursorLight";

function App() {
  return (
    <main className="min-h-screen selection:bg-[var(--color-accent)] selection:text-white">
      <CursorLight />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Interests />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
