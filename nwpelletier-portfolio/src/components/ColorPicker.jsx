import React, { useState } from "react";
import "./ColorPicker.css"; // new CSS file

const themes = {
  orange: "#ff7d03",
  blue: "#037dff",
  green: "#2e7d32",
  bw: "#222222",
};

export const ColorPicker = ({ currentTheme, onChange, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={className || ""} onMouseLeave={() => setOpen(false)}>
      <div
        onMouseEnter={() => setOpen(!open)}
        className="color-picker-active-circle"
        style={{ backgroundColor: themes[currentTheme] }}
        title={`Current theme: ${currentTheme}`}
      />

      {open && (
        <div className="color-picker-dropdown">
          {Object.entries(themes).map(([key, color]) => (
            <div
              key={key}
              onClick={() => {
                onChange(key);
                setOpen(false);
              }}
              className={`color-picker-circle ${
                key === currentTheme ? "active" : ""
              }`}
              style={{ backgroundColor: color }}
              title={key}
            />
          ))}
        </div>
      )}
    </div>
  );
};
