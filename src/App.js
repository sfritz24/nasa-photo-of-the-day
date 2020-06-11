import React, {useState, useEffect} from "react";
import "./App.css";
import ImgContainer from "./Img";
import axios from "axios";

function App() {
  const [data, setData] = useState({})

  useEffect(() =>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=HoDqptrUUu8FEzoE0Es98M7Oheu9etuggLudxiBG")
    .then(response =>{
      setData(response.data)
      console.log(response.data)
    })
    .catch(error =>{
      console.log('this is the error:', error)
    })
  })

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <h1>Welcome to <span className="nasa">NASA</span>'s Picture of the Day!</h1>
      <ImgContainer data={data}/>
    </div>
  );
}

export default App;
