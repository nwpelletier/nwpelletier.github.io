import React, { useState } from "react";
import "./ColorPicker.css"; // new CSS file

const themes = {
  blue: "#037dff",
  bw: "#222222",
  purple: "#7b3ff2",
  red: "#cc1f1f",
  teal: "#008080",
  sand: "#c2a670",
  mint: "#2bb673",
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
