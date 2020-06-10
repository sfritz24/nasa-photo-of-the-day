import React from "react";
import "./App.css";
import ImgContainer from "./Img";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h1>Welcome to <span className="nasa">NASA</span>'s Picture of the Day!</h1>
      <ImgContainer />
    </div>
  );
}

export default App;
