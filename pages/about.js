import Layout from '../components/layout/Layout'
function about() {
    return (
        <Layout title="Rayhan | About">
            <div className=" h-screen flex flex-row justify-center items-center">
                <div className=" flex flex-col mx-auto bg-white items-center">
                    <img className="w-32 h-32 mx-auto rounded-full -mt-20" src="/images/1612016993441.jpg" alt="" />
                    <div className="text-center text-3xl font-bold">Kamrul Hasan Rayhan</div>
                    <div className="text-center text-base font-semibold">@khrayhan</div>
                    <div className="text-center font-medium text-lg">Dhaka,Bangladesh</div>
                    <div className=" text-center font-base text-sm font-bold">
                        <p>
                            Full stack developer
                        </p>
                    </div>
                    <div className="w-1/5 text-center font-semibold mt-5 shadow-lg p-6 border-t-2 border-gray-700" >
                    I love writing clean codes for web and mobile applications, passionate about learning and exploring new technologies as well enthusiastic about UI/UX. As of my hobbies, I prefer playing games and listening to music.
                    Besides these, I'm a Muslim who believes in Allah and the prophet Mohammad.
                    </div>
                </div>
            </div>
            <div className=" font-sans h-screen w-full flex flex-row justify-center items-center" id="2">
                <div className="card w-3/4 mx-auto bg-white shadow">
                    <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src="" alt="" />
                    <div className="text-center mt-2 text-3xl font-medium">Tech Skills</div>
                    <hr className="mt-4" />
                    <div className="flex p-2">
                        <div className="w-1/2 text-center">
                            <span className="font-bold">1.8 k</span> Followers
                        </div>
                        <div className="w-0 border border-gray-300">

                        </div>
                        <div className="w-1/2 text-center">
                            <span className="font-bold">2.0 k</span> Following
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default about
