import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
function header() {
    return (
        <div className="fixed top-0 flex justify-center font-medium w-full shadow-md bg-white backdrop-filter backdrop-blur-md bg-opacity-75">
            <div className="w-3/4 flex flex-row justify-center sm:justify-between my-3">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
                </Head>
                <Link href="/" >
                <img src="/images/unnamed.jpg" alt="" className=" rounded-full w-10 cursor-pointer hidden sm:inline"/></Link>
                <div className="space-x-3 text-center flex flex-nowrap items-center">
                    <ul className="hover:text-gray-600"><Link href="/">Home</Link></ul>
                    <ul className="hover:text-gray-600"><Link href="/projects">Projects</Link></ul>
                    <ul className="hover:text-gray-600"><Link href="/contact">Contact</Link></ul>
                    <ul className="hover:text-gray-600"><Link href="/about">About</Link></ul>
                </div>
            </div>
        </div>
    )
}

export default header
