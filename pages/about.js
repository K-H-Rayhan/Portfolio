import Layout from '../components/layout/Layout'
function about() {
    return (
        <Layout title="Rayhan | About">
            <div className=" h-screen w-full flex flex-row justify-center items-center">
                <div className="w-full mx-auto bg-white">
                    <img className="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white" src="/images/1612016993441.jpg" alt="" />
                    <div className="text-center mt-2 text-3xl font-bold">Kamrul Hasan Rayhan</div>
                    <div className="text-center mt-2 font-light text-base">@khrayhan</div>
                    <div className="text-center font-medium text-lg">Dhaka,Bangladesh</div>
                    <div className="px-6 text-center font-base text-sm">
                        <p>
                            Full stack developer
                        </p>
                    </div>
                    <div className="flex justify-center">
                        asd
                    </div>
                </div>
            </div>
            <div className=" font-sans h-screen w-full flex flex-row justify-center items-center" id="2">
                <div className="card w-3/4 mx-auto bg-white shadow">
                    <img className="w-32 mx-auto rounded-full -mt-20 border-8 border-white" src="" alt="" />
                    <div className="text-center mt-2 text-3xl font-medium">Kamrul Hasan Rayhan</div>
                    <div className="text-center mt-2 font-light text-sm">@khrayhan</div>
                    <div className="text-center font-normal text-lg">Dhaka,Bangladesh</div>
                    <div className="px-6 text-center font-light text-sm">
                        <p>
                            Full stack developer
                        </p>
                    </div>
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
