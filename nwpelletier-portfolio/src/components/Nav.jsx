import React, {
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { ScreenSizeContext } from "../contexts/ScreenSizeContext.jsx";
import { ThemeContext } from "../contexts/ThemeContext.jsx";
import { ColorPicker } from "./ColorPicker.jsx";

const Nav = () => {
  const { isMobile } = useContext(ScreenSizeContext);
  const { themeKey, setThemeKey } =
    useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const toggleRef = useRef(null);

  const navClass = isMobile ? "nav-mobile" : "nav-desktop";

  const handleLinkClick = () => {
    if (isMobile) setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [menuOpen]);

  return (
    <div className={`nav-container ${navClass}`}>
      {!isMobile && (
        <ColorPicker
          currentTheme={themeKey}
          onChange={setThemeKey}
          className="color-picker-desktop"
        />
      )}

      <div className={navClass}>
        {isMobile && (
          <>
            <ColorPicker
              currentTheme={themeKey}
              onChange={setThemeKey}
              className="color-picker-mobile"
            />

            <button
              ref={toggleRef}
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "X" : "☰"}
            </button>

            <div
              className={`screen-overlay ${
                menuOpen ? "visible" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            />

            {menuOpen && (
              <div className="mobile-menu" ref={menuRef}>
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
                <a
                  href="/Nicholas_Pelletier_Resume_August2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tab"
                  onClick={handleLinkClick}
                >
                  resume
                </a>
              </div>
            )}
          </>
        )}

        {!isMobile && (
          <div className="desktop-menu">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "tab active" : "tab"
              }
            >
              home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "tab active" : "tab"
              }
            >
              projects
            </NavLink>
            <a
              href="/Nicholas_Pelletier_Resume_August2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="tab"
            >
              resume
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
