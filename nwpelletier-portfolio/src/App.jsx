import { Routes, Route } from "react-router-dom";
import { useLayoutEffect } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const Wrapper = ({ children }) => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return children;
};

function App() {
  return (
    <div className="app-layout">
      <Nav />
      <Wrapper>
        <div className="domed-footer"></div>
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
            <Route
              path="/projects"
              element={<Projects />}
            />
            {/* No /resume route anymore */}
          </Routes>
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
