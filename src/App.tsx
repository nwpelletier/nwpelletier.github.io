import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-gray-600 font-medium items-center">
        <Background />
        {/* Navbar at the top */}
        <Navbar />
        {/* Main content */}
        <main className="flex flex-col flex-grow w-[100%] sm:-w-[80%] lg:w-[70%] px-2 sm:px-8 md:px-10 lg:px-20 z-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route
              path="/projects"
              element={<Projects />}
            />
            {/* <Route
              path="/projects"
              element={<Projects />}
            /> */}
          </Routes>

          {/* Footer inside main */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
