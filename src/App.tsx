import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-gray-600 font-medium items-center">
        {/* Navbar at the top */}
        <Navbar />
        {/* Main content */}
        <main className="flex flex-col flex-grow lg:w-[70%] w-[80%] md:px-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
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
