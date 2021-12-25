import Layout from '../components/layout/Layout'
import Contactcard from '../components/card/Contactcard'
import clientPromise from '../lib/mongodb'
import { useState } from "react";
import { useRouter } from 'next/router';
export default function contact() {
    const inputDesign = " text-lg font-semibold focus:ring-1 focus:ring-green-400 outline-none rounded-md h-12 border-2 border-gray-300 focus:border-green-400 p-2 md:mb-0 mb-3"
    const [inputs, setInputs] = useState({});
    const done = async (e) => {
        const data = await fetch(`/api/contact?username=${inputs.username}&email=${inputs.email}&phone=${inputs.phone}&message=${inputs.text}`)
        const res = await data.json();
        console.log(res);
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const router = useRouter();
    const handleSubmit = (event) => {
        router.push('/thanks')
        event.preventDefault();
    }

    return (
        <Layout title="Rayhan | Contact">
            <div className="w-full h-screen grid grid-rows-5 md:grid-cols-2 mt-16 md:mt-0 items-center justify-center justify-items-center" >
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

            </div>
            <div className=" w-full grid md:grid-rows-5 justify-items-center">
                <div className="xl:text-6xl lg:text-5xl text-4xl font-extrabold text-green-400 mx-5 self-center place-self-center justify-self-center mt-0 md:mt-4">Contacts<hr className=" w-16 mb-4 md:mb-0 h-2 bg-green-400 rounded-full " /></div>
                <div className="grid md:grid-cols-2 grid-cols-1 md:row-span-2 gap-4">
                    <div className="grid gap-4">
                        <Contactcard text="Facebook" srce="https://www.facebook.com/kamrulhassan.rayhan.7/" imgSrc="https://img.icons8.com/office/40/000000/facebook.png" />
                        <Contactcard text="Linkedin" srce="https://www.linkedin.com/in/kamrul-hasan-rayhan-76a42917b/" imgSrc="https://img.icons8.com/officel/40/000000/linkedin.png" />
                    </div>
                    <div className="grid gap-4">
                        <Contactcard text="Stack Overflow" srce="https://stackoverflow.com/users/16314541/rayhan" imgSrc="https://img.icons8.com/color/48/000000/stackoverflow.png" />
                        <Contactcard text="Github" srce="https://github.com/K-H-Rayhan?tab=repositories" imgSrc="https://img.icons8.com/nolan/48/github.png" />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export async function getStaticProps() {
    const client = await clientPromise
    const db = client.db("contact");
    fetch(`/api/contact`)
    .then(response => response.json())
    .then(datax => {
    })
    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands
    return {
        props: {},
    }
}