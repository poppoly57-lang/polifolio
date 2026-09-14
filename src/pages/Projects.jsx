import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import moleculeImage from "../assets/molecule.png"
import brandImage from "../assets/juice.jpeg"
import contentImage from "../assets/plant.jpeg"
import videoAsset from "../assets/video.mp4"
import "../styles/Projects.css"

export default function Projects() {
    return (
        <>
            <Navigation />
            <main className="projects-page">
                <section className="projects-intro" aria-labelledby="projects-page-title">
                    <p className="projects-intro-label">PROJECTS</p>
                    <h1 className="projects-intro-title" id="projects-page-title">Things I&apos;ve made.</h1>
                    <p className="projects-intro-description">
                        A collection of websites, visual content and creative projects I&apos;ve worked on — from the first idea to the finished result.
                    </p>
                </section>

                <section className="projects-featured" aria-labelledby="projects-featured-title">
                    <div className="projects-featured-media">
                        <img src={moleculeImage} alt="Molecule Restaurant visual identity" />
                    </div>
                    <div className="projects-featured-content">
                        <div className="projects-project-meta">
                            <span>01</span>
                            <span>WEB DESIGN / DEVELOPMENT</span>
                        </div>
                        <h2 className="projects-featured-title" id="projects-featured-title">MOLECULE RESTAURANT</h2>
                        <p className="projects-featured-description">
                            A modern restaurant website designed to give the brand a stronger digital presence while making it easy for visitors to explore the restaurant and its offerings.
                        </p>
                        <dl className="projects-featured-details">
                            <div><dt>ROLE</dt><dd>Web Design · Development</dd></div>
                            <div><dt>TOOLS</dt><dd>React · JavaScript · HTML · CSS</dd></div>
                            <div><dt>YEAR</dt><dd>2026</dd></div>
                        </dl>
                        <a className="projects-project-link" href="https://moleculerestaurant.poppoly57.workers.dev" target="_blank" rel="noopener noreferrer">
                            VIEW LIVE PROJECT <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </section>

                <section className="projects-other" aria-labelledby="projects-other-title">
                    <div className="projects-other-heading">
                        <p className="projects-other-label">OTHER PROJECTS</p>
                        <h2 className="projects-other-title" id="projects-other-title">A few more things I&apos;ve made.</h2>
                    </div>
                    <div className="projects-grid">
                        <article className="projects-project projects-project--branding">
                            <div className="projects-project-media"><img src={brandImage} alt="Polyshotz brand identity" /></div>
                            <div className="projects-project-info">
                                <div className="projects-project-meta"><span>02</span><span>BRANDING</span></div>
                                <h3 className="projects-project-title">JUICE CORNER LOGO</h3>
                                <p className="projects-project-description">A creative branding project for a juice corner business.</p>
                            </div>
                        </article>
                        <article className="projects-project projects-project--content">
                            <div className="projects-project-media"><img src={contentImage} alt="Social media content artwork" /></div>
                            <div className="projects-project-info">
                                <div className="projects-project-meta"><span>03</span><span>CONTENT</span></div>
                                <h3 className="projects-project-title">BUSINESS FLYERS</h3>
                                <p className="projects-project-description">A collection of social media graphics, promotional designs and visual content created for digital platforms.</p>
                            </div>
                        </article>
                        <article className="projects-project projects-project--video">
                            <div className="projects-project-media"><video src={videoAsset} muted loop playsInline controls aria-label="Video editing project preview" /></div>
                            <div className="projects-project-info">
                                <div className="projects-project-meta"><span>04</span><span>VIDEO</span></div>
                                <h3 className="projects-project-title">VIDEO EDITING</h3>
                                <p className="projects-project-description">Creative video editing focused on turning raw footage into clear, engaging visual stories.</p>
                            </div>
                        </article>
                        <article className="projects-project projects-project--juice">
                            <div className="projects-project-placeholder" aria-label="Juice Corner project visual placeholder">
                                <span>JUICE<br />CORNER</span>
                            </div>
                            <div className="projects-project-info">
                                <div className="projects-project-meta"><span>05</span><span>WEB DESIGN</span></div>
                                <h3 className="projects-project-title">JUICE CORNER</h3>
                                <p className="projects-project-description">An e-commerce website concept created for a fresh fruit juice business.</p>
                                <span className="projects-project-unavailable">LIVE PROJECT COMING SOON</span>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}