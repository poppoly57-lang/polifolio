import Navigation from "../components/Navigation"
import aboutImage from "../assets/shadia.jpeg"
import "../styles/About.css"

function About() {
    return (
        <>
            <Navigation />
            <main className="about-intro">
                <div className="about-intro-container">
                    <div className="about-intro-content">
                        <p className="about-intro-label">ABOUT ME</p>
                        <h1 className="about-intro-title">I’m a creative who enjoys turning ideas into something real.</h1>
                        <p className="about-intro-description">
                            I enjoy exploring ideas, experimenting with different ways of creating, and turning simple concepts into work that has purpose. From building websites to creating visual content, designing graphics and editing videos, I’m always looking for a better way to bring an idea to life.
                        </p>
                        <div className="about-details" aria-label="Personal information">
                            <div className="about-detail">
                                <p className="about-detail-label">BASED IN</p>
                                <p className="about-detail-value">Kampala, Uganda</p>
                            </div>
                            <div className="about-detail">
                                <p className="about-detail-label">I WORK IN</p>
                                <p className="about-detail-value">Web Development · Content Creation · Video Editing</p>
                            </div>
                            <div className="about-detail">
                                <p className="about-detail-label">OPEN TO</p>
                                <p className="about-detail-value">New projects &amp; collaborations</p>
                            </div>
                        </div>
                    </div>
                    <figure className="about-intro-image-wrapper">
                        <img
                            className="about-intro-image"
                            src={aboutImage}
                            alt="Polycarp Prince Olupot"
                        />
                    </figure>
                </div>
            </main>
        </>
    )
}

export default About 