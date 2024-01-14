import React, { useEffect, useState } from "react";
import Coding from "../assets/tutor.svg";
import axios from "axios";
import Cookies from "js-cookie";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Header = () => {
  const ytAPIKEY = 'AIzaSyA7A29G-gsHKNX_buNAwhN0cbW2hawyjMY';
  const ytChannelID = 'UCg25rWkbFuA2-s8RJIwnCrw';
  const [totalLikes, setTotalLikes] = useState(0);
  const [totalviews, setViews] = useState(0);
  const [totalSubscriber, settotalSubscriber] = useState(0);

  const [cachedData , setCachedData] = useState({likes : 0, views:0 , subscribers:0});

  const videoStats = () =>{
    axios
    .get(
      `https://www.googleapis.com/youtube/v3/search?key=${ytAPIKEY}&channelId=${ytChannelID}&part=id&maxResults=50&type=video`
    )
    .then((response) => {
      const videoIds = response.data.items.map((item) => item.id.videoId);
     
   
      const requests = videoIds.map((videoId) =>
        axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${ytAPIKEY}`
        )
      );

      Promise.all(requests)
        .then((responses) => {
        
          let total = 0;
          let totalViewsCount = 0;
          responses.forEach((videoResponse) => {
            const statistics = videoResponse.data.items[0].statistics;
            total += parseInt(statistics.likeCount, 10);
            totalViewsCount += parseInt(statistics.viewCount, 10);
         
          });
          // const likes = parseInt( total).toLocaleString();      
          // const views = parseInt(totalViewsCount).toLocaleString();

         setCachedData((prev)=>({
          ...prev,
          likes :  parseInt( total).toLocaleString(),
          views :  parseInt(totalViewsCount).toLocaleString()
         }))

          // setTotalLikes(likes)
          // setViews( views);

          Cookies.set('_statistics', JSON.stringify(cachedData), {expires:7})
         
      
        })
        .catch((error) => {
          console.error('Error fetching video statistics: ', error);
        });
    })
    .catch((error) => {
      console.error('Error fetching video list: ', error);
    });
  }

  useEffect(()=>{
    AOS.init({
      disable:"phone",
      duration:500,
      easing:"ease-out-cubic"
    })
  })
  const getSubscriberCount =  () => {
 
    axios.get(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ytChannelID}&key=${ytAPIKEY}`).then((response)=>{

        // const subscriber = parseInt(response.data.items[0].statistics.subscriberCount).toLocaleString();
       
        setCachedData((prev)=>({
          ...prev,
          subscribers : parseInt(response.data.items[0].statistics.subscriberCount).toLocaleString()
        }))

        Cookies.set('_statistics', JSON.stringify(cachedData), {expires:7});

      //   settotalSubscriber(subscriber);
      //  console.log(subscriber)
    })
};



  useEffect(() => {

    const cachedDataFromCookies = Cookies.get("_statistics");
    if(cachedDataFromCookies){
      const getData = JSON.parse(cachedDataFromCookies);
      setCachedData(getData);
    }
   
     videoStats();
     getSubscriberCount();

  }, []);
 



  
  return (
    // 
    <div className=" overflow-hidden xs:h-headerS md:h-header   xs:flex justify-center bg-slate-200 ">
      <header className="  grid md:grid-cols-2  items-center  w-screen xs:px-10 sm:px-24 md:px-14 lg:px-40" >
        <div data-aos='fade-right' className=" order-2 md:order-1 ">
          {/* <h1 className="text-center mb-5 text-2xl md:text-left md:text-3xl"> <strong>CODING IDEAS</strong> </h1> */}
          <p className="text-gray-700 text-center md:text-left leading-normal md:max-w-xl
           
           lg:text-xl-fs md:text-lg-fs">
            {/* xs:bg-orange-700 sm:bg-red-400 md:bg-blue-200 lg:bg-green-500  */}
            Enhance your skills and unleash your creativity with top-notch,
            clear, and cutting-edge programming and software development
            tutorials of the highest quality.
          </p>
          <div className="h-10  flex items-center justify-center md:justify-start text-center mt-5 md:text-left">
            <ul className="flex gap-10 mt-10">
              <li>
                <div className="flex flex-col items-center gap-2" >
                  <div className=" text-xl md:text-3xl"> <strong>{cachedData.subscribers}</strong> </div>
                  <div className="text-sm text-stone-600" > <b>Subscribers</b> </div>
                </div>
              
              </li>
              <li>
              <div className="flex flex-col items-center gap-2" >
                  <div className="text-xl md:text-3xl"> <strong>{cachedData.views}</strong></div>
                  <div className="text-sm text-stone-600"> <b>Views</b> </div>
                </div>
              </li>
              <li>   
                <div className="flex flex-col items-center gap-2" >
                  <div className=" text-xl md:text-3xl">  <strong>{cachedData.likes}</strong>  </div>
                  <div className="text-sm text-stone-600"> <b>Likes</b> </div>
                </div></li>
            </ul>
          </div>
         
        </div>
        {/* md:flex */}
        <div data-aos='fade-left' className="   image hidden   items-center justify-center order-1 md:order-2  md:flex">
          <img src={Coding} className="h-96"/> 
          {/* className="md:h-image h-64" */}
        </div>
      </header>
   
    </div>
  );
};

export default Header;
