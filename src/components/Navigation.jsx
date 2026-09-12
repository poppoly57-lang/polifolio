import "../styles/Navigation.css"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"

function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const updateScrollState = () => setIsScrolled(window.scrollY > 12)

        updateScrollState()
        window.addEventListener("scroll", updateScrollState, { passive: true })

        return () => window.removeEventListener("scroll", updateScrollState)
    }, [])

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <nav className={`navigation${isScrolled ? " navigation--scrolled" : ""}`}>
            <div className="navigation__inner">
                <NavLink className="navigation__brand" to="/" onClick={closeMenu}>
                    POLIFOLIO
                </NavLink>
                <button
                    className={`navigation__toggle${isMenuOpen ? " navigation__toggle--open" : ""}`}
                    type="button"
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <ul
                    className={`nav-links${isMenuOpen ? " nav-links--open" : ""}`}
                    id="primary-navigation"
                >
                    <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
                    <li><NavLink to="/about-b" onClick={closeMenu}>About</NavLink></li>
                    <li><NavLink to="/projects" onClick={closeMenu}>Projects</NavLink></li>
                    <li><a href="#getintouch" onClick={closeMenu}>Get In Touch</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation