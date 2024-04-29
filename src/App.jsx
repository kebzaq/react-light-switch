import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";

function App() {
  // Option 1
  const [isOn, setIsOn] = useState(false);
  const lightOn = "./src/assets/on.png";
  const lightOff = "./src/assets/off.png";
  const toggle = () => {
    setIsOn(!isOn);
  };
  return (
    <>
      <Header />
      <div className="container">
        <img
          onClick={toggle}
          src={isOn ? lightOn : lightOff}
          alt="bulb on/off image"
        />
      </div>
      <Footer />
    </>
  );
  //option 2
  // const [bulb, setBulb] = useState("./src/assets/off.png");
  // const turnOnOff = () => {
  //   if (bulb === "./src/assets/off.png") setBulb("./src/assets/on.png");
  //   else setBulb("./src/assets/off.png");
  // };
  // return (
  //   <>
  //     <Header />
  //     <div className="container">
  //       <img onClick={turnOnOff} src={bulb} alt="bulb on/off image" />
  //     </div>
  //     <Footer />
  //   </>
  // );
}

export default App;
