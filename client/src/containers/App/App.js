import React from "react";
import logo from "../../../assets/images/SVG/logo.svg";
import "./App.css";

import ImagesContainer from "../../components/Image/ImagesContainer";

const App = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>Welcome to Image Gallery</h2>
      </div>
      <ImagesContainer rows="15" />
    </div>
  );
};

export default App;
