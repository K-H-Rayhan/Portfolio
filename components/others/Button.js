import React from 'react'
import Link from 'next/link'
export default function Button(props) {
    return (
        <Link href={"/"+props.link}><button className="bg-green-400 hover:bg-green-500 text-sm text-white font-bold py-6 px-12 rounded-full tracking-widest transform duration-500 hover:-translate-y-4 mt-3 mb-10">{props.name}</button></Link>
    )
}
