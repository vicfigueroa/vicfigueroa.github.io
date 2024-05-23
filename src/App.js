import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./Navigation/Navbar";
import Footer from "./Navigation/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
