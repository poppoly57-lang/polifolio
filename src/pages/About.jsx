import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
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
                                <p className="about-detail-value"> ·  Web Development <br /> ·  Graphic Design <br /> ·  Content Creation <br /> · Video Editing</p>
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
            <section className="about-more" aria-labelledby="about-more-title">
                <div className="about-more-container">
                    <div className="about-more-content">
                        <p className="about-more-label">MORE ABOUT ME</p>
                        <h2 className="about-more-title" id="about-more-title">More than just the final result.</h2>
                        <div className="about-more-copy">
                            <p>I enjoy exploring ideas, experimenting with different ways of creating, and turning simple concepts into work that has purpose using different tools and techniques.</p>
                            <p>Whether I’m building a website, creating visual content or editing a video, I’m always interested in the process behind the final result — understanding the idea, finding what works and refining the details until everything feels right.</p>
                        </div>
                    </div>
                    <div className="about-more-points" aria-label="Creative principles">
                        <article className="about-more-point">
                            <p className="about-more-point-number">01</p>
                            <div>
                                <h3 className="about-more-point-title">CURIOUS BY NATURE</h3>
                                <p className="about-more-point-text">Always exploring new ideas, tools and creative approaches.</p>
                            </div>
                        </article>
                        <article className="about-more-point">
                            <p className="about-more-point-number">02</p>
                            <div>
                                <h3 className="about-more-point-title">DETAIL MATTERS</h3>
                                <p className="about-more-point-text">Small decisions can make a big difference in the final result.</p>
                            </div>
                        </article>
                        <article className="about-more-point">
                            <p className="about-more-point-number">03</p>
                            <div>
                                <h3 className="about-more-point-title">KEEP IT PURPOSEFUL</h3>
                                <p className="about-more-point-text">Good design should look good, but it should also have a reason.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="about-skills" aria-labelledby="about-skills-title">
                <div className="about-skills-container">
                    <div className="about-skills-intro">
                        <p className="about-skills-label">MY SKILLS</p>
                        <h2 className="about-skills-title" id="about-skills-title">What I work with.</h2>
                        <p className="about-skills-description">
                            A combination of web development, creative software and visual production tools that I use to turn ideas into finished digital work.
                        </p>
                    </div>
                    <div className="about-skills-layout">
                        <article className="about-skill-development">
                            <div className="about-skill-heading">
                                <p className="about-skill-number">01</p>
                                <h3 className="about-skill-title">WEB DEVELOPMENT</h3>
                            </div>
                            <div className="about-skill-bars">
                                <div className="about-skill-bar-row">
                                    <div className="about-skill-bar-label"><span>HTML &amp; CSS</span><span>90%</span></div>
                                    <div className="about-skill-bar-track"><span className="about-skill-bar-fill" style={{ "--about-skill-level": "90%" }} /></div>
                                </div>
                                <div className="about-skill-bar-row">
                                    <div className="about-skill-bar-label"><span>JavaScript</span><span>75%</span></div>
                                    <div className="about-skill-bar-track"><span className="about-skill-bar-fill" style={{ "--about-skill-level": "75%" }} /></div>
                                </div>
                                <div className="about-skill-bar-row">
                                    <div className="about-skill-bar-label"><span>React</span><span>75%</span></div>
                                    <div className="about-skill-bar-track"><span className="about-skill-bar-fill" style={{ "--about-skill-level": "75%" }} /></div>
                                </div>
                                <div className="about-skill-bar-row">
                                    <div className="about-skill-bar-label"><span>Responsive Web Design</span><span>90%</span></div>
                                    <div className="about-skill-bar-track"><span className="about-skill-bar-fill" style={{ "--about-skill-level": "90%" }} /></div>
                                </div>
                                <div className="about-skill-bar-row">
                                    <div className="about-skill-bar-label"><span>UI Development</span><span>80%</span></div>
                                    <div className="about-skill-bar-track"><span className="about-skill-bar-fill" style={{ "--about-skill-level": "80%" }} /></div>
                                </div>
                            </div>
                        </article>
                        <div className="about-skills-tools">
                            <article className="about-skill-tools-group">
                                <div className="about-skill-heading">
                                    <p className="about-skill-number">02</p>
                                    <h3 className="about-skill-title">VIDEO EDITING</h3>
                                </div>
                                <ul className="about-skill-tools-list">
                                    <li className="about-skill-tool">CapCut</li>
                                    <li className="about-skill-tool">Adobe Premiere Pro</li>
                                    <li className="about-skill-tool">Adobe After Effects</li>
                                </ul>
                            </article>
                            <article className="about-skill-tools-group">
                                <div className="about-skill-heading">
                                    <p className="about-skill-number">03</p>
                                    <h3 className="about-skill-title">GRAPHIC DESIGN</h3>
                                </div>
                                <ul className="about-skill-tools-list">
                                    <li className="about-skill-tool">Adobe Photoshop</li>
                                    <li className="about-skill-tool">Adobe Illustrator</li>
                                    <li className="about-skill-tool">Adobe InDesign</li>
                                    <li className="about-skill-tool">Canva</li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-approach" aria-labelledby="about-approach-title">
                <div className="about-approach-container">
                    <div className="about-approach-heading">
                        <p className="about-approach-label">MY APPROACH</p>
                        <h2 className="about-approach-title" id="about-approach-title">Simple ideas. Thoughtful work.</h2>
                    </div>
                    <div className="about-approach-list">
                        <article className="about-approach-item">
                            <p className="about-approach-number">01</p>
                            <div>
                                <h3 className="about-approach-item-title">UNDERSTAND</h3>
                                <p className="about-approach-item-description">Every project starts with understanding the idea, the goal and the people it is meant for.</p>
                            </div>
                        </article>
                        <article className="about-approach-item">
                            <p className="about-approach-number">02</p>
                            <div>
                                <h3 className="about-approach-item-title">CREATE</h3>
                                <p className="about-approach-item-description">I explore different ideas, experiment with creative solutions and turn the strongest direction into something real.</p>
                            </div>
                        </article>
                        <article className="about-approach-item">
                            <p className="about-approach-number">03</p>
                            <div>
                                <h3 className="about-approach-item-title">REFINE</h3>
                                <p className="about-approach-item-description">The final details matter. I review, adjust and refine the work until everything feels clear, purposeful and complete.</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
            <section className="about-cta" aria-labelledby="about-cta-title">
                <div className="about-cta-container">
                    <p className="about-cta-label">LET&apos;S WORK TOGETHER</p>
                    <div className="about-cta-content">
                        <h2 className="about-cta-title" id="about-cta-title">Have an idea in mind?</h2>
                        <div className="about-cta-action">
                            <p className="about-cta-description">Whether it’s a website, a creative project or something completely new, I’d love to hear what you’re thinking.</p>
                            <a className="about-cta-button" href="/contact">GET IN TOUCH <span aria-hidden="true">→</span></a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default About 