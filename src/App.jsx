import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";
import AnimateSection from "./components/AnimateSection";
import SectionGlow from "./components/SectionGlow";
import Status from "./components/Status";
import SoftParticles from "./components/SoftParticles";
// import ScrollGlow from "./components/ScrollGlow";
// import SectionAwareGlow from "./components/SectionAwareGlow";
import DynamicSectionGlow from "./components/DynamicSectionGlow";
import TypingText from "./components/TypingText";


function App() {
  return (
    <>
      <Navbar />
      {/* <TypingText/>  */}
      <DynamicSectionGlow />
      
      {/* <SectionAwareGlow /> */}
      {/* <ScrollGlow />  */}
       <SoftParticles />
      {/* HOME (Hero already contains Status internally) */}
      <Hero />
      <AnimateSection>
        {/* <SectionGlow> */}
          <Status />
        {/* </SectionGlow> */}
      </AnimateSection>

      <SectionDivider />

      {/* PROJECTS */}
      <AnimateSection direction="left">
        <SectionGlow>
          <Projects />
        </SectionGlow>
      </AnimateSection>

      {/* SKILLS */}
      <AnimateSection direction="right">
        <SectionGlow>
          <Skills />
        </SectionGlow>
      </AnimateSection>

      <AnimateSection>
        <About />
      </AnimateSection>

      <AnimateSection>
        <Contact />
      </AnimateSection>

      <Footer />
    </>
  );
}

export default App;
