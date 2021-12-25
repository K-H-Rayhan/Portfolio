import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
export default function Layout({ title, keywords, description, children }) {
    return (
        <div className="select-none h-screen overflow-scroll scrollbar scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-white scrollbar-thumb-rounded-full font-inter">
            <Head><title>{title}</title></Head>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <Header />
            <div className="flex flex-col items-center "> {children}</div>
            <Footer />
        </div>
    )
}
Layout.defaultProps = {
    title: 'Rayhan | Software Engineer',
    description: 'Kamrul Hasan Rayhan Portfolio',
    keywords: 'KHRayhan, KHR, Kamrul, Hasan, Rayhan, Programmer'
}