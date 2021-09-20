import React from 'react'
import Link from 'next/link'
export default function Contactcard({ text, imgSrc, srce }) {
    console.log(srce);
  return (
      <a href={srce} target="_blank" rel="noopener noreferrer" >
    <div className=" cursor-pointer hover:shadow-lg h-48 md:h-40 lg:h-40 xl:h-44 p-10 w-80 md:w-80 lg:w-80 xl:w-96 flex flex-row ring-1 ring-gray-100 shadow-md gap-1.5 bg-white rounded-md items-center justify-center"> 
        <img src={imgSrc} alt="" />
        <div className=" flex flex-col">
        <div className=" font-extrabold text-lg tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-400" >&nbsp;{text}</div>
        </div>
    </div>
    </a>
  )
}
