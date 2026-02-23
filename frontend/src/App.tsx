import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ChatWidget from "./components/ChatWidget";
import Footer from "./components/Footer";
import Hackathons from "./components/Hackathons";
import Architecture from "./components/Architecture";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Hackathons />
      <Architecture />
      <ChatWidget />
      <Footer />
    </>
  );
}

export default App;