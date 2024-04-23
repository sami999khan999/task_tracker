import React from "react";
import { MdOutlineDashboard } from "react-icons/md";

const sideBarData = [
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    name: "Dashboard",
    icon: <MdOutlineDashboard />,
  },
];

const NavLink = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {sideBarData.map((item, index) => (
        <div
          className="flex items-center gap-5"
          key={index}
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <div className="">{item.icon}</div>
          <div className="">{item.name}</div>
        </div>
      ))}
    </>
  );
};

export default NavLink;
