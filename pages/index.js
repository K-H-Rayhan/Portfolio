import Image from 'next/image'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
export default function Home() {
  return (
    <Layout  title='Rayhan | Software Engineer' keywords="KHRayhan, KHR, Kamrul, Hasan, Rayhan, Programmer" description="Kamrul Hasan Rayhan Portfolio" >
      <div className="grid md:grid-cols-3 md:grid-rows-none grid-rows-2 my-3.5 md:my-0 h-screen items-center justify-items-center w-full lg:w-3/5 md:w-3/4" >
        <div className="md:col-span-1 row-span-1 pt-12 md:pt-0">
          <img src="/images/16120170213243.jpg" alt="Kamrul Hasan Rayhan"  className="rounded-full  md:w-80 w-52 "/>
        </div>
        <div className="md:col-span-2 flex flex-col items-center text-center self-start md:self-center row-span-1">
          <div className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-green-600 tracking-wider text-sm">GAMER, GRAPHICS DESIGNER, PROGRAMMER</div>
          <div className="flex xl:text-7xl lg:text-6xl text-5xl font-extrabold flex-wrap py-2 md:py-10">I am a Full Stack Developer</div>
          <Link href="/projects"><button className="bg-green-400 hover:bg-green-700 text-sm text-white font-bold py-6 px-12 rounded-full tracking-widest transform duration-500 hover:-translate-y-4 mt-3">Explore Projects &#8594;</button></Link>
        </div>        
      </div>
  
    </Layout>
  )
}
