import React from "react";
import "./App.css";
import Display from "./components/Display";
import Button from "./components/Button";

function App() {
  return (
    <div className="calculator">
      <Display />
      <Button />
    </div>
  );
}
export default App;
