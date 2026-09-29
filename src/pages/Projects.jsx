import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import moleculeImage from "../assets/molecule-restaurant-site.png"
import juiceImage from "../assets/juice-corner-site.png"
import portfolioImage from "../assets/me.jpeg"
import academyImage from "../assets/science-scholar-academy-site.png"
import "../styles/Projects.css"

const projects = [
    {
        name: "Molecule Restaurant",
        category: "Restaurant Website",
        description: "A professionally designed restaurant website focused on presenting the restaurant's identity, menu and customer experience.",
        technologies: ["React", "JavaScript", "CSS"],
        image: moleculeImage,
        imageAlt: "Molecule Restaurant website screenshot",
        url: "https://moleculerestaurant.poppoly57.workers.dev",
        status: "LIVE",
    },
    {
        name: "Juice Corner",
        category: "E-commerce Website",
        description: "A fresh, user-friendly juice shop website designed to showcase products and support the shopping experience.",
        technologies: ["React", "JavaScript", "CSS"],
        image: juiceImage,
        imageAlt: "Juice Corner website screenshot",
        url: "https://juice-corner.poppoly57.workers.dev",
        status: "LIVE",
    },
    {
        name: "My Portfolio",
        category: "Personal Portfolio",
        description: "My personal portfolio website showcasing my web design, content creation, video editing, and creative work.",
        technologies: ["React", "Vite", "CSS"],
        image: portfolioImage,
        imageAlt: "Portrait representing the My Portfolio project",
        url: "https://polifolio.poppoly57.workers.dev",
        status: "LIVE",
    },
    {
        name: "Science Scholar Academy",
        category: "Educational Platform",
        description: "An educational website designed to present academic subjects and learning resources in an accessible, organized way.",
        technologies: [],
        image: academyImage,
        imageAlt: "Science Scholar Academy website screenshot",
        url: "https://science-scholar-academy.poppoly57.workers.dev/",
        status: "LIVE",
    },
]

function ProjectCard({ project, index }) {
    return (
        <article className="project-card">
            <a className="project-card__image-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} website`}>
                <div className="project-card__image-frame">
                    <img src={project.image} alt={project.imageAlt} loading={index === 0 ? "eager" : "lazy"} decoding="async" />
                    <span className="project-card__number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                    {project.status && <span className="project-card__status"><span aria-hidden="true" />{project.status}</span>}
                </div>
            </a>
            <div className="project-card__content">
                <p className="project-card__category">{project.category}</p>
                <h2>{project.name}</h2>
                <p className="project-card__description">{project.description}</p>
                {project.technologies.length > 0 && (
                    <ul className="project-card__technologies" aria-label={`${project.name} technologies`}>
                        {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                )}
                <a className="project-card__link" href={project.url} target="_blank" rel="noopener noreferrer">
                    View Live Site <span aria-hidden="true">↗</span>
                </a>
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
                    <h1 id="projects-page-title">Featured Projects</h1>
                    <p className="projects-intro__description">
                        A selection of websites and digital experiences I&apos;ve designed and built.
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
