import { Link } from "react-router-dom"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import MyApproach from "../components/MyApproach"
import Contact from "../components/Contact"
import heroImage from "../assets/WhatsApp Image 2026-09-11 at 08.49.13.jpeg"
import meImage from "../assets/brand.jpeg"
import plantImage from "../assets/plantain.jpeg"
import moleculeImage from "../assets/molecule-restaurant-site.png"
import juiceImage from "../assets/juice-corner-site.png"
import academyImage from "../assets/science-scholar-academy-site.png"
import videoAsset from "../assets/video.mp4"
import "../styles/Home.css"

const featuredProjects = [
    {
        name: "Molecule Restaurant",
        category: "Restaurant Website",
        description: "A polished restaurant experience built around its identity, menu and guests.",
        image: moleculeImage,
        imageAlt: "Molecule Restaurant website screenshot",
        url: "https://moleculerestaurant.poppoly57.workers.dev/",
    },
    {
        name: "Juice Corner",
        category: "E-commerce Website",
        description: "A fresh, user-friendly shop experience for discovering juice products.",
        image: juiceImage,
        imageAlt: "Juice Corner website screenshot",
        url: "https://juice-corner.poppoly57.workers.dev/",
    },
    {
        name: "Science Scholar Academy",
        category: "Educational Platform",
        description: "A clear, organized place for students to explore subjects and learning resources.",
        image: academyImage,
        imageAlt: "Science Scholar Academy website screenshot",
        url: "https://science-scholar-academy.poppoly57.workers.dev/",
    },
]

function Home() {
    return (
        <>
            <Navigation />
            <main className="home-page">
                <section className="home-hero" aria-labelledby="home-hero-title">
                    <div className="home-hero__content">
                        <p className="home-hero__eyebrow">POLYCARP PRINCE OLUPOT</p>
                        <h1 id="home-hero-title">I make things that look good and work well.</h1>
                        <h2>Web Development <span>·</span> Content Creation <span>·</span> Video Editing</h2>
                        <p className="home-hero__intro">
                            I turn ideas into thoughtful digital experiences, visual content and video.
                        </p>
                        <div className="home-hero__actions">
                            <Link className="home-hero__button home-hero__button--primary" to="/projects">
                                VIEW MY WORK
                            </Link>
                            <Link className="home-hero__button home-hero__button--secondary" to="/contact">
                                GET IN TOUCH <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </div>
                    <figure className="home-hero__visual">
                        <img className="home-hero__image" src={heroImage} alt="Polycarp Prince Olupot outdoors in Kampala" fetchpriority="high" />
                        <figcaption><span>01</span> DESIGN · BUILD · CREATE</figcaption>
                    </figure>
                </section>
            <section className="creative-intro" aria-labelledby="creative-intro-title">
                <div className="creative-intro__inner">
                    <div className="creative-intro__text">
                        <p className="creative-intro__eyebrow">WHAT I DO</p>
                        <h2 id="creative-intro-title">I make things that look good and work well.</h2>
                        <div className="creative-intro__copy">
                            <p>
                                My work brings together web development, content creation and video editing. I like a clear idea,
                                thoughtful details and an end result that feels useful.
                            </p>
                        </div>
                    </div>
                    <div className="home-services" aria-label="Services">
                        <article className="home-service">
                            <span>01</span>
                            <div><h3>Web Development</h3><p>Responsive websites built to look clear and work smoothly.</p></div>
                            <span className="home-service__arrow" aria-hidden="true">↗</span>
                        </article>
                        <article className="home-service">
                            <span>02</span>
                            <div><h3>Content Creation</h3><p>Visual content shaped around your message and audience.</p></div>
                            <span className="home-service__arrow" aria-hidden="true">↗</span>
                        </article>
                        <article className="home-service">
                            <span>03</span>
                            <div><h3>Video Editing</h3><p>Carefully edited video for stories, social and promotion.</p></div>
                            <span className="home-service__arrow" aria-hidden="true">↗</span>
                        </article>
                    </div>
                </div>
            </section>
            <section className="selected-work-section" aria-labelledby="selected-work-title">
                <div className="selected-work-header">
                    <p className="selected-work-eyebrow">SELECTED WORK</p>
                    <div className="selected-work-heading">
                        <h2 id="selected-work-title">Featured projects.</h2>
                        <p>
                            A few websites made with a focus on useful details and clear experiences.
                        </p>
                    </div>
                </div>
                <div className="selected-work-grid">
                    {featuredProjects.map((project, index) => (
                        <a className="selected-work-card" href={project.url} target="_blank" rel="noopener noreferrer" key={project.name}>
                            <div className="selected-work-image-wrap">
                                <img className="selected-work-image" src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
                                <span className="selected-work-status"><span aria-hidden="true" /> LIVE</span>
                                <span className="selected-work-number" aria-hidden="true">0{index + 1}</span>
                            </div>
                            <div className="selected-work-content">
                                <p className="selected-work-meta">{project.category}</p>
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <span className="selected-work-link">View Live Site <span aria-hidden="true">↗</span></span>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="creative-highlights" aria-label="Other creative work">
                    <article className="creative-highlight">
                        <div className="creative-highlight__image"><img src={meImage} alt="Polyshotz visual identity artwork" loading="lazy" decoding="async" /></div>
                        <div><p>BRANDING</p><h3>Polyshotz</h3><span>Visual identity &amp; creative direction</span></div>
                    </article>
                    <article className="creative-highlight">
                        <div className="creative-highlight__image"><img src={plantImage} alt="Social media content artwork" loading="lazy" decoding="async" /></div>
                        <div><p>CONTENT</p><h3>Social Media Content</h3><span>Creative content &amp; visual design</span></div>
                    </article>
                    <article className="creative-highlight creative-highlight--video">
                        <div className="selected-work-image-wrap">
                            <video className="selected-work-image" src={videoAsset} controls preload="none" muted loop playsInline aria-label="Video editing project" />
                        </div>
                        <div><p>VIDEO</p><h3>Video Editing</h3><span>Short-form video &amp; promotional content</span></div>
                    </article>
                </div>
            </section>
            <MyApproach />
            <Contact />
            </main>
            <Footer />
        </>
    )
}

export default Home
