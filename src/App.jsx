import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import FloatingContactButton from "./components/FloatingContactButton/FloatingContactButton";
import Home from "./pages/Home/Home";
import "./App.css";

function App() {
  return (
    <Router basename={import.meta.env.VITE_PUBLIC_URL || "/"}>
      <Navigation />
      <FloatingContactButton />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;