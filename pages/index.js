import Button from "../components/others/Button";
import Layout from "../components/layout/Layout";
import Designstep from "../components/card/Designstep";
import Homecard from "../components/card/Homecard";
import Testimonial from "../components/card/Testimonial";
import { Tab } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
export default function Home() {
  const projects = useRef();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const reactJs = [
    {
      name: "University Finder",
      description: "Find university according to your qualification",
      stack: "NextJs and ExpressJs",
      imgLink: "/images/Nextjs3.jpg",
      liveAt: "https://universityfinder.vercel.app/",
    },
    {
      name: "Chatfire",
      stack: "React and Firebase",
      description: "Public Chatting application with real time texting",
      imgLink: "/images/ReactJs.jpg",
      liveAt: "https://chatfire.netlify.app/",
    },
    {
      name: "KHRayhan",
      description: "My Personal Portfolio and Blog",
      stack: "NextJs and Tailwind",
      imgLink: "/images/nextjs1.jpg",
      liveAt: "https://khrayhan.me/",
    },
  ];
  const reactNative = [
    {
      name: "Contact App",
      description: "Contact app with authentication and contact syncing",
      imgLink: "/images/reactNative.jpg",
      stack: "React Native and React Native Paper",
    },
  ];
  const wordpress = [
    {
      name: "Gadget Store",
      description: "Online Gadget Store for all type gadgets",
      imgLink: "/images/Wordpress.jpg",
      stack: "Wordpress and Elementor",
    },
    {
      name: "Clothstate",
      description: "Online Bike Accessories Store",
      imgLink: "/images/Wordpress2.jpg",
      stack: "Wordpress and Elementor",
    },
    {
      name: "Atxbay",
      description: "Online Clothing Store",
      imgLink: "/images/Wordpress3.jpg",
      stack: "Wordpress and Elementor",
    },
  ];

  const [anim, setAnim] = useState({
    scale: "scale-0",
    opacity: "opacity-0",
    translateRight: "translate-x-[1000px]",
    translateLeft: "translate-x-[-1000px]",
  });
  useEffect(() => {
    setTimeout(() => {
      setAnim((prev) => ({
        ...prev,
        scale: "scale-100",
        opacity: "opacity-100",
        translateRight: "translate-x-0",
        translateLeft: "translate-x-0",
      }));
    }, 0);
  }, []);
  return (
    <Layout
      title="Rayhan | Web Developer"
      keywords="KHRayhan, KHR, Kamrul, Hasan, Rayhan, Programmer"
      description="Kamrul Hasan Rayhan Portfolio"
    >
      <div className="grid md:grid-cols-3 md:grid-rows-none grid-rows-2 h-screen items-center justify-items-center w-full lg:w-3/5 md:w-3/4 ">
        <div className={`md:col-span-1 row-span-1 pt-12 md:pt-0 `}>
          {/* transform transition-all duration-500 ease-out  ${anim.translateLeft} */}
          <img
            src="/images/16120170213243.jpg"
            alt="Kamrul Hasan Rayhan"
            className="rounded-full  md:w-80 w-52 "
          />
        </div>
        <div className="md:col-span-2 flex flex-col items-center text-center self-start md:self-center row-span-1 overflow-hidden ">
          <div className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-blue-600  tracking-wider font-medium text-sm">
            GAMER, GRAPHIC DESIGNER, PROGRAMMER
          </div>
          <div
            className={`flex xl:text-7xl lg:text-6xl text-5xl font-extrabold flex-wrap py-2 md:py-10 my-4 mx-4 md:my-0 text-black transform transition-all duration-500 ease-out ${anim.scale}`}
          >
            I am a Full Stack Web Developer
          </div>
          {/* <Button link="blog" name="Explore Blogs &#8594;" /> */}
          <button
            onClick={() => {
              projects.current.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className={` bg-green-400 hover:bg-green-500 text-sm text-white font-bold py-6 px-12 rounded-full tracking-widest transform duration-700 hover:-translate-y-4 mt-3 mb-10 ${anim.translateRight}`}
          >
            Explore Projects &#8594;
          </button>
        </div>
      </div>
      <div className="w-screen h-screen" ref={projects}>
        <div className="flex text-center w-screen justify-center mt-16 lg:mt-20">
          <span className="text-lg text-green-400 font-extrabold md:font-bold">
            My Projects
          </span>
        </div>
        <Tab.Group>
          <div className="flex text-center w-screen justify-center">
            <Tab.List className="flex p-1 space-x-1 bg-white shadow-md m-3 border-green-300 rounded-3xl w-80">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-1/3 py-2.5 text-sm font-medium rounded-3xl",
                    "focus:outline-none",
                    selected
                      ? "bg-green-400 shadow text-white"
                      : "text-black hover:bg-green-400 hover:text-white"
                  )
                }
              >
                ReactJS
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-1/3 py-2.5 text-sm font-medium rounded-3xl text-center",
                    "focus:outline-none ",
                    selected
                      ? "bg-green-400  shadow text-white"
                      : "text-black hover:bg-green-400 hover:text-white"
                  )
                }
              >
                React Native
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-1/3 py-2.5 text-sm font-medium rounded-3xl text-center",
                    "focus:outline-none ",
                    selected
                      ? "bg-green-400  shadow text-white"
                      : "text-black hover:bg-green-400 hover:text-white"
                  )
                }
              >
                Wordpress
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels className="w-screen">
            <Tab.Panel
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none "
              )}
            >
              <Testimonial title="ReactJS" x={reactJs} />
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none "
              )}
            >
              <Testimonial title="React Native" x={reactNative} />
            </Tab.Panel>
            <Tab.Panel
              className={classNames(
                "bg-white rounded-xl p-3",
                "focus:outline-none "
              )}
            >
              <Testimonial title="Wordpress" x={wordpress} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="grid lg:grid-cols-2 lg:h-screen items-center justify-items-center w-full mt-4 lg:mt-0">
        <div className="text-center">
          <div className="flex xl:text-7xl lg:text-6xl text-5xl font-extrabold flex-wrap py-2 lg:py-10 my-4 lg:my-0 mb-5 lg:mb-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">
              My&nbsp;Stack
            </span>
          </div>
          <Button link="about#techSkill" name="More &#8594;" />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex flex-col place-content-center  gap-2">
            <Homecard
              src="/images/nextjs.png"
              name="NextJs"
              link="https://nextjs.org/"
              effect="-"
            />
            <Homecard
              src="/images/tailwind.jpg"
              name="Tailwind"
              link="https://tailwindcss.com/"
              effect="-"
            />
          </div>
          <div className="flex flex-col place-content-center  gap-2">
            <Homecard
              src="/images/nodejs.jpg"
              name="NodeJs"
              link="https://nodejs.org/en/"
              effect=""
            />
            <Homecard
              src="/images/mongodb.jpg"
              name="Mongodb"
              link="https://www.mongodb.com/"
              effect=""
            />
            <Homecard
              src="/images/express.jpg"
              name="ExpressJs"
              link="https://expressjs.com/"
              effect=""
            />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-7 md:h-screen items-center justify-items-center w-full mt-24 md:mt-0">
        <div className="text-center block lg:hidden ">
          <div className="flex xl:text-7xl lg:text-6xl text-5xl font-extrabold flex-wrap py-2 md:py-10 my-4 md:my-0 mb-5 md:mb-0 mx-4 md:mx-0">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">
              My Goals in Every Project
            </span>
          </div>
          <Button link="contact" name="Cotact Me&#8594;" />
        </div>
        <div className="lg:col-span-4 flex flex-col md:flex-row">
          <div className="flex flex-col md:ml-4 place-content-center  ">
            <Designstep number="1" text="Simple Design" />
            <Designstep number="2" text="High Performance" />
            <Designstep number="3" text="Better SEO" />
          </div>
          <div className="flex flex-col place-content-center md:ml-4 md:mt-0">
            <Designstep number="4" text="Responsiveness" />
            <Designstep number="5" text="No Bugs & Errors" />
            <Designstep number="6" text="Clean Code" />
          </div>
        </div>
        <div className="text-center md:col-span-3 hidden lg:block ">
          <div className="flex xl:text-7xl lg:text-6xl text-5xl font-extrabold flex-wrap py-2 md:py-10 my-4 md:my-0 mb-5 md:mb-0 mx-8 ">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400">
              My Goals in Every Project
            </span>
          </div>
          <Button link="contact" name="Cotact Me&#8594;" />
        </div>
      </div>
    </Layout>
  );
}
