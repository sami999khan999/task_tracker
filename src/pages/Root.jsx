import React from "react";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";

const Root = ({ children }) => {
  return (
    <div className="w-full">
      <div className="hidden md:block w-full">
        <Nav />
      </div>
      <div className="flex ">
        <SideBar />
        <div className="w-5/6">{children}</div>
      </div>
    </div>
  );
};

export default Root;
