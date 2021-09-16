import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
function header() {
    let x= '/'
    if (typeof window !== "undefined") {
        x = window.location.pathname;
      }
    return (
        <div className="fixed top-0 flex justify-center font-medium w-full shadow-md bg-white backdrop-filter md:backdrop-blur backdrop-blur-sm bg-opacity-75 z-50 h-16">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>
            <div className="w-3/4 flex flex-row justify-center md:justify-between my-3">
                <Link href="/" >
                    <img src="/images/unnamed.jpg" alt="" className=" rounded-full w-10 cursor-pointer hidden md:inline" />
                </Link>
                <div className="space-x-3 flex flex-nowrap items-center ">
                    <ul className={"hover:text-indigo-600 " + (x == '/' ? 'text-indigo-600' : '')}><Link href="/">Home</Link></ul>
                    <ul className={"hover:text-indigo-600 " + (x == '/projects' ? 'text-indigo-600' : '')}><Link href="/projects">Projects</Link></ul>
                    <ul className={"hover:text-indigo-600 " + (x == '/contact' ? 'text-indigo-600' : '')}><Link href="/contact">Contact</Link></ul>
                    <ul className={"hover:text-indigo-600 " + (x == '/about' ? 'text-indigo-600' : '')}><Link href="/about">About</Link></ul>
                </div>
            </div>
        </div>
    )
}

export default header
