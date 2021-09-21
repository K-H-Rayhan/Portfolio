import Layout from '../components/layout/Layout'
import Button from '../components/others/Button'
import Contactcard from '../components/card/Contactcard'
function contact() {
    const inputDesign = " text-lg font-semibold focus:ring-1 focus:ring-green-400 outline-none rounded-md h-12 border-2 border-gray-300 focus:border-green-400 p-2 md:mb-0 mb-3"
    return (
        <Layout title="Rayhan | Contact">
            <div className="h-screen w-full grid grid-rows-5 md:grid-cols-2 mt-16 md:mt-0 items-center justify-center justify-items-center">
                <div className="md:text-6xl text-4xl font-extrabold flex-wrap text-green-400 mx-5 md:row-start-2">
                    Contact Me<hr className="mt-3 w-16 h-2 bg-green-400 rounded-full" />
                </div>
                <div className="flex items-center justify-center w-full row-span-3 row-start-2">
                    <form action="submit" className=" flex flex-col w-full p-2 md:p-10 md:gap-5" >
                        <input type="name" name="name" className={inputDesign} placeholder="Name" />
                        <input type="name" name="email" className={inputDesign} placeholder="Email" />
                        <input type="name" name="number" className={inputDesign} placeholder="Contact No." />
                        <textarea name="" id="" cols="30" rows="4" className=" text-lg font-semibold focus:ring-1 focus:ring-green-400 outline-none  rounded-md border-2 border-gray-300 focus:border-green-400 p-2" placeholder="Your Message"></textarea>
                        <div className="self-center mt-6"><Button name="Send Message" className="" /></div>
                    </form>
                </div>
                <hr className=" w-24 h-2 bg-green-400 rounded-full md:hidden" />
            </div>

            <div className=" w-full grid md:grid-rows-5 items-center justify-items-center">
                <div className="xl:text-6xl lg:text-5xl text-4xl font-extrabold text-green-400 mx-5 self-center place-self-center justify-self-center mt-0 md:mt-4">Others<hr className=" w-16 mb-4 md:mb-0 h-2 bg-green-400 rounded-full " /></div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:row-span-2 gap-4">
                    <div className="grid gap-4">
                        <Contactcard text="Facebook" srce="https://www.facebook.com/kamrulhassan.rayhan.7/" imgSrc="https://img.icons8.com/office/40/000000/facebook.png"/>
                        <Contactcard text="Linkedin" srce="https://www.linkedin.com/in/kamrul-hasan-rayhan-76a42917b/" imgSrc="https://img.icons8.com/officel/40/000000/linkedin.png" />
                    </div>
                    <div className="grid gap-4">
                        <Contactcard text="Stack Overflow" srce="https://stackoverflow.com/users/16314541/rayhan" imgSrc="https://img.icons8.com/color/48/000000/stackoverflow.png"/>
                        <Contactcard text="Github" srce="https://github.com/K-H-Rayhan?tab=repositories" imgSrc="https://img.icons8.com/nolan/48/github.png"/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default contact