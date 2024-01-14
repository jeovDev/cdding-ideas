import { Propane } from '@mui/icons-material'
import React from 'react'

const aboutCard = (props) => {
  return (
    <div className="p-5  card text-center  w-86 md:min-w-64 flex-col ">
    <div className="icon flex justify-center ">
      
      {props.icon}
    </div>
    <div className=" text-xl ">{props.title}</div>
    <div className="description text-center">
      <p className="text-sm"> {props.description}
       
      </p>
    </div>
  </div>
  )
}

export default aboutCard
