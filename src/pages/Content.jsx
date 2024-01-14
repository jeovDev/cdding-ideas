import axios from "axios";
import React, { useEffect, useState } from "react";
import {useAnimatedCount} from '../Hooks/Animate';
import AboutCard from "../components/aboutCard";
import AOS from 'aos';
import 'aos/dist/aos.css'
import YYContent from "./ytContent";
const Content = () => {

  useEffect(()=>{
    AOS.init({
      disable:"phone",
      duration:500,
      easing:"ease-out-cubic"
    })
  })



 
  return (
    <div className=" bg-yellow-200 m-0 p-0">
      <div className="500  p-12   bg-white flex items-center">
        {/* bg-pink-200 sm:bg-red-400 md:bg-blue-300 lg:bg-green-200 xl:bg-yellow-400 2xl:bg-slate-800 */}

        <div className="   flex justify-center ">
          <div className="   grid gap-5 sm:gap-2 md:gap-2 lg:gap-5 md:grid-cols-3 w-full sm:px-10  px-10 md:px-5 lg:px-38 xl:px-60 2xl:px-80">
            <AboutCard 
              data-aos ='fade-right'

              title="Project Ideas"
              icon={
                <svg
                  width="63"
                  height="63"
                  viewBox="0 0 63 63"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M34.125 7.875C24.2287 7.875 16.2487 15.6187 15.75 25.3575L10.71 31.9987C10.08 32.8125 10.71 34.125 11.8125 34.125H15.75V42C15.75 44.9137 18.0862 47.25 21 47.25H23.625V55.125H42V42.8137C48.2212 39.8737 52.5 33.6 52.5 26.25C52.5 16.1175 44.31 7.875 34.125 7.875ZM36.75 36.75H31.5V34.125H36.75V36.75ZM40.95 24.9375C40.2509 26.1179 39.2555 27.0951 38.0625 27.7725V31.5H30.1875V27.7725C26.4337 25.5938 25.1212 20.79 27.3 17.0625C29.4787 13.335 34.3087 11.97 38.0625 14.1225C41.8162 16.275 43.1287 21.1312 40.95 24.9375Z"
                    fill="#E35F21"
                  />
                </svg>
              }
              description="Whether you're a seasoned developer looking for new challenges or a beginner eager to dive into the world of coding, our platform offers a diverse range of project ideas to spark your inspiration"
            />

            <AboutCard
            data-aos ='fade-right'
            data-aos-delay="50"
              title="Tutorials"
              icon={
                <svg
                  width="62"
                  height="62"
                  viewBox="0 0 62 62"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.49 8.96092C20.1149 6.87206 13.9997 5.84881 5.81251 5.81249C5.04037 5.802 4.28339 6.02715 3.64251 6.45792C3.11646 6.81348 2.68585 7.29287 2.38854 7.8539C2.09124 8.41494 1.93635 9.04044 1.93751 9.67538V44.3203C1.93751 46.6623 3.60376 48.429 5.81251 48.429C14.4186 48.429 23.0514 49.2331 28.2221 54.1204C28.2928 54.1876 28.3818 54.2325 28.4778 54.2495C28.5738 54.2666 28.6728 54.255 28.7623 54.2163C28.8518 54.1776 28.928 54.1135 28.9814 54.0318C29.0348 53.9502 29.063 53.8547 29.0625 53.7571V12.9352C29.0627 12.6598 29.0038 12.3875 28.8897 12.1369C28.7757 11.8862 28.6091 11.6629 28.4013 11.4821C27.2169 10.4696 25.9013 9.6215 24.49 8.96092ZM58.3575 6.45428C57.7163 6.02459 56.9593 5.80069 56.1875 5.81249C48.0004 5.84881 41.8851 6.86721 37.51 8.96092C36.0988 9.62031 34.7828 10.4667 33.5975 11.4773C33.3902 11.6583 33.224 11.8817 33.1102 12.1324C32.9963 12.383 32.9375 12.6551 32.9375 12.9304V53.7547C32.9374 53.8484 32.9651 53.9401 33.0169 54.0182C33.0687 54.0963 33.1425 54.1573 33.2289 54.1937C33.3153 54.23 33.4105 54.24 33.5025 54.2225C33.5946 54.2049 33.6795 54.1606 33.7464 54.095C36.8549 51.0071 42.3102 48.4254 56.1924 48.4266C57.2201 48.4266 58.2057 48.0183 58.9324 47.2916C59.6591 46.5649 60.0674 45.5793 60.0674 44.5516V9.67659C60.0688 9.04039 59.9135 8.41363 59.6153 7.85165C59.3171 7.28967 58.8851 6.80976 58.3575 6.45428Z"
                    fill="#E35F21"
                  />
                </svg>
              }
              description="Our tutorials are designed to be clear, focused, and
          cutting-edge, ensuring that you have the best resources at your 
          disposal as you embark on your programming and software 
          development journey"
            />

            <AboutCard
              title="Quality Assurance"
              icon={
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.125 25H10.9375V46.875H3.125V25ZM35.9375 46.875H14.0625V23.7453L18.8156 16.6156L20.1359 7.37031C20.2455 6.62701 20.6178 5.94759 21.1854 5.45535C21.7531 4.96312 22.4784 4.69069 23.2297 4.6875H23.4375C24.6803 4.68874 25.8719 5.183 26.7507 6.06181C27.6295 6.94062 28.1238 8.13218 28.125 9.375V18.75H40.625C42.282 18.7521 43.8705 19.4112 45.0421 20.5829C46.2138 21.7545 46.8729 23.343 46.875 25V35.9375C46.8717 38.8373 45.7183 41.6174 43.6678 43.6678C41.6174 45.7183 38.8373 46.8717 35.9375 46.875Z"
                    fill="#E35F21"
                  />
                </svg>
              }
              description="We are committed to delivering the highest-quality content to
          our users. Our team of experts curate and create tutorials that
          are both informative and engaging"
            />
          </div>
        </div>
        {/* */}
      </div>
      <YYContent />
    </div>
  );
};

export default Content;
