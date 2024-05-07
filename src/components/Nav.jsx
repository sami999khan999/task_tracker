import React from "react";
import { GrTasks } from "react-icons/gr";
import ThemeToggler from "./ThemeToggler";
import { User } from "lucide-react";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = ({ setIsOpen }) => {
  return (
    <nav className="h-12 md:h-20 flex w-full z-50 border-b border-secondary">
      <div className="container mx-auto flex items-center justify-between ">
        <div
          className="text-primary flex items-center gap-4"
          onClick={() => setIsOpen((prv) => !prv)}
        >
          <GiHamburgerMenu className="md:hidden" />

          <GrTasks size={24} className="hidden md:block font-bold" />
          <p className="hidden md:block text-secondary-foreground dark:text-secondary-foreground/80 font-bold">
            Task<span className="text-primary font-medium">Tracker</span>
          </p>
        </div>

        <div className="flex items-center gap-2 text-primary">
          <User size={20} />
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
