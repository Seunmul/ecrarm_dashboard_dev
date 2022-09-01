import React from "react";



const NavHeader = ({menuSelected}) => {
    let header = ""
    switch (menuSelected) {
        case 0:
            header = "Home Dashboard"
            break;
        case 1:
            header = "Detail information"
            break;
        case 2:
            header = "Control Panel"
            break;
        case 3:
            header = "Program Info"
            break;
        default:
            header = "error"
            break;
      }
  return (
   
    <div className="mx-3 d-none d-sm-block " style={{fontSize:"1.1rem"}}>{header}</div>
        
  );
};

export default NavHeader;
