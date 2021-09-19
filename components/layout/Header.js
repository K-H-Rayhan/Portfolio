import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import router, { useRouter } from 'next/router'
function header() {
      const router = useRouter();
    return (
        <div className="fixed top-0 flex justify-center font-medium w-full shadow-md bg-white backdrop-filter backdrop-blur-sm bg-opacity-75 z-10 h-14 md:h-16">
            <Head>
                {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" /> */}
            </Head>
            <div className="w-3/4 flex flex-row justify-center md:justify-between my-3">
                <Link href="/" >
                    <img src="/images/unnamed.jpg" alt="" className=" rounded-full w-10 cursor-pointer hidden md:inline" />
                </Link>
                <div className="space-x-3 flex flex-nowrap items-center ">
                    <ul className={"hover:text-green-400 " + (router.pathname == '/' ? 'text-green-400' : '')}><Link href="/">Home</Link></ul>
                    <ul className={"hover:text-green-400 " + (router.pathname == '/projects' ? 'text-green-400' : '')}><Link href="/projects">Projects</Link></ul>
                    <ul className={"hover:text-green-400 " + (router.pathname == '/contact' ? 'text-green-400' : '')}><Link href="/contact">Contact</Link></ul>
                    <ul className={"hover:text-green-400 " + (router.pathname == '/about' ? 'text-green-400' : '')}><Link href="/about">About</Link></ul>
                    <ul className={"hover:text-green-400 " + (router.pathname == '/blog' ? 'text-green-400' : '')}><Link href="/blog">Blog</Link></ul>
                </div>
            </div>
        </div>
    )
}

export default header
