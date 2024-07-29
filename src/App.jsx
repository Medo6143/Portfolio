import { useEffect } from "react";
import { About } from "./Componants/About";
import { Header } from "./Componants/Header";
import { Home } from "./Componants/Home";
import { Skils } from "./Componants/Skils";
import "aos/dist/aos.css";
import Aos from "aos";
import { Projects } from "./Componants/Projects";
import { Contact } from "./Componants/Contact";

function App() {
  useEffect(() => {
    Aos.init({
      // Global settings:
      duration: 2000,
      easing: "ease",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <div >
      <Header />
      <main>
        <Home />
        <About />
        <Skils />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
