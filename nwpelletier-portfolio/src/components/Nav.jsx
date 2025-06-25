import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { ScreenSizeContext } from "../contexts/ScreenSizeContext.jsx";
import { ThemeContext } from "../contexts/ThemeContext.jsx";
import { ColorPicker } from "./ColorPicker.jsx";

const Nav = () => {
  const { isMobile } = useContext(ScreenSizeContext);
  const { themeKey, setThemeKey } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navClass = isMobile ? "nav-mobile" : "nav-desktop";
  const handleLinkClick = () => {
    if (isMobile) setMenuOpen(false);
  };
  return (
    <div className={`nav-container ${navClass}`}>
      {!isMobile && (
        <ColorPicker
          currentTheme={themeKey}
          onChange={setThemeKey}
          className={`color-picker-desktop`}
        />
      )}

      <div className={navClass}>
        {isMobile && (
          <>
            <ColorPicker
              currentTheme={themeKey}
              onChange={setThemeKey}
              className={`color-picker-mobile`}
            />
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
                  className={({ isActive }) =>
                    isActive ? "tab active" : "tab"
                  }
                  onClick={handleLinkClick}
                >
                  home
                </NavLink>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "tab active" : "tab"
                  }
                  onClick={handleLinkClick}
                >
                  projects
                </NavLink>
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    isActive ? "tab active" : "tab"
                  }
                  onClick={handleLinkClick}
                >
                  resume
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
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
