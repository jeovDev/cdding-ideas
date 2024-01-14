import React from "react";
import Logo from "../assets/codingideas.png";

const nav = () => {
  
  return (
    <div>
      <nav className="flex items-center justify-between px-5 sm:px-14 md:px-14 h-24">
        <div className="logo flex items-center justify-center  gap-2">
          <img src={Logo} alt="" className="h-12" />
          <h4>Coding Ideas</h4>
        </div>
        <div className="flex items-center gap-10">
          <ul className=" gap-10 hidden md:flex items-center">
            {/* <Link>hOME</Link> */}
            <li > Home </li>
            <li>Contact Me</li>
            <li>Source Code</li>
       
            <li>
            <button className="subscriber">Subscribe</button>
            </li>
          </ul>
          <label class="hamburger flex md:hidden">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                class="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path class="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </nav>
      <div className="outlet">
        <Outlet/>
      </div>
    </div>
  );
};

export default nav;
