import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";
import "./styles/index.css";
import Projects from "./components/Projects";
import ProjectOne from "./components/ProjectOne";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen relative">
        <Router>
          <Footer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/01" element={<ProjectOne />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
