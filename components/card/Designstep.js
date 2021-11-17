import React from 'react'

export default function Designstep({ number, text, bigText }) {
  return (
    <div className="mt-4 h-48 md:h-40 lg:h-40 xl:h-44 p-10 w-80 md:w-80 lg:w-80 xl:w-96 flex flex-col ring-1 ring-gray-100 shadow-lg gap-1.5 bg-white" style={{ "borderBottomRightRadius": "5rem", "borderTopLeftRadius": "5rem" }}>
      <div className=" table-row">
        <div className="table-cell w-14 h-14 rounded-full ring-1 ring-gray-100 shadow-md  bg-center text-center align-middle font-bold text-3xl text-green-400" >{number}</div>
        <div className="table-cell  align-middle font-extrabold text-lg tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-400" >&nbsp;{text}</div>
      </div>
      <div className="mt-4 md:mt-1 xl:mt-2 px-8 text-center font-bold text-gray-600">{bigText}</div>
    </div>
  )
}
