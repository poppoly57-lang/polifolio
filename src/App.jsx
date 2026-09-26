import Home from './pages/Home'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import About from "./pages/About"
import ContactPage from "./pages/ContactPage"
import Navigation from "./components/Navigation"
import Projects from "./pages/Projects"
export default function App() {
    const { pathname } = useLocation()

    useEffect(() => {
        const pageMetadata = {
            '/': {
                title: 'Polycarp Prince Olupot | Web, Content & Video',
                description: 'Polycarp Prince Olupot creates websites, visual content, and video edits from Kampala, Uganda.',
            },
            '/about-b': {
                title: 'About | Polycarp Prince Olupot',
                description: 'Learn about Polycarp Prince Olupot, a creative working in web development, graphic design, content creation, and video editing in Kampala, Uganda.',
            },
            '/projects': {
                title: 'Projects | Polycarp Prince Olupot',
                description: 'Explore selected website and creative projects by Polycarp Prince Olupot.',
            },
            '/contact': {
                title: 'Get in Touch | Polycarp Prince Olupot',
                description: 'Contact Polycarp Prince Olupot about web development, content creation, video editing, or a creative collaboration.',
            },
        }
        const metadata = pageMetadata[pathname] || pageMetadata['/']
        document.title = metadata.title
        document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description)
        document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title)
        document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description)
    }, [pathname])

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