import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <>
      <Nav />
      <div className="page-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/testpage" element={<TestPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
