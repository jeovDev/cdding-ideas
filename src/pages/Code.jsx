import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import queryString from "query-string";
import { AES, enc } from "crypto-js";
import CodeDisplay from "../components/codeDisplay";
const Code = () => {
  const { param } = useParams();
  const [titles, setTitle] = useState("");
  const [embed, setEmbed] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [paths, setPaths] = useState([])
  const [repoName, setRepo] = useState('')
  useEffect(() => {
    const decryptedParam = decodeURIComponent(param);
    const decryptedData = AES.decrypt(decryptedParam, "codingIdeas").toString(
      enc.Utf8
    );

    const parsedObject = queryString.parse(decryptedData);

    setLink("https://www.youtube.com/watch?v=" + parsedObject.videos);
    setTitle(parsedObject.title);
    setEmbed("https://www.youtube.com/embed/" + parsedObject.videos);
    setImage(parsedObject.image);
    const embed = "https://www.youtube.com/embed/" + parsedObject.videos;
  }, [param]);

  useEffect(()=>{
    //  setPaths()
     var getPaths = JSON.parse(localStorage.getItem('_path'))
    console.log(getPaths)
     setPaths(getPaths)

     var filename = JSON.stringify(getPaths);
     var parsed = JSON.parse(filename)
     const resultArray = parsed[0].split('/');
    setRepo(resultArray[0])
console.log(resultArray[0]); // Output: ANIMATEDMENU
console.log(resultArray[1]);
  },[])

  return (
    <div className="bg-slate-200 pb-10">
      <div className="  h-sourceImage overflow-hidden">
        <div className="video-title ">
          <h2 className="text-code-title text-shadow">
            <strong>Source Code : {titles}</strong>
          </h2>
          <p className="text-md w-5/12 text-shadow">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            esse! Voluptates perspiciatis adipisci laboriosam at corporis, natus
            debitis ratione reprehenderit!
          </p>
          <div className="bg-red-700 w-40 flex justify-center p-2 mt-5 rounded-2xl">
            <a href={link} target="_blank">
              {" "}
              Watch On Youtube
            </a>
          </div>
        </div>
        <img
          className="z-0 image-thumbnail h-sourceImage w-full"
          src={image}
          alt=""
        />
      </div>

      <div className="codeContainer mx-16 mt-5 mb-10">
      

        {paths.map((_path,index) => (
          <div key={index}>
           <CodeDisplay
          owner="jeovDev"
          repo={repoName}
          path={_path}
        />
          </div>
        ))}
      </div>

      <div className="mx-16 border-2   ">
        <h2 className="text-shadow text-xl-fs text-slate-700 ">
          {" "}
          <strong>Watch Video Tutorial</strong>{" "}
        </h2>
      </div>

      <div className="embedded mt-5">
        <iframe
          className="mx-16"
          width="1000"
          height="500"
          src={embed}
        ></iframe>
      </div>
    </div>
  );
};

export default Code;
