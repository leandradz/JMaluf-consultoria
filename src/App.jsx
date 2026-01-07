import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <Router basename={import.meta.env.VITE_PUBLIC_URL || "/"}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;