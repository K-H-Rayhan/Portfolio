import Button from '../components/others/Button'
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import Homecard from '../components/card/Homecard'
export default function Home() {
  return (
    <Layout title='Rayhan | Software Engineer' keywords="KHRayhan, KHR, Kamrul, Hasan, Rayhan, Programmer" description="Kamrul Hasan Rayhan Portfolio" >
      <div className="grid md:grid-cols-3 md:grid-rows-none grid-rows-2 h-screen items-center justify-items-center w-full lg:w-3/5 md:w-3/4 " >
        <div className="md:col-span-1 row-span-1 pt-12 md:pt-0">
          <img src="/images/16120170213243.jpg" alt="Kamrul Hasan Rayhan" className="rounded-full  md:w-80 w-52 " />
        </div>
        <div className="md:col-span-2 flex flex-col items-center text-center self-start md:self-center row-span-1 ">
          <div className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-blue-600  tracking-wider font-medium text-sm">GAMER, GRAPHIC DESIGNER, PROGRAMMER</div>
          <div className="flex xl:text-7xl lg:text-6xl text-5xl font-extrabold flex-wrap py-2 md:py-10 my-4 mx-4 md:my-0">I am a Full Stack Developer</div>
         <Button link="projects" name="Explore Projects &#8594;"/>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:h-screen items-center justify-items-center w-full bg-no-repeat bg-center bg-none md:bg-hero-pattern">
        <div className="text-center">
          <div className="flex xl:text-7xl lg:text-6xl text-5xl font-extrabold flex-wrap py-2 md:py-10 my-4 md:my-0 mb-5 md:mb-0" ><span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">My&nbsp;Stack</span></div>
          <Button link="projects" name="More &#8594;"/>
        </div>
        <div className="grid md:grid-cols-2  gap-2">
          <div className="flex flex-col place-content-center  gap-2">
            <Homecard src="/images/nextjs.png" name="NextJs" link="https://nextjs.org/" />
            <Homecard src="/images/tailwind.jpg" name="Tailwind" link="https://tailwindcss.com/" />

          </div>
          <div className="flex flex-col place-content-center  gap-2">
            <Homecard src="/images/nodejs.jpg" name="NodeJs" link="https://nodejs.org/en/" />
            <Homecard src="/images/mongodb.jpg" name="Mongodb" link="https://www.mongodb.com/" />
            <Homecard src="/images/wordpress.png" name="Wordpress" link="https://wordpress.com/" />
          </div>
        </div>
      </div>


      <div className="grid md:grid-cols-2 md:h-screen items-center justify-items-center w-full bg-no-repeat bg-center bg-none md:bg-hero-pattern">
        <div className="text-center">
          <div className="flex xl:text-7xl lg:text-6xl text-5xl font-extrabold flex-wrap py-2 md:py-10 my-4 md:my-0 mb-5 md:mb-0" ><span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">My Footsteps in Every Project</span></div>
          <Button link="projects" name="Cotact Me&#8594;"/>
        </div>
        <div className="grid md:grid-cols-2  gap-2">
          <div className="flex flex-col place-content-center  gap-2">
            <Homecard src="/images/nextjs.png" name="NextJs" link="https://nextjs.org/" />
            <Homecard src="/images/tailwind.jpg" name="Tailwind" link="https://tailwindcss.com/" />

          </div>
          <div className="flex flex-col place-content-center  gap-2">
            <Homecard src="/images/nodejs.jpg" name="NodeJs" link="https://nodejs.org/en/" />
            <Homecard src="/images/mongodb.jpg" name="Mongodb" link="https://www.mongodb.com/" />
            <Homecard src="/images/wordpress.png" name="Wordpress" link="https://wordpress.com/" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
