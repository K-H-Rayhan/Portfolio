import Image from 'next/image'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
export default function Home() {
  const dpw = 300
  return (
    <Layout>
      <div className="grid md:grid-cols-3 grid-cols-1 my-3.5 md:my-0 h-screen items-center justify-items-center w-full lg:w-3/5 md:w-3/4" >
        <div className="md:col-span-2 flex flex-col items-center text-center">
          <div className="tracking-wider text-sm">GAMER, GRAPHICS DESIGNER, PROGRAMMER</div>
          <div className="flex xl:text-7xl lg:text-6xl text-5xl font-extrabold flex-wrap py-2 md:py-10">I am a Full Stack Developer</div>
          <Link href="/projects"><button className="bg-indigo-600 hover:bg-indigo-700 text-sm text-white font-bold py-6 px-12 rounded-full tracking-widest transform duration-500 hover:-translate-y-4 mt-3">Explore Projects &#8594;</button></Link>
        </div>
        <div className="md:col-span-1 self-start md:self-center">
          <img src="/images/16120170213243.jpg" alt=""  className="rounded-full  md:w-80 w-52"/>
        </div>

        
      </div>
    </Layout>
  )
}
