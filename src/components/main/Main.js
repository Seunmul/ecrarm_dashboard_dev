import Home from "./Home";
import Detail from "./Detail";
import Information from "./Information";
import ControlPanel from "./ControlPanel";

const Main = ({ menuSelected }) => {
    const style = {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      marginTop: "10px",
      padding: "30px",
    };
    switch (menuSelected) {
      case 0:
        return <Home style={style} />;
      case 1:
        return <Detail style={style} />;
      case 2:
        return <ControlPanel style={style} />;
      case 3:
        return <Information style={style} />;
      default:
        return <div>"No DATA"</div>;
    }
  };

export default Main