import Layout from '../components/layout/Layout'
import Button from '../components/others/Button'
function contact() {
    return (
        <Layout title="Rayhan | Contact">
            <div className="md:h-screen w-full grid md:grid-cols-2 mt-16 md:mt-0 items-center justify-center justify-items-center">
                <div className="xl:text-6xl lg:text-5xl text-4xl font-extrabold flex-wrap grid grid-rows-2 items-center  text-green-400 mx-5">Contact Me<hr className=" w-16 h-2 bg-green-400 rounded-full" /></div>
                <div className="flex items-center justify-center w-full">
                    <form action="submit" className=" flex flex-col w-full p-2 md:p-10 gap-3 md:gap-5" >
                        <input type="name" name="name" className=" text-lg font-semibold focus:ring-1 focus:ring-green-400 outline-none rounded-md h-12 border-2 border-gray-300 focus:border-green-400 p-2" placeholder="Name" />
                        <input type="name" name="email" className=" text-lg font-semibold focus:ring-1 focus:ring-green-400 outline-none  rounded-md h-12 border-2 border-gray-300 focus:border-green-400 p-2" placeholder="Email" />
                        <input type="name" name="number" className=" text-lg  font-semibold focus:ring-1 focus:ring-green-400 outline-none  rounded-md h-12 border-2 border-gray-300 focus:border-green-400 p-2" placeholder="Contact No." />
                        <textarea name="" id="" cols="30" rows="4" className=" text-lg font-semibold focus:ring-1 focus:ring-green-400 outline-none  rounded-md border-2 border-gray-300 focus:border-green-400 p-2" placeholder="Your Message"></textarea>
                        <div className="self-center"><Button name="Send Message" className=" disabled:"/></div>
                    </form>
                </div>
            </div>
            <div className="md:h-screen w-full mt-16 md:mt-0 grid grid-rows-5">
                <div className="xl:text-6xl lg:text-5xl text-4xl font-extrabold text-green-400 mx-5 self-center place-self-center justify-self-center">Other Contacts<hr className="w-full h-2 bg-green-400 rounded-full" /></div>
                <div className="grid grid-cols-2">
                    <div>
                        <div>asdf</div>
                        <div>asdf</div>
                        <div>asdf</div>

                    </div>
                    <div>
                        asdasd
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default contact