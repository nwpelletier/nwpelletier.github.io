import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ScreenSizeContext } from "../contexts/ScreenSizeContext.jsx";

const Nav = () => {
  const { isMobile } = useContext(ScreenSizeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navClass = isMobile ? "nav-mobile" : "nav-desktop";
  const handleLinkClick = () => {
    if (isMobile) setMenuOpen(false);
  };
  return (
    <div className={`nav-container ${navClass}`}>
      {isMobile && (
        <>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "X" : "☰"}
          </button>
          {menuOpen && (
            <div className="mobile-menu">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "tab active" : "tab")}
                onClick={handleLinkClick}
              >
                home
              </NavLink>
              <NavLink
                to="/projects"
                className={({ isActive }) => (isActive ? "tab active" : "tab")}
                onClick={handleLinkClick}
              >
                projects
              </NavLink>
              <NavLink
                to="/resume"
                className={({ isActive }) => (isActive ? "tab active" : "tab")}
                onClick={handleLinkClick}
              >
                resume
              </NavLink>
              <NavLink
                to="/testpage"
                className={({ isActive }) => (isActive ? "tab active" : "tab")}
                onClick={handleLinkClick}
              >
                testpage
              </NavLink>
            </div>
          )}
        </>
      )}

      {!isMobile && (
        <>
          <div className="desktop-menu">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "tab active" : "tab")}
            >
              home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? "tab active" : "tab")}
            >
              projects
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) => (isActive ? "tab active" : "tab")}
            >
              resume
            </NavLink>
            <NavLink
              to="/testpage"
              className={({ isActive }) => (isActive ? "tab active" : "tab")}
            >
              testpage
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;
