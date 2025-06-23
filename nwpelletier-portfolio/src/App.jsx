import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NewProjects from "./pages/NewProjects";
import Resume from "./pages/Resume";
import TestPage from "./pages/TestPage";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div className="app-layout">
      <Nav />
      <Wrapper>
        <div className="bg-decor">
          <div
            className="bg-circle"
            style={{
              top: "15%",
              left: "15%",
              width: "120px",
              height: "120px",
            }}
          ></div>
          <div
            className="bg-circle"
            style={{
              top: "40%",
              left: "80%",
              width: "200px",
              height: "200px",
            }}
          ></div>
          <div
            className="bg-circle"
            style={{
              top: "70%",
              left: "30%",
              width: "80px",
              height: "80px",
            }}
          ></div>
        </div>
        <div className="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/newprojects" element={<NewProjects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/testpage" element={<TestPage />} />
          </Routes>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
