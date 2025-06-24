import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);
  return children;
};

const rectangles = [
  { top: "20%", left: "10%", width: "200px", height: "150px" },
  { top: "40%", left: "30%", width: "300px", height: "100px" },
  { top: "60%", left: "60%", width: "250px", height: "180px" },
  { top: "10%", left: "70%", width: "150px", height: "150px" },
  { top: "75%", left: "20%", width: "350px", height: "120px" },
];

function App() {
  return (
    <div className="app-layout">
      <Nav />
      <Wrapper>
        <div className="domed-footer">
          <svg
            className="dome-arc"
            viewBox="0 0 100 50"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,50 Q50,0 100,50 L100,100 L0,100 Z"
              fill="currentColor"
            />
          </svg>
        </div>
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
          {rectangles.map((rect, i) => (
            <div
              key={i}
              className="bg-rectangle"
              style={{
                position: "absolute",
                top: rect.top,
                left: rect.left,
                width: rect.width,
                height: rect.height,
              }}
            />
          ))}
        </div>
        <div className="page-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
