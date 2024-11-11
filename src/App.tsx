import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";
import "./styles/index.css";
import Projects from "./components/Projects";
import ProjectOne from "./components/ProjectOne";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <Router>
          <Footer />
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/01" element={<ProjectOne />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
