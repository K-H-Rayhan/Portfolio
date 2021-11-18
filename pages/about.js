import Layout from '../components/layout/Layout'
function about() {
    return (
        <Layout title="Rayhan | About">
            <div className=" h-screen flex flex-col justify-center items-center">
            <div className="md:text-6xl text-4xl font-extrabold flex-wrap text-green-400 mx-5 md:row-start-2 mb-8">
                    About Me<hr className="mt-3 w-16 h-2 bg-green-400 rounded-full" />
                </div>
                <div className=" flex flex-col mx-auto bg-white items-center">
                    <div className=" flex flex-col">
                        <img className="w-32 h-32 mx-auto rounded-full border-2 mb-2 border-gray-100 " src="/images/1612016993441.jpg" alt="" />
                        <div className="text-center font-semibold text-lg tracking-wide">Kamrul Hasan Rayhan</div>
                        <div className="text-center text-base">@khrayhan</div>
                    </div>
                    <div className="w-full sm:w-2/5 lg:w-2/5 text-center mt-5 font-semibold  md:border-t-2 border-green-400 md:shadow-lg p-6 sm:text-lg sm:tracking-wide sm:rounded-xl" >
                        I'm a Full Stack Developer from Dhaka, Bangladesh. <br />
                        I always strive to write elegent and efficient code. Passionate about learning and exploring new technologies as
                        well as enthusiastic about UI/UX.<br />
                        When I'm not coding, I am either playing games or listening to music.
                    </div>
                </div>
            </div>
            <div className="md:h-screen flex md:flex-row justify-center items-center flex-col mb-14" id="techSkill">
            <div className="md:text-6xl text-4xl font-extrabold flex-wrap text-green-400 mx-5 md:row-start-2">
                    Tech Skills<hr className="mt-3 w-16 h-2 bg-green-400 rounded-full" />
                </div>
                <div className="w-full sm:w-2/5 lg:w-2/5 text-center mt-5 font-semibold md:border-t-2 border-green-400 md:shadow-lg p-6 text-lg tracking-wide sm:rounded-xl" >
                    <div className="font-extrabold text-lg tracking-wide " >Libraries & Frameworks: <span className="font-bold text-base tracking-tight  " >
                        React, NextJS, Tailwind, Bootstrap, ExpressJs</span><br /></div>
                    <div className="font-extrabold text-lg tracking-wide" >Databases: <span className="font-bold text-base tracking-tight " >
                        MongoDB, MySQL</span><br /></div>
                        <div className="font-extrabold text-lg tracking-wide" >Miscellaneous: <span className="font-bold text-base tracking-tight " >
                        Wordpress, Elementor</span><br /></div>
                </div>
            </div>
        </Layout>
    )
}

export default about
