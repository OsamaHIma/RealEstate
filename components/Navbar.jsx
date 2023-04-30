"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun, Laptop, MenuIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
// h- stands for header-
const Navbar = () => {
  const { setTheme } = useTheme();
  const [showThemeMenu, setThemeMenu] = useState("-top-[400px]");
  const [showMenu, setMenu] = useState("-right-[400px]");
  // theme Menu toggler button
  const openThemeMenu = () => {
    if (showMenu === "right-0") {
      setMenu("-right-[400px]");
    }

    if (showThemeMenu === "top-[17%]") {
      setThemeMenu("-top-[400px]");
    } else {
      setThemeMenu("top-[17%]");
    }
  };
  // Menu toggler button
  const openMenu = () => {
    if (showThemeMenu === "top-[17%]") {
      setThemeMenu("-top-[400px]");
    }

    if (showMenu === "right-0") {
      setMenu("-right-[400px]");
    } else {
      setMenu("right-0");
    }
  };
  return (
    <section className="h-wrapper transition-all ease-in text-slate-800 dark:text-white">
      <div className="h-container relative py-4 flexCenter border-b-[3px] border-slate-300 dark:border-slate-700 !justify-between paddings innerWidth">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} priority />
        </Link>
        <nav className="flexCenter relative">
          {/* Theme menu */}
          <button className="mx-4" onClick={openThemeMenu}>
            <Moon className="rotate-90 hidden transition-all hover:text-slate-900 dark:rotate-0 dark:block dark:saturate-100 dark:text-slate-400 dark:hover:text-slate-100" />
            <Sun className="rotate-0 block transition-all hover:text-slate-900 dark:rotate-90 dark:hidden dark:text-slate-400 dark:hover:text-slate-100" />
            <span className="sr-only">Toggle theme menu</span>
          </button>

          <ul
            className={`${showThemeMenu} menuTransition flex w-[9rem] absolute right-[-30%] md:right-[60%] z-10 flex-col m-8 shadow-lg select-none`}
          >
            <li
              className="bg-blue-gradient pb-2 pt-4 rounded-t-md px-8 cursor-pointer hover:bg-slate-800 text-slate-100 hover:text-gray-300 active:!bg-gray-400"
              onClick={() => setTheme("dark")}
            >
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </li>
            <li
              className=" bg-blue-gradient py-2 pl-8 cursor-pointer hover:bg-slate-800 text-slate-100 hover:text-gray-300 active:!bg-gray-400"
              onClick={() => setTheme("light")}
            >
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </li>
            <li
              className=" bg-blue-gradient pt-2 pb-4 rounded-b-md pl-8 cursor-pointer hover:bg-slate-800 text-slate-100 hover:text-gray-300 active:!bg-gray-400"
              onClick={() => setTheme("system")}
            >
              <Laptop className="mr-2 h-4 w-4" />
              <span>System</span>
            </li>
          </ul>

          {/* for large screens */}
          <div className="hidden lg:block">
            <ul className="h-menu flexCenter !gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link href={`#${link.id}`}>{link.name}</Link>
                </li>
              ))}
              <button type="button" className="btn bg-blue-gradient">
                <Link href="#contact">Contact</Link>
              </button>
            </ul>
          </div>
          {/* for medium and small screens */}
          <button className="mx-4 block lg:hidden" onClick={openMenu}>
            <MenuIcon className="hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100" />
            <span className="sr-only">Toggle menu</span>
          </button>

          <ul
            className={`flex lg:hidden !text-white font-medium menuTransition ${showMenu} absolute bg-black/10 dark:bg-white/10 backdrop-blur-md py-8 px-11 rounded-lg w-[15rem] top-[27%] z-10 flex-col m-8 shadow-lg`}
          >
            {navLinks.map((link, index) => (
              <li key={index} className="my-3">
                <Link href={`#${link.id}`}>{link.name}</Link>
              </li>
            ))}
            <button type="button" className="btn bg-blue-gradient">
              <Link href="#contact">Contact</Link>
            </button>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
