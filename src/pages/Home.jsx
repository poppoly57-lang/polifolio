import Navigation from "../components/Navigation"
import Content from "../components/Content"
import Footer from "../components/Footer"
import "../styles/Home.css"
function Home() {
    return(
        <>
        <Navigation />
        <main>
            <h1 className="title">POLYCARP PRINCE </h1>
            <h2>Welcome to my Poly's Wold</h2>
            <p>Welcome to my portfolio! I'm a passionate developer with experience in various technologies.</p>
        </main>
        <Footer />
        </>
    )

}
export default Home
