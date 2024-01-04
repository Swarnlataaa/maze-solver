import React, { useState, useEffect } from "react";

const Cell = ({ value }) => (
  <div
    style={{
      flex: "1 0 auto",
      aspectRatio: "1/1",
      border: "1px solid #333",
      backgroundColor: getColor(value),
    }}
  ></div>
);

const getColor = (value) => {
  switch (value) {
    case "1":
      return "#333"; // Wall
    case ".":
      return "#fff"; // Path
    case "S":
      return "#3498db"; // Start
    case "E":
      return "#e74c3c"; // End
    case "A":
      return "#27ae60"; // Additional block type 1
    case "B":
      return "#f39c12"; // Additional block type 2
    // Add more block types as needed
    default:
      return "#8dc63f"; // Default
  }
};

const generateMaze = () => {
  return [
    [
      "S",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
    ],
    [
      ".",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
    ],
    [
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
    ],
    [
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
    ],
    [
      "1",
      "0",
      "1",
      "0",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
    ],
    [
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
    ],
    [
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
    ],
    [
      "1",
      "0",
      "0",
      "0",
      "0",
      "0",
      "0",
      "1",
      "0",
      "0",
      "0",
      "1",
      "0",
      "1",
      "0",
      "1",
      "0",
      "0",
      "0",
      "E",
    ],
  ];
};

const Maze = () => {
  const [maze, setMaze] = useState(generateMaze());
  const [path, setPath] = useState([]);
  const [blockType, setBlockType] = useState("A"); // Default block type

  const handleCellClick = (row, col) => {
    const updatedMaze = [...maze];
    updatedMaze[row][col] = updatedMaze[row][col] === "1" ? "0" : blockType;
    setMaze(updatedMaze);
    setPath([]); // Clear the path when the maze is modified
  };

  const changeBlockType = (newBlockType) => {
    setBlockType(newBlockType);
  };

  const dfs = (row, col) => {
    // DFS implementation...
  };

  const solveMaze = () => {
    // Solving algorithm...
  };

  const findStart = () => {
    // Finding start position...
  };

  useEffect(() => {
    solveMaze();
  }, [maze]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        gap: "1px",
        margin: "20px",
        flex: 1,
      }}
    >
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <button onClick={() => changeBlockType("A")}>Block Type 1</button>
        <button onClick={() => changeBlockType("B")}>Block Type 2</button>
        {/* Add more block type buttons as needed */}
      </div>
      {maze.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{ display: "flex", flex: 1, margin: "-1px" }}
        >
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              value={cell}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
      {path.length > 0 && (
        <div style={{ display: "flex", flex: 1, margin: "-1px" }}>
          {path.map((point, index) => (
            <Cell key={index} value={"."} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Maze;
