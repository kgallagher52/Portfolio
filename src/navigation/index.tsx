import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  const [navToggle, setNavToggle] = useState<boolean>(true);
  const navLinks = [
    { title: "Home", src: "Chart_fill", to: "/" },
    { title: "About", src: "User", to: "/about" },
    { title: "Contact", src: "Chat", to: "/contact" },
    { title: "Schedule ", src: "Calendar", to: "/calender" },
    { title: "Analytics", src: "Chart", to: "/analytics" },
    { title: "Projects ", src: "Folder", gap: true, to: "/projects" },
    { title: "Account Settings", src: "Setting", to: "/account" },
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
          src="./src/assets/logo.png"
          className={`cursor-pointer duration-500 ${navToggle && "rotate-[360deg]"
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
            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${link.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-theme-blue"
              } `}
          >
            <img src={`./src/assets/${link.src}.png`} />
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
