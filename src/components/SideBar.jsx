import React from "react";
import { FaTasks } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import NavLink from "./NavLink";

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

const SideBar = () => {
  return (
    <aside className="bg-white dark:bg-black shadow-lg w-1/2 h-screen  md:w-1/6 transition-all hidden md:block dark:border-r dark:border-secondary">
      <div className="flex  flex-col gap-8">
        <div className="flex items-center gap-2"></div>
        <div className="flex flex-col gap-6">
          <NavLink />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
