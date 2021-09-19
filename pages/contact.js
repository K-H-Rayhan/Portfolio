import Layout from '../components/layout/Layout'
import Button from '../components/others/Button'
function contact() {
    return (
        <Layout title="Rayhan | Contact">
            <div className="md:h-screen w-full grid md:grid-cols-2 mt-16 md:mt-0 items-center justify-center justify-items-center">
                <div className="xl:text-6xl lg:text-5xl text-4xl font-extrabold flex-wrap grid grid-rows-2 items-center  text-green-400 underline m-5">Contact Me</div>
                <div className="flex items-center justify-center">
                    <form action="submit" className=" flex flex-col">
                        <input type="name" className="outline-none" placeholder="Name" />
                        <input type="email" className="outline-none" placeholder="Email" />
                        
                        <input type="number" className="outline-none" placeholder="Number" />
                        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" className="outline-none"></textarea>
                        <div className="self-center"><Button name="Send Message" /></div>
                    </form>
                </div>
            </div>
            <div className="md:h-screen w-full mt-16 md:mt-0 grid grid-rows-5">
                <div className="xl:text-6xl lg:text-5xl text-4xl font-extrabold text-green-400 underline m-5 self-center place-self-center justify-self-center">Other Contacts</div>
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