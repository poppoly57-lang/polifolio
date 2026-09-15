import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import moleculeImage from "../assets/molecule.png"
import juiceImage from "../assets/juice.jpeg"
import portfolioImage from "../assets/me.jpeg"
import "../styles/Projects.css"

const projects = [
    {
        name: "Molecule Restaurant",
        category: "Restaurant Website",
        description: "A modern restaurant website designed to present the restaurant, menu, atmosphere, and contact information in a clean and engaging way.",
        technologies: "React · JavaScript · CSS",
        image: moleculeImage,
        imageAlt: "Molecule Restaurant website project",
        url: "https://moleculerestaurant.poppoly57.workers.dev",
        featured: true,
    },
    {
        name: "Juice Corner",
        category: "Business / E-commerce Website",
        description: "A modern website concept for a fresh juice business, designed to showcase products and provide an engaging online shopping experience.",
        technologies: "React · JavaScript · CSS",
        image: juiceImage,
        imageAlt: "Juice Corner brand artwork",
        url: "https://juice-corner.poppoly57.workers.dev",
    },
    {
        name: "My Portfolio",
        category: "Personal Portfolio",
        description: "My personal portfolio website showcasing my web design, content creation, video editing, and creative work.",
        technologies: "React · Vite · CSS",
        image: portfolioImage,
        imageAlt: "Portrait representing the My Portfolio project",
        url: "https://polifolio.poppoly57.workers.dev",
    },
]

function ProjectCard({ project, index }) {
    return (
        <article className={`project-card${project.featured ? " project-card--featured" : ""}`}>
            <a className="project-card__image-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} website`}>
                <div className="project-card__image-frame">
                    <img src={project.image} alt={project.imageAlt} />
                    <span className="project-card__number" aria-hidden="true">0{index + 1}</span>
                </div>
            </a>
            <div className="project-card__content">
                <p className="project-card__category">{project.category}</p>
                <h2>{project.name}</h2>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__footer">
                    <p className="project-card__technologies">{project.technologies}</p>
                    <a className="project-card__link" href={project.url} target="_blank" rel="noopener noreferrer">
                        View Website <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default function Projects() {
    return (
        <>
            <Navigation />
            <main className="projects-page">
                <header className="projects-intro">
                    <p className="projects-intro__label">Selected Work</p>
                    <h1 id="projects-page-title">Projects I&apos;ve Worked On</h1>
                    <p className="projects-intro__description">
                        A selection of web and creative projects built with thoughtful design, clear communication, and a focus on making every experience useful.
                    </p>
                </header>
                <section className="projects-grid" aria-labelledby="projects-page-title">
                    {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
                </section>
            </main>
            <Footer />
        </>
    )
}
