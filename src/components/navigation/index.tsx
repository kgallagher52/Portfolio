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
    <div className={`bg-primary p-5 pt-8 h-24  duration-300 w-screen absolute inset-x-0 bottom-0 flex tablet:block tablet:h-screen tablet:relative ${navToggle ? "tablet:w-72" : "tablet:w-20 "}`}>
      <img src={controlImage}
        className={
          `absolute cursor-pointer border-2 rounded-full ${!navToggle && "rotate-180"} border-primary w-7 hidden -right-3 top-9 tablet:block 
              `
        }
        onClick={() => setNavToggle(!navToggle)}
      />

      <div className="flex flex-col items-start gap-x-4  tablet:flex-row tablet:items-center ">
        <img
          src={myImg}
          className={
            `cursor-pointer 
              duration-500 rounded-lg border-2 border-white w-10 
             ${navToggle && "rotate-[360deg]"} tablet:mr-4`
          }
        />
        <h1
          className={
            `text-white origin-left font-medium text-xl duration-200 ${!navToggle && "scale-0"
            }`}
        >
          Keaton Gallagher
        </h1>
      </div>
      <ul className="flex flex-row space-x-8 items-center m-0 tablet:pt-6 tablet:block tablet:space-x-0 tablet:items-start">
        {navLinks.map((link, index) => (
          <Link to={link.to}>

            <li
              key={index}
              className={`flex p-2 mt-0 pt-0 cursor-pointer hover:bg-light-white text-gray-300 text-md items-center gap-x-4 tablet:mt-3 tablet:pt-2 
              ${link.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-primary"
                } `}
            >
              {link.icon}
              <span className={`${!navToggle && "hidden"}  origin-left duration-200`}>
                {link.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
