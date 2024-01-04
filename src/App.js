// src/App.js
import React from "react";
import Maze from "./Maze";

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <nav
        style={{
          backgroundColor: "lightgray",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <h1>Maze Solver App</h1>
        <ul style={{ listStyle: "none", display: "flex", padding: 0 }}>
          <li style={{ marginRight: "20px" }}>Home</li>
          <li style={{ marginRight: "20px" }}>About</li>
          <li style={{ marginRight: "20px" }}>Contact</li>
          <li>Settings</li>
        </ul>
      </nav>
      <Maze />
    </div>
  );
};

export default App;
