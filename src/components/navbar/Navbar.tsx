// import React from 'react'
import { useState } from "react";
import logo from "../../assets/react.svg";
import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";
function Navbar(this: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  function onToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
    setIsHidden(!isHidden);
  }

  return (
    <div className=" ">
      <nav className="bg-gray-950 flex justify-between w-full">
        <div className=" md:p-3 md:z-10 md:flex md:items-center md:gap-10">
          <img
            className="w-10 h-10 absolute top-2 md:static z-10"
            src={logo}
          ></img>
          {/* <h1 className="text-white font-bold text-2xl">PowerTech</h1> */}

          <div
            className={` transform-translate ease-linear ${
              isHidden ? "translate-y-[-100%]" : "translate-y-0 "
            } md:translate-y-0  md:static absolute w-screen top-0 md:w-fit flex-col pt-10 md:flex-row lg:py-5 md:py-5`}
          >
            <ul
              className={`flex gap-10 text-gray-200 bg-gray-950 flex-col items-center justify-center md:flex-row `}
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-slate-500"
                      : "text-gray-200  hover:text-slate-400"
                  }`
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/jobs"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-slate-500"
                      : "text-gray-200  hover:text-slate-400"
                  }`
                }
              >
                <li>Find Job</li>
              </NavLink>
              <NavLink
                to="/chats"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-slate-500"
                      : "text-gray-200 hover:text-slate-400"
                  } `
                }
              >
                <li>Messeges</li>
              </NavLink>
              <NavLink
                to="/postJob"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-slate-500"
                      : "text-gray-200 hover:text-slate-400"
                  } `
                }
              >
                <li>Post a Job</li>
              </NavLink>
              <a href="" className="hover:text-slate-400" id="">
                <li>Community</li>
              </a>
              <a href="" className="hover:text-slate-400 mb-10 md:mb-0" id="">
                <li>FAQ</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="flex right-5 gap-5 text-2xl items-center invisible lg:visible md:visible p-3 z-10">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `${
                isActive
                  ? "text-slate-500"
                  : "text-gray-200 hover:text-slate-400"
              } `
            }
          >
            <Icon icon="iconamoon:profile-circle" color="white" />
          </NavLink>
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
