import React, { useState } from "react";

const ThemeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);
  const text = darkMode ? "Light Mode" : "Dark Mode";

  return (
    <>
      <button onClick={() => setDarkMode(!darkMode)}>{text}</button>
      <style jsx>{`
        button {
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
        }
      `}</style>
    </>
  );
};

export default ThemeSwitch;
