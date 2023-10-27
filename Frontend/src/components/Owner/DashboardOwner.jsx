import React, { useState } from "react";
import SetRawMaterial from "./SetRawMaterial";
import ViewRawFoodMaterial from "./ViewRawMaterial";
import Header from "./Dashboard/Header";
import Sidebar from "./Dashboard/Sidebar";
import Home from "./Dashboard/Home";

const DashboardOwner = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <>
      {/* <SetRawMaterial />
      <ViewRawFoodMaterial/> */}

      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Home />
      </div>
    </>
  );
};

export default DashboardOwner;
