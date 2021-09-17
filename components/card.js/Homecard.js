import React from 'react'

export default function Homecard(props) {
    return (
        <div className=" w-80 md:w-56 h-60 rounded-md ring-1 ring-gray-100 flex flex-col items-center place-content-center shadow-md">
        <div><img src={props.src} alt="" className="w-20" /></div>
        <div className="font-semibold">{props.name}</div>
        <div ><a href={props.link} target="_blank" rel="noopener noreferrer" className="underline font-semibold">Learn More</a></div>
      </div>
    )
}
