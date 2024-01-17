// LoginForm.js
import React, { useEffect, useState } from "react";
import InputBox from "../inputbox/InputBox";
import minion from "../../assets/minion.png";
import eye from "../../assets/eye.png";
import eyeball from "../../assets/eyeball.png";
import { NavLink } from "react-router-dom";
const LoginForm = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const anchor = document.getElementById("anchor");
    const rect = anchor?.getBoundingClientRect();
    if (!rect) return;
    const anchorX = rect.left + rect.width / 2;
    const anchorY = rect.top + rect.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    
    const eyeball = document.getElementById("eyeball");
    if (!eyeball) return;
    eyeball.style.transform = `rotate(${90 + angleDeg}deg)`;
  });

  function angle(cx: number, cy: number, ex: number, ey: number) {
    const dy = ey - cy;
    const dx = ex - cx;
    const theta = Math.atan2(dy, dx);
    const deg = (theta * 180) / Math.PI;
    return deg;
  }

  return (
    <>
      <div className="md:flex md:min-h-screen md:overscroll-none overflow-hidden">
        <div className="md:bg-zinc-200  md:w-3/5   relative invisible md:visible">
          <div className="w-full h-auto flex justify-center">
          <img
            src={minion}
            id="anchor"
            className="absolute h-4/5 top-5"
          />
          <img
            src={eyeball}
            id="eyeball"
            className="fixed h-36 top-1/3 bottom-2/3 mt-1"
          />
          </div>
          {/* <img
            src={eye}
            className="abolute w-16 h-16 mt-52 z-10 border-gray-50 "
          /> */}
        </div>
        <div className="md:relative md:bg-white md:w-2/5 ">
          <h1 className="md:text-4xl md:font-bold text-center mt-10">
            Welcome Back
          </h1>
          <p className="text-center md:text-base md:text-gray-500">
            Please Enter your details
          </p>
          <div className="md:text-center md:mt-10 pl-20 pr-20">
            <InputBox label="Email" />
            <InputBox label="Password" />
            <button className="w-full p-3 mt-10 rounded-full text-white md:text-center bg-black">
              Sign In
            </button>
            <button className="w-full p-3 mt-3 rounded-full text-black md:text-center bg-gray-300">
              Sign In with Google
            </button>
          </div>
          <p className="text-center mt-10 text-gray-500">
            Don't Have an Account?
            <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-slate-500"
                      : "text-gray-500  hover:text-black hover:font-bold"
                  }`
                }
              >
                Register
              </NavLink>
             
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
