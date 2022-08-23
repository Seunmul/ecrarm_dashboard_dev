import React, { useState } from "react";
import Navigation from "./components/nav/Navigation";
import SideBar from "./components/sidebar/SideBar";
import Divider from "./components/Divider";
import Footer from "./components/footer/Footer";
import Home from "./components/main/Home";
import Detail from "./components/main/Detail";
import Information from "./components/main/Information";
import ControlPanel from "./components/main/ControlPanel";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

const Main = ({ menuSelected }) => {
  const style={
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100%",
    marginTop: "10px",
    padding: "30px",
  }
  switch (menuSelected) {
    case 0:
      return <Home style={style}/>;
    case 1: // if (x === 'value2')
      return <Detail style={style}/>;
    case 2: // if (x === 'value2')
      return <ControlPanel style={style}/>;
    case 3: // if (x === 'value2')
      return <Information style={style}/>;
    default:
      return <div>"No DATA"</div>;
  }
};
function App() {
  const [menuSelected, setMenuSelected] = useState(+0);
  const menuSelectHandler = (menuNumber) => {
    setMenuSelected((prev) => +menuNumber);
  };

  return (
    <div className="App">
      <SideBar menuSelected={menuSelected} onMenuSelect={menuSelectHandler} />
      <Divider />
      <div className="App-main-vertical">
        <Navigation style={{ width: "100%" }} />
        <Main
          menuSelected={menuSelected}
          
        />
        <Footer />
      </div>
      <Divider />
    </div>
  );
}

export default App;
