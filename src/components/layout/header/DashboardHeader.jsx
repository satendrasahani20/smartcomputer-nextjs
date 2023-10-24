import Image from "next/image";
import React from "react";

const DashboardHeader = () => {
  return (
    <div className="header">
      <div className="top_header d-flex">
        <div className="logo">
          <a href="#">
            {/* <Image height="97" src={Logo} alt="logo" /> */}
          </a>
        </div>
        <div className="top_heading">
          <h1>Smart Computer Institute</h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
