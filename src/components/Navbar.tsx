import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const date1 = new Date();
  const shamsi = date1.toLocaleDateString("fa-IR");
  const [isOpen, setisOpen] = useState(false);
  const navList = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/exchange",
      title: "Exchange",
    },
    {
      href: "/about",
      title: "About",
    },
    {
      href: "/contact",
      title: "Contact",
    },
    {
      href: "/blogs",
      title: "Blogs",
    },
  ];
  return (
    <div className="w-full fixed top-0 left-0 bg-gray-700 text-white backdrop:blur-md md:p-3 backdrop-blur-md z-50">
      <div className="flex items-center   justify-between">
        <div>
          <h1 className="text-[25px] font-bold text-xl font-Brush">
            Sharifi Exchange Rate
          </h1>
        </div>
        <div className="hidden justify-center md:flex font-bold space-x-6 font-inter ">
          {navList.map((nav, idx) => (
            <Link key={idx} to={nav.href}>
              {nav.title}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex">
          <Button
            variant="outline"
            className="rounded-md bg-brand border-none text-white text-xl hover:text-white hover:bg-brand"
          >
            {shamsi}
          </Button>
        </div>
        <div className="md:hidden">
          <Menu
            className={`${!isOpen ? "block" : "hidden"}`}
            onClick={() => setisOpen(!isOpen)}
            size={24}
          />
          <X
            className={`${isOpen ? "block" : "hidden"}`}
            onClick={() => setisOpen(!isOpen)}
            size={24}
          />
        </div>
      </div>
      {isOpen && (
        <div className="mt-3 flex flex-col h-screen gap-4 w-full items-center  backdrop-blur-md bg-stone-50/60 ">
          {navList.map((item, index) => (
            <a key={index} href={item.href}>
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
