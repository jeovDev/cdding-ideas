import React, { useState } from 'react'
import Logo from "../assets/codingideas.png";
import {  Link, Outlet } from "react-router-dom";
import Footer from './footer';

const layout = () => {
   const [isToggle , setToggle] = useState(false);

  const toggleBar = () =>{
    const checkbox = document.querySelector('input[type="checkbox"]');
    const isChecked = checkbox.checked;
    setToggle(isChecked)
    console.log(isToggle)
  }  
  return (
    <div>
    <nav className="flex items-center justify-between px-5 sm:px-14 md:px-14 h-24">
      <div className="logo flex items-center justify-center  gap-2">
        <img src={Logo} alt="" className="h-12" />
        <h4>Coding Ideas</h4>
      </div>
      <div className="flex items-center gap-10">
      <ul className=" gap-3 md:gap-10 flex md:flex items-center">
          <Link className='li' to='/'>
          <div className='hidden md:flex'>Home</div>
            <div className='nav-icons md:hidden'><i class="fi fi-rr-house-chimney"></i></div> 
         
         
        
          
          </Link>
           
          <Link className='li' to='/contact'>
            <div className='hidden md:flex'>Contact</div> 
             <div className='nav-icons md:hidden'><i class="fi fi-rr-envelope"></i></div>  
            </Link>
          <Link className='li' to='/source'>
            <div className='hidden md:flex'>Source</div> 
           <div className='nav-icons md:hidden'><i className="fi fi-rr-code-simple"></i> </div>  
            </Link>     
          <li > <a href="https://www.youtube.com/@coding_ideas" target='_blank'>
          <button className="subscriber hidden md:flex">Subscribe</button>
          <button className='sub text-sm md:hidden'>Subscribe</button>
          </a>
          </li>
        </ul>
        {/* <label onClick={toggleBar} className="hamburger flex md:hidden">
          <input type="checkbox" />
          <svg viewBox="0 0 32 32">
            <path
              className="line line-top-bottom"
              d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
            ></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label> */}
      </div>
    </nav>
    <div className="outlet">
      <Outlet/>
    </div>  
    <Footer/>
  </div>
  )
}

export default layout
