import React from 'react'
import CodingIdeas from '../assets/CodingIdeas.png'
import Facebook from '../assets/sm/facebook.svg';
import Instagram from '../assets/sm/instagram.svg';
import Tiktok from '../assets/sm/tik-tok.svg';
import Youtube from '../assets/sm/youtube.svg';

const footer = () => {
  return (
    <div className='footer-color h-footer p-8'>
      <div className='flex justify-center items-center gap-2 mt-4'>
         <img src={CodingIdeas} className='h-10' alt="" />
         <div className='text-white'> <strong>Coding Ideas</strong> </div>
      </div>

      <div className=' m-10 text-white flex justify-center'>
        <ul className='flex gap-5'>
            <li>Home</li>
            <li>Contact</li>
            <li>Source Code</li>
            {/* <li>Youtube</li> */}
        </ul>
      </div>


      <div className=' m-10 text-white flex justify-center'>
        <ul className='flex gap-5'>
            <li><i className="fi fi-brands-facebook"></i></li>
            <li><i className="fi fi-brands-instagram"></i></li>
            <li><i className="fi fi-brands-tik-tok"></i></li>
            <li><i className="fi fi-brands-youtube"></i></li>
       
        </ul>
      </div>


      <div className=' m-10 mt-20 text-white flex justify-center'>
      @2023 All rights Reserved &nbsp;  <span> Coding Ideas </span>
     </div>


    </div>
  )
}

export default footer
