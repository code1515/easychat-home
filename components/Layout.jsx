import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>EasyChat</title>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <meta name='description' content='EasyChat Meet GPT-4o/mini, Your free, easy, and simple chat helper
                for fun talks, quick study tips, and creative ideas anytime for Everyone!' />
                {/*<link rel='icon' href='/favicon.ico' />*/}
                <link rel='icon' href='/easychat-favicon.svg' />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout