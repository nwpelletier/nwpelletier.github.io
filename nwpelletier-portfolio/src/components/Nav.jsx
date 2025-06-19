import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav-container">
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
  );
};

export default Nav;
