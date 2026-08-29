import "../styles/Navigation.css"
import { Link} from "react-router-dom"
function Navigation () {
    return (
        <nav className="navigation">
            <h1>POLIFOLIO</h1>
            <ul className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about-b">
                 About
                </Link>
                <Link to="/projects">Projects</Link>
                <li><a href="#getintouch">Get In Touch</a></li>
            </ul>
        </nav>
    )
}

export default Navigation