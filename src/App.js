import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const[light, setLight] = useState("");
  return (
    <div id="light">
      <div className="box">
        <div className={`light ${light === "red" ? "red_light" : ""}`} id="RED"></div>
        <div className={`light ${light === "yellow" ? "yellow_light" : ""}`} id="YELLOW"></div>
        <div className={`light ${light === "green" ? "green_light" : ""}`} id="GREEN"></div>
      </div>
      <button id="Red" onClick={() => setLight("red")}>Stop</button>
      <button id="Yellow" onClick={() => setLight("yellow")}>Ready</button>
      <button id="Green" onClick={() => setLight("green")}>Go</button>
    </div>
  );
}

export default App;
