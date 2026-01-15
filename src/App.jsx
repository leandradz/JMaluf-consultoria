import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import FloatingContactButton from "./components/FloatingContactButton/FloatingContactButton";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import "./App.css";

function App() {
  return (
    <Router basename={import.meta.env.VITE_PUBLIC_URL || "/"}>
      <Navigation />
      <FloatingContactButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;