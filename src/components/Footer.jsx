import { NavLink } from "react-router-dom"
import "../styles/PortfolioFooter.css"

function Footer() {
    return (
        <footer className="portfolio-footer">
            <div className="portfolio-footer-inner">
                <div className="portfolio-footer-main">
                    <div>
                        <NavLink className="portfolio-footer-brand" to="/">POLIFOLIO</NavLink>
                        <p className="portfolio-footer-description">
                            Web development,Graphic Design, content creation and video editing.
                        </p>
                    </div>
                    <nav aria-label="Footer navigation">
                        <ul className="portfolio-footer-nav">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/about-b">About</NavLink></li>
                            <li><NavLink to="/projects">Projects</NavLink></li>
                            <li><NavLink to="/contact">Get In Touch</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="portfolio-footer-bottom">
                    <p>&copy; 2026 Olupot Polycarp Prince. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer