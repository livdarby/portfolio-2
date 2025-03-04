import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";
import "./styles/index.css";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import DogsHomeFull from "./components/DogsHomeFull";
import FPLBlackBox from "./components/FPLBlackBox";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <Router>
          <Footer />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/fpl-blackbox" element={<FPLBlackBox />} />
            <Route path="/projects/dogs-home" element={<DogsHomeFull />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
