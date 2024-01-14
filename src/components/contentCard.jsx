import React from 'react'
import Empty from '../assets/empty.jpg'
import { Link, useNavigate } from 'react-router-dom';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import queryString from 'query-string';
import { enc, AES } from 'crypto-js';
import { Dataset } from '@mui/icons-material';
const contentCard = (Prop) => {
  var link = "https://www.youtube.com/watch?v=" + Prop.links;
   const navigate = useNavigate();
  const objParam = {
    title : Prop.title,
     image : Prop.image, 
     videos : Prop.links,
    }
    const paramSerialize = queryString.stringify(objParam);
    const encryptedParam = encodeURIComponent(AES.encrypt(paramSerialize, 'codingIdeas').toString());
    const route = `/source/code/${encryptedParam}`;
 
    const storeLocalStorage = (data) => {
        const dataString = JSON.stringify(data);
  
        localStorage.setItem('_path', dataString);

        navigate(route);
        // console.log(localStorage.getItem('_path'))
    }


   return (

    <div className='contentCard    flex flex-col ' onClick={() => storeLocalStorage(Prop.path)}>
       <div className='overflow-hidden'>
            <img className='thumbnailProject h-52 w-full ' src={Prop.image} alt="" />
       </div>
       <div className='text-sm titleContainer'> <strong>{Prop.title}</strong></div>
       {/* <div className='_buttonContainer flex '>
        <button className='_buttonIcon' onClick={() => storeLocalStorage(Prop.path)}> <Link to={route}><CodeOutlinedIcon /></Link> </button>
        <button className='_buttonIcon' ><a href= {link} target="_blank"><PlayArrowOutlinedIcon/></a> </button>
      
       </div> */}
    </div>
  )
}

export default contentCard
