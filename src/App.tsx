import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Skills from "./components/Skills";
import "./styles/index.css";

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
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
