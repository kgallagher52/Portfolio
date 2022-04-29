import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdInfoOutline, MdHome, MdCall, MdFolderSpecial } from "react-icons/md";
import myImg from '../../assets/mainImg.jpeg';
import controlImage from '../../assets/control.png';

export const Navigation = () => {
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const navLinks: { title: string; icon: any; to: string; gap?: boolean; }[] = [
    { title: "Home", icon: <MdHome size={24} />, to: "/" },
    { title: "About", icon: <MdInfoOutline size={24} />, to: "/about" },
    { title: "Contact", icon: <MdCall size={24} />, to: "/contact" },
    { title: "Projects ", icon: <MdFolderSpecial size={24} />, to: "/projects" },
  ];
  return (
    <div className={`bg-theme-blue p-5 pt-8 duration-300 sm:w-screen absolute inset-x-0 bottom-0 h-16 md:h-screen md:relative ${navToggle ? "md:w-72" : "md:w-20 "}`}>
      <img src={controlImage}
        className={
          `absolute cursor-pointer border-2 rounded-full ${!navToggle && "rotate-180"} border-theme-blue w-7 hidden -right-3 top-9 md:visible 
              `
        }
        onClick={() => setNavToggle(!navToggle)}
      />

      <div className="flex gap-x-4 items-center">
        <img
          src={myImg}
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
