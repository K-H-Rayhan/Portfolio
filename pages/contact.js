import Layout from "../components/layout/Layout";
import Contactcard from "../components/card/Contactcard";
import { useState } from "react";
import { useRouter } from "next/router";
export default function contact() {
  const inputDesign =
    " text-lg font-semibold focus:ring-1 focus:ring-green-400 outline-none rounded-md h-12 border-2 border-gray-300 focus:border-green-400 p-2 md:mb-0 mb-3";
  const [inputs, setInputs] = useState({});
  const done = async (e) => {
    const data = await fetch(
      `https://khrayhan.me/api/contact?username=${inputs.username}&email=${inputs.email}&phone=${inputs.phone}&message=${inputs.text}`
    );
    const res = await data.json();
    console.log(res);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const router = useRouter();
  const handleSubmit = (event) => {
    router.push("/thanks");
    event.preventDefault();
  };

  return (
    <Layout title="Rayhan | Contact">
      <div className="bg-white py-20 lg:py-[120px] overflow-hidden relative m-4 md:h-screen md:w-3/4 flex content-center">
        <div className="container">
          <div className="flex flex-wrap md:justify-between">
            <div className="">
              <div className="max-w-[570px] mb-12 lg:mb-0">
                <span className="block mb-4 text-base text-green-400 font-semibold">
                  Contact Me
                </span>
                <h2
                  className="
                  text-dark
                  mb-6
                  uppercase
                  font-bold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
                >
                  GET IN TOUCH WITH ME
                </h2>
                {/* <p className="text-base text-body-color leading-relaxed mb-9">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim adiqua minim veniam quis nostrud exercitation ullamco
                </p> */}
              </div>
            </div>
            <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
              <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
                <form
                  onSubmit={handleSubmit}
                >
                  <div className="mb-6">
                    <input
                      type="text"
                      name="username"
                      value={inputs.username || ""}
                      onChange={handleChange}
                      placeholder="Name"
                      required
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[lightgray]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-green-400
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="email"
                      name="email"
                      value={inputs.email || ""}
                      onChange={handleChange}
                      placeholder="Email"
                      required
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[lightgray]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-green-400
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <input
                      type="phone"
                      name="phone"
                      value={inputs.phone || ""}
                      onChange={handleChange}
                      placeholder="Contact No."
                      required
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[lightgray]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-green-400
                        "
                    />
                  </div>
                  <div className="mb-6">
                    <textarea
                      name="text"
                      value={inputs.text || ""}
                      onChange={handleChange}
                      id=""
                      cols="30"
                      rows="4"
                      placeholder="Your Message"
                      required
                      className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[lightgray]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-green-400
                        "
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      onClick={done}
                      className="
                        w-full
                        text-white
                        bg-green-400
                        rounded
                        border border-green-400
                        p-3
                        transition
                        hover:bg-opacity-90
                        "
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" grid md:grid-rows-4 justify-items-center">
        <div className="xl:text-6xl lg:text-5xl text-4xl font-extrabold text-green-400 mx-5 self-center place-self-center justify-self-center mt-0 md:mt-4">
          Contacts
          <hr className=" w-16 mb-4 md:mb-0 h-2 bg-green-400 rounded-full " />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:row-span-2 gap-4">
          <div className="grid gap-4">
            <Contactcard
              text="Facebook"
              srce="https://www.facebook.com/kamrulhassan.rayhan.7/"
              imgSrc="https://img.icons8.com/office/40/000000/facebook.png"
            />
            <Contactcard
              text="Linkedin"
              srce="https://www.linkedin.com/in/kamrul-hasan-rayhan-76a42917b/"
              imgSrc="https://img.icons8.com/officel/40/000000/linkedin.png"
            />
          </div>
          <div className="grid gap-4">
            <Contactcard
              text="Stack Overflow"
              srce="https://stackoverflow.com/users/16314541/rayhan"
              imgSrc="https://img.icons8.com/color/48/000000/stackoverflow.png"
            />
            <Contactcard
              text="Github"
              srce="https://github.com/K-H-Rayhan?tab=repositories"
              imgSrc="https://img.icons8.com/nolan/48/github.png"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const res = fetch("https://khrayhan.me/api/contact");
  return {
    props: {}, // will be passed to the page component as props
  };
}


      {/* <div className="w-full h-screen grid grid-rows-5 md:grid-cols-2 mt-16 md:mt-0 items-center justify-center justify-items-center" >
                <div className="md:text-6xl text-4xl font-extrabold flex-wrap text-green-400 mx-5 md:row-start-2 ">
                    Contact Me<hr className="mt-3 w-16 h-2 bg-green-400 rounded-full " />
                    <div className=" bg-fixed bg-contactBg w-full"></div>
                </div>
                
                <div className="flex items-center justify-center w-full row-span-3 row-start-2">
                    <form className=" flex flex-col w-full p-2 md:p-10 md:gap-5" onSubmit={handleSubmit}>
                        <input type="text" name="username"
                            value={inputs.username || ""}
                            onChange={handleChange} className={inputDesign} placeholder="Name" required />
                        <input type="email" name="email"
                            value={inputs.email || ""}
                            onChange={handleChange} className={inputDesign} placeholder="Email" required />
                        <input type="phone" name="phone"
                            value={inputs.phone || ""}
                            onChange={handleChange} className={inputDesign} placeholder="Contact No." required />
                        <textarea name="text"
                            value={inputs.text || ""}
                            onChange={handleChange} id="" cols="30" rows="4" className=" text-lg font-semibold focus:ring-1 focus:ring-green-400 outline-none  rounded-md border-2 border-gray-300 focus:border-green-400 p-2" placeholder="Your Message" required></textarea>
                        <div className="self-center mt-6">
                            <button type="submit" className="bg-green-400 hover:bg-green-500 text-sm text-white font-bold py-6 px-12 rounded-full tracking-widest transform duration-500 hover:-translate-y-4 mt-3 mb-10" onClick={done}>Submit</button>
                        </div>
                    </form>
                </div>

            </div> */}