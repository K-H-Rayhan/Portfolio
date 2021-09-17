import Head from 'next/head'
import {useRouter} from 'next/router'
import Header from './Header'
import Footer from './Footer'
export default function Layout({ title, keywords, description, children }) {
    return (
        <div className="select-none h-screen ">
            <Head><title>{title}</title></Head>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />
            <Header />
            <div className="flex flex-col items-center"> {children}</div>
            <Footer />
        </div>
    )
}
Layout.defaultProps = {
    title: 'Rayhan | Software Engineer',
    description: 'Engineer',
    keywords: 'music, dj, edm, events'
}