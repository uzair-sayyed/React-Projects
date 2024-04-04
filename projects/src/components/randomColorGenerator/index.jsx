import { useState } from "react";
import "./randomColor.css";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    // console.log(hexColor);
    setColor(hexColor);
    console.log(color);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
    console.log(color);
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: color,
        paddingTop: "2rem",
      }}
    >
      <button
        onClick={() => {
          setTypeOfColor("hex");
          setColor("#000000");
        }}
      >
        Create HEX Color
      </button>
      <button
        onClick={() => {
          setTypeOfColor("rgb");
          setColor("rgb(0,0,0)");
        }}
      >
        Create RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>

      <div style={{ marginTop: "7rem" }}>
        <h1 style={{ color: "white" }}>
          {typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}
        </h1>
        <h1 style={{ color: "white" }}>{color}</h1>
      </div>
    </div>
  );
}
