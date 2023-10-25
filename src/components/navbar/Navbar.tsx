// import React from 'react'
import { useState } from "react";
import logo from "../../assets/react.svg";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
function Navbar(this: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [isActive, setIsActive] = useState(false);

  function onToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    setIsHidden(!isHidden);
  }

  return (
    <div className=" ">
      <nav className="bg-gray-950 flex justify-between w-full">
        <div className=" p-3 z-10 flex items-center gap-2">
          <img className="w-10 h-10 top-0" src={logo}></img>
          {/* <h1 className="text-white font-bold text-2xl">PowerTech</h1> */}
        </div>
        <div
          className={` transform-translate ease-linear ${
            isHidden ? "translate-y-[-100%]" : "translate-y-0"
          } md:translate-y-0 lg:translate-y-0 md:static absolute w-screen flex-col lg:flex-row md:flex-row lg:py-5 md:py-5`}
        >
          <ul className={`flex gap-10 text-gray-200 bg-gray-950 flex-col items-center justify-center md:flex-row `}>
            <NavLink to="\home" className={({isActive}) =>`${isActive ? "text-slate-500":"text-gray-200"}`} id="">
              <li>Home</li>
            </NavLink>
            <a href="\jobs" className="hover:text-slate-500" id="">
              <li>Find Job</li>
            </a>
            <a href="" className="hover:text-slate-500" id="">
              <li>Messege</li>
            </a>
            <a href="" className="hover:text-slate-500" id="">
              <li>Hiring</li>
            </a>
            <a href="" className="hover:text-slate-500" id="">
              <li>Community</li>
            </a>
            <a href="" className="hover:text-slate-500" id="">
              <li>FAQ</li>
            </a>
          </ul>
        </div>
        <div className="flex right-5 gap-5 text-2xl items-center invisible lg:visible md:visible p-3 z-10">
          <Icon icon="iconamoon:profile-circle" color="white" />
          <Icon icon="ph:bell-bold" color="white" />
          <div className="icon" onClick={onToggleMenu}>
            {isMenuOpen ? (
              <Icon
                icon="ion:close"
                color="white"
                className="visible menu md:hidden text-3xl cursor-pointer"
              />
            ) : (
              <Icon
                icon="ion:menu"
                color="white"
                className="visible menu md:hidden text-3xl cursor-pointer"
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
