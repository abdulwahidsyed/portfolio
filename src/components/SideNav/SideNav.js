import React from "react";
import "./SideNav.css";
import closeIcon from "../../assets/close.png";

const SideNav = ({ closeSideNav }) => {
  return (
    <div>
      <div className="side-wrapper" onClick={closeSideNav}></div>
      <div className="sideNav">
        <div className="side-head" onClick={closeSideNav}>
          <img src={closeIcon} />
        </div>
        <h4>Sidenav</h4>
      </div>
    </div>
  );
};

export default SideNav;
