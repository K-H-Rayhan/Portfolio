import React from 'react'

export default function Homecard(props) {
    return (
        <div className={` w-80 lg:w-56 h-60 rounded-md ring-1 ring-gray-100 flex flex-col items-center place-content-center shadow-lg shadow-indigo-500/50 gap-1 bg-white  transition duration-300 ease-in-out  transform ${props.effect == "-"? " hover:-translate-x-2":" hover:translate-x-2 "} `}>
        <div><img src={props.src} alt="" className="w-20" /></div>
        <div className="font-semibold">{props.name}</div>
        <div ><a href={props.link} target="_blank" rel="noopener noreferrer" className="underline font-semibold text-green-400 text-lg"  >Learn More</a></div>
      </div>
    )
}
