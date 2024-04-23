import { Moon, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);

    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <button
      className="text-primary w-12 h-12 border dark:border-gray-700 rounded-full flex  items-center justify-center "
      onClick={toggleTheme}
    >
      <Sun className="rotate-90 scale-100 dark:rotate-90 dark:scale-0 transition-all duration-300" />
      <Moon className="absolute rotate-0 scale-0 dark:rotate-90 dark:scale-100 transition-all duration-300" />
    </button>
  );
};

export default ThemeToggler;
