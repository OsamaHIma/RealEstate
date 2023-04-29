"use client";
import { navLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun, Laptop, MenuIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
// h- stands for header-
const Header = () => {
  const { setTheme } = useTheme();
  const [showThemeMenu, setThemeMenu] = useState(false);
  return (
    <section className="h-wrapper transition-all ease-in text-slate-800 dark:text-white">
      <div className="h-container relative py-4 flexCenter border-b-[3px] border-slate-300 dark:border-slate-700 !justify-between paddings innerWidth">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} priority />
        </Link>
        <nav>
          <ul className="h-menu flexCenter !gap-8">
            <li>
              <button
                className="!inline sm:block mt-2"
                onClick={() => setThemeMenu(!showThemeMenu)}
              >
                <Moon className="rotate-90 hidden transition-all hover:text-slate-900 dark:rotate-0 dark:block dark:saturate-100 dark:text-slate-400 dark:hover:text-slate-100" />
                <Sun className="rotate-0 block transition-all hover:text-slate-900 dark:rotate-90 dark:hidden dark:text-slate-400 dark:hover:text-slate-100" />
                <span className="sr-only">Toggle theme</span>
              </button>
              {showThemeMenu && (
                // <OutsideClickHandler onOutsideClick={() => setThemeMenu(false)}>
                <ul className="flex absolute z-10 flex-col mt-2 shadow-lg select-none">
                  <li
                    className="bg-blue-gradient pb-2 pt-4 rounded-t-md pl-8 pr-20 cursor-pointer hover:bg-slate-800 text-slate-100 hover:text-gray-300 active:!bg-gray-400"
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
                // </OutsideClickHandler>
              )}
            </li>
            {navLinks.map((link, index) => (
              <li key={index}>
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

export default Header;
