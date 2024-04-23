import { User } from "lucide-react";
import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import NavLink from "./NavLink";
import ThemeToggler from "./ThemeToggler";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log(11);
  };

  return (
    <div className="md:hidden overflow-hidden">
      <nav className="h-12 flex shadow-2xl">
        <div className="container mx-auto flex items-center justify-between ">
          <div
            className="text-primary"
            onClick={() => setIsOpen((prv) => !prv)}
          >
            <GrTasks size={24} />
          </div>
          <div className="flex items-center gap-2 text-primary">
            <User size={20} />
            <ThemeToggler />
          </div>
        </div>
      </nav>

      <div
        className={`w-1/2 bg-gray-400 fixed top-12 z-50 left-0 flex flex-col pl-4 gap-8 h-screen transform transition-all ease-in-out duration-200${
          isOpen ? "translate-x-0" : "translate-x-full"
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
