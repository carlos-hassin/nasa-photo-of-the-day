import React, {useState, useEffect} from "react";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import NavBar from "./components/Navbar";
import "./App.css";

function App() {
  const[data, setData] = useState({});
useEffect(() => {
  axios.get("https://api.nasa.gov/planetary/apod?api_key=A31TdYcakaEAs1ugPSB2UIVS7CWPbehx2V5ShMb3")
  .then(res => {
    console.log(res.data)
    setData(res.data)
  })
  .catch(error =>{
    console.log("Error", error)
  })
}, [])

  return (
    <div className="App">
      <NavBar/>
      <ImageCard
      data = {data}/>
    </div>
  );
}

export default App;
