import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdInfoOutline, MdHome, MdCall, MdFolderSpecial } from "react-icons/md";

export const Navigation = () => {
  const [navToggle, setNavToggle] = useState<boolean>(true);
  const navLinks: { title: string; icon: any; to: string; gap?: boolean; }[] = [
    { title: "Home", icon: <MdHome size={24} />, to: "/" },
    { title: "About", icon: <MdInfoOutline size={24} />, to: "/about" },
    { title: "Contact", icon: <MdCall size={24} />, to: "/contact" },
    { title: "Projects ", icon: <MdFolderSpecial size={24} />, to: "/projects" },
  ];
  return (
    <div className={` ${navToggle ? "w-72" : "w-20 "} bg-theme-blue h-screen p-5  pt-8 relative duration-300`}>
      <img src="./src/assets/control.png"
        className={
          `absolute cursor-pointer -right-3 top-9 w-7 border-theme-blue
            border-2 rounded-full  ${!navToggle && "rotate-180"}`
        }
        onClick={() => setNavToggle(!navToggle)}
      />

      <div className="flex gap-x-4 items-center">
        <img
          src="./src/assets/mainImg.jpeg"
          className={`cursor-pointer duration-500 rounded-full w-10 ${navToggle && "rotate-[360deg]"
            }`}
        />
        <h1
          className={
            `text-white origin-left font-medium text-xl duration-200 ${!navToggle && "scale-0"
            }`}
        >
          Keaton Gallagher
        </h1>
      </div>
      <ul className="pt-6">
        {navLinks.map((link, index) => (
          <li
            key={index}
            className={`flex p-2 cursor-pointer hover:bg-light-white text-gray-300 text-md items-center gap-x-4 
              ${link.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-theme-blue"
              } `}
          >

            {link.icon}
            <span className={`${!navToggle && "hidden"} origin-left duration-200`}>
              <Link to={link.to}>
                {link.title}
              </Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
