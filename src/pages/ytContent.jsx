import React, { useEffect, useState } from "react";
import axios from "axios";
import sampleImage from '../assets/empty.jpg';
import VideoCard from "../components/videoCard";
import Cookies from "js-cookie";


const ytContent = () => {
  const ytAPIKEY = "AIzaSyA7A29G-gsHKNX_buNAwhN0cbW2hawyjMY";
  const ytChannelID = "UCg25rWkbFuA2-s8RJIwnCrw";

  const[cachedData, setCachedData] = useState([]);

  const fetchData =  async () =>{

    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${ytChannelID}&maxResults=30&order=date&key=${ytAPIKEY}`
    );
    const videoDtails = response.data.items.map(async item => {
      const videoId = item.id.videoId;
      const videoDetailResponse = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${ytAPIKEY}`
      );
      return videoDetailResponse.data.items[0];;
    });

    const videoDetails = await Promise.all(videoDtails);

     const filteredVideosData = videoDetails
     .filter(video => getVideoDurationInSeconds(video.contentDetails.duration) >= 60)
     .slice(0,6)
     .map(videos => ({
      title : videos.snippet.title,
      thumbnail : videos.snippet.thumbnails.high.url,
     }))
     Cookies.set('_content', JSON.stringify(filteredVideosData), { expires: 7 }); // Expires in 7 days
     setCachedData(filteredVideosData);


     const getVideo = videoDetails
     .filter(video => getVideoDurationInSeconds(video.contentDetails.duration) >= 60)
   
    //  .map(videos => ({
    //   title : videos.snippet.title,
    //   thumbnail : videos.snippet.thumbnails.high.url,
    //  }))
    //  console.log(getVideo)


     const mapped = videoDetails
     .filter(video => getVideoDurationInSeconds(video.contentDetails.duration) >= 60)
   
     .map(videos => ({
      title : videos.snippet.title,
      thumbnail : videos.snippet.thumbnails.high.url,
     }))
    //  console.log(mapped)
  }

  useEffect(()=>{
   const getCookies = async () =>{
    try{  
      const cachedDataFromCookie = Cookies.get("_content");
      if(cachedDataFromCookie){
        const getData = JSON.parse(cachedDataFromCookie);
        setCachedData(getData);
      }

       fetchData();

    }catch(err){
      console.log(err)
    }
   }
   getCookies();
  },[])





  const getVideoDurationInSeconds = duration => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    const hours = match[1] ? parseInt(match[1], 10) : 0;
    const minutes = match[2] ? parseInt(match[2], 10) : 0;
    const seconds = match[3] ? parseInt(match[3], 10) : 0;

    return hours * 3600 + minutes * 60 + seconds;
  };


  return (
    <div className="bg-slate-200 flex items-center justify-center pt-10 pb-32 ">
      <div className="xs:w-10/12 sm:w-11/12 ">
      {/* h-content-container */}
        <div className="mx-10 title-content text-xl-fs mb-1">Latest Content</div>
        <div className="mx-10 mb-14">
          <p>
            Stay up to date with my latest articles, tutorials, courses, news
            and more.
          </p>
        </div>


        {/* <div className="flex flex-wrap gap-5 px-10"> */}
        <div className="grid sm:gap-2 md:gap-5 sm:grid-cols-2 md:grid-cols-3  lg:px-10">
        {cachedData.map((video, index) => (
      
          <div className="mt-5 w-thumbContainer  position-relative ">
             
            <div className=" thumbCont  h-thumbContainer w-thumbContainer">
            <div className="overlay flex items-center text-white justify-center"> 
            <div className="title text-md mt-5 flex items-center justify-center">
              <h2 className=" w-3/4">{video.title}</h2>
            </div></div>
              <img className="thumbnail"  src={video.thumbnail}  />
            </div>
           


          </div>
            ))}

        </div>
      </div>
    </div>
  );
};

export default ytContent;
