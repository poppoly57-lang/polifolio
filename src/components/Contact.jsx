import "../styles/Contact.css"
import { Link } from "react-router-dom"

function Contact() {
    return (
        <section className="contact-section" id="getintouch" aria-labelledby="contact-heading">
            <div className="contact-container">
                <div className="contact-copy">
                    <p className="contact-label">LET’S WORK TOGETHER</p>
                    <h2 className="contact-heading">
                        Have an idea in mind?
                        <span>Let’s turn it into something real.</span>
                    </h2>
                </div>
                <div className="contact-action">
                    <p className="contact-description">
                        Whether you need a website, graphic design, content creation or video editing, I’d love to hear what you’re
                        working on and see how I can help.
                    </p>
                    <Link className="contact-button" to="/contact">
                        GET IN TOUCH <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Contact
