import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar.tsx";
import About from "./pages/About.tsx";
import Launch from "./pages/Launch.tsx";
import Projects from "./pages/Projects.tsx";
import Experience from "./pages/Experience.tsx";
import AdminLogin from "./pages/admin/Login.tsx";
import AdminDashboard from "./pages/admin/Dashboard.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="outfit-font">
              <Navbar />
              <div className="" id="home">
                <Launch />
              </div>
              <div className="  " id="about">
                <About />
              </div>
              <div className="  " id="projects">
                <Projects />
              </div>
              <div className="  " id="experience">
                <Experience />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
