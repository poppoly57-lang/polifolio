import { Link } from "react-router-dom"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import MyApproach from "../components/MyApproach"
import Contact from "../components/Contact"
import heroImage from "../assets/WhatsApp Image 2026-09-11 at 08.49.13.jpeg"
import meImage from "../assets/brand.jpeg"
import plantImage from "../assets/plantain.jpeg"
import polyImage from "../assets/me.jpeg"
import moleculeImage from "../assets/molecule.png"
import videoAsset from "../assets/video.mp4"
import "../styles/Home.css"

function Home() {
    return (
        <>
            <Navigation />
            <main className="home-hero">
                <img className="home-hero__image" src={heroImage} alt="Polycarp Prince outdoors" />
                <div className="home-hero__overlay" />
                <div className="home-hero__content">
                    <p className="home-hero__eyebrow">Welcome To Poly's World</p>
                    <h1>Hi, I'm<br />Polycarp<br />Prince Olupot</h1>
                    <h2>Web Designer &amp; Developer, Content Creator &amp; Video Editor, Graphic Designer</h2>
                    <p className="home-hero__intro">
                        I create modern, responsive and user-friendly digital experiences.
                    </p>
                    <div className="home-hero__actions">
                        <Link className="home-hero__button home-hero__button--primary" to="/projects">
                            View My Work
                        </Link>
                        <Link className="home-hero__button home-hero__button--secondary" to="/contact">
                            Let's Work Together
                        </Link>
                    </div>
                </div>
            </main>
            <section className="creative-intro" aria-labelledby="creative-intro-title">
                <div className="creative-intro__inner">
                    <div className="creative-intro__text">
                        <p className="creative-intro__eyebrow">A LITTLE ABOUT MY WORK</p>
                        <h2 id="creative-intro-title">I make things that look good and work well.</h2>
                        <div className="creative-intro__copy">
                            <p>
                                I work across web design, content creation and video editing, turning rough ideas into
                                work that feels clear, useful and worth remembering.
                            </p>
                            <p>
                                I bring ideas to life through design, technology and storytelling.
                            </p>
                            <p>
                                I build websites, create content and edit videos, always looking for a simple and
                                creative way to make the final result feel right.
                            </p>
                        </div>
                        <div className="creative-intro__details" aria-label="Professional focus areas">
                            <span>01 | WEB DESIGN</span>
                            <span>02 | CONTENT</span>
                            <span>03 | VIDEO</span>
                        </div>
                    </div>
                    <figure className="creative-intro__portrait">
                        <img src={polyImage} alt="Polycarp Prince Olupot outdoors" />
                        <figcaption>Polycarp Prince Olupot</figcaption>
                    </figure>
                </div>
            </section>
            <section className="selected-work-section" aria-labelledby="selected-work-title">
                <div className="selected-work-header">
                    <p className="selected-work-eyebrow">SELECTED WORK</p>
                    <div className="selected-work-heading">
                        <h2 id="selected-work-title">A few things I’ve been working on.</h2>
                        <p>
                            A mix of websites, visual content and video projects. Each project starts with an idea and
                            ends with something made to be seen, used or remembered.
                        </p>
                    </div>
                </div>
                <div className="selected-work-grid">
                    <Link className="selected-work-card selected-work-card--featured" to="/projects">
                        <div className="selected-work-image-wrap">
                            <img className="selected-work-image" src={moleculeImage} alt="Molecule Restaurant website project" />
                        </div>
                        <div className="selected-work-content">
                            <p className="selected-work-meta"><span>01</span> WEB DESIGN</p>
                            <h3>Molecule Restaurant</h3>
                            <p>Restaurant website design &amp; development</p>
                        </div>
                    </Link>
                    <Link className="selected-work-card selected-work-card--portrait" to="/projects">
                        <div className="selected-work-image-wrap">
                            <img className="selected-work-image" src={meImage} alt="Polyshotz visual identity project" />
                        </div>
                        <div className="selected-work-content">
                            <p className="selected-work-meta"><span>02</span> BRANDING</p>
                            <h3>Polyshotz</h3>
                            <p>Visual identity &amp; creative direction</p>
                        </div>
                    </Link>
                    <Link className="selected-work-card selected-work-card--wide" to="/projects">
                        <div className="selected-work-image-wrap">
                            <img className="selected-work-image" src={plantImage} alt="Social media content project" />
                        </div>
                        <div className="selected-work-content">
                            <p className="selected-work-meta"><span>03</span> CONTENT</p>
                            <h3>Social Media Content</h3>
                            <p>Creative content &amp; visual design</p>
                        </div>
                    </Link>
                    <Link className="selected-work-card selected-work-card--video" to="/projects">
                        <div className="selected-work-image-wrap">
                            <video className="selected-work-image" src={videoAsset} autoPlay muted loop playsInline aria-label="Video editing project" />
                        </div>
                        <div className="selected-work-content">
                            <p className="selected-work-meta"><span>04</span> VIDEO</p>
                            <h3>Video Editing</h3>
                            <p>Short-form video &amp; promotional content</p>
                        </div>
                    </Link>
                </div>
            </section>
            <MyApproach />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
