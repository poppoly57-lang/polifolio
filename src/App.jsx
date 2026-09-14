import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import About from "./pages/About"
import ContactPage from "./pages/ContactPage"
import Navigation from "./components/Navigation"
import Projects from "./pages/Projects"
export default function App() {
    return(
       <>
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-b" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
       </>
        
        
        
    )
}