import React, { useState } from "react";

function Testimonial({ title, x }) {
  const [val, setVal] = useState(0);
  const [cur, setCur] = useState(x[val]);
  return (
    <div className="">
      <section className=" w-full relative overflow-hidden">
        <div className="relative max-w-4xl px-4 lg:px-0 mx-auto">
          <div className="max-w-xl mb-8">
            {/* <h2 className="text-2xl text-gray-800 font-bold font-heading">
              {title}
            </h2> */}
          </div>
          <div className="relative ">
            {/* {x.length > 2 ? (
              <>
                <div className="hidden lg:block absolute top-0 left-0 -ml-80 skew-y-[-8deg] mt-6">
                  <img
                    className="-mr-52 w-112 h-96 object-cover  rounded-3xl  opacity-50 "
                    src={x[val+1].imgLink}
                    alt=""
                  />
                </div>
                <div className="hidden lg:block absolute top-0 right-0 -mr-80 skew-y-[8deg] mt-6">
                  <img
                    className="-mr-52 w-112 h-96 object-cover  rounded-3xl  opacity-50 "
                    src={x[val+1].imgLink}
                    alt=""
                  />
                </div>
              </>
            ) : null} */}
            <div className="relative max-w-4xl mx-auto">
              <img
                className="w-full mb-12 object-cover rounded-xl object-right-bottom border-2 border-gray-50"
                src={cur.imgLink}
                alt=""
              />
              <div className="flex flex-wrap -mx-5">
                <div className="w-full lg:w-4/5 px-5 mb-6 lg:mb-0">
                  <div className="relative lg:py-12 py-5 px-10 lg:px-20 bg-gradient-to-br from-green-400 to-blue-400 rounded-xl">
                    <div
                      className="absolute top-[-3px] -mt-6 left-0 ml-16 w-14 h-14 bg-[#37D0A0] hidden lg:block"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 50%, 0% 50%, 0% 50%)",
                      }}
                    ></div>
                    <div className=" flex flex-col md:flex-row justify-between items-center">
                      <div>
                        <h3 className=" text-start text-xl text-white font-bold font-heading">
                          {cur.name}
                        </h3>
                        <p className="text-md text-start  text-white">
                          <span className=" font-semibold">Stack: </span>
                          {cur.stack}
                        </p>
                        <p className="text-md text-start text-white">
                          {cur.description}
                        </p>
                      </div>
                      {cur.liveAt ? (
                        <div className=" h-full flex items-center justify-center">
                          <p className="text-sm text-black mt-2 bg-white rounded-full w-20 p-1 text-center border-4 border-gray-50">
                            <a href={cur.liveAt} target="_blank">
                              Live
                            </a>
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="w-auto mx-auto lg:w-1/5 px-5">
                  <button
                    className="inline-flex mr-2 items-center justify-center w-14 h-14 bg-green-400 hover:bg-green-500 rounded-full"
                    onClick={() => {
                      if (val <= 0) {
                        val = x.length - 1;
                      } else {
                        val--;
                      }
                      setVal(val);
                      setCur(x[val]);
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      width="7"
                      height="13"
                      viewBox="0 0 7 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.84708 12.1077C7.05097 12.3133 7.05097 12.6436 6.84708 12.8476C6.64319 13.0517 6.31377 13.0525 6.10988 12.8476L0.152917 6.8708C-0.0509739 6.66673 -0.0509738 6.33645 0.152917 6.13087L6.10988 0.154027C6.31377 -0.0500387 6.64319 -0.0500386 6.84708 0.154027C7.05098 0.358848 7.05098 0.689887 6.84708 0.893952L1.4143 6.50121L6.84708 12.1077Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                  <button
                    className="inline-flex items-center justify-center w-14 h-14 bg-green-400 hover:bg-green-500 rounded-full"
                    onClick={() => {
                      if (val >= x.length - 1) {
                        val = 0;
                      } else {
                        val++;
                      }
                      setVal(val);
                      setCur(x[val]);
                    }}
                  >
                    <svg
                      className="w-3 h-3"
                      width="7"
                      height="13"
                      viewBox="0 0 1 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.152917 0.894235C-0.0509742 0.688658 -0.0509742 0.358375 0.152917 0.15431C0.356808 -0.0497557 0.686228 -0.0505119 0.89012 0.15431L6.84708 6.13116C7.05097 6.33522 7.05097 6.6655 6.84708 6.87108L0.890119 12.8479C0.686227 13.052 0.356807 13.052 0.152916 12.8479C-0.0509753 12.6431 -0.0509753 12.3121 0.152916 12.108L5.5857 6.50074L0.152917 0.894235Z"
                        fill="white"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
