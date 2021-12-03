import React from 'react'

export default function Designstep({ number, text, bigText }) {
  return (
    <div className="mt-4 h-44 md:h-40 lg:h-40 xl:h-40 p-10 w-80 md:w-80 lg:w-80 xl:w-80 flex flex-col ring-2 ring-gray-100 shadow-lg gap-1.5 bg-white items-center justify-center" style={{ "borderBottomRightRadius": "5rem", "borderTopLeftRadius": "5rem" }}>
      <div className=" table-row place-content-center justify-items-center">
        <div className="table-cell w-14 h-14 rounded-full ring-1 ring-gray-100 shadow-md  bg-center text-center align-middle font-bold text-3xl text-green-400" >{number}</div>
        <div className="table-cell  align-middle font-extrabold text-lg tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-400" >&nbsp;{text}</div>
      </div>
    </div>
  )
}
