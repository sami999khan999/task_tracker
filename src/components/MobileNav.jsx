import { User } from "lucide-react";
import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import NavLink from "./NavLink";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(11);
  };

  return (
    <div className="md:hidden overflow-hidden">
      <Nav setIsOpen={setIsOpen} />

      <div
        className={`w-1/2 bg-gray-400 fixed top-0 flex flex-col pl-4 gap-8 h-screen transition-transform ease-in-out duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mt-4">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <FaTasks />
              <p>TastTracker</p>
            </div>
            <div
              className="p-1 w-5 h-5 bg-white flex justify-center items-center rounded-full"
              onClick={toggleSidebar}
            >
              <RxCross1 />
            </div>
          </div>
          <div className="border border-primary/40 mt-1"></div>
        </div>

        <NavLink />
      </div>
    </div>
  );
};

export default MobileNav;
