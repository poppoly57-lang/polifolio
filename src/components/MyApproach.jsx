import { useEffect, useRef, useState } from "react"
import "../styles/MyApproach.css"

function MyApproach() {
    const sectionRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const section = sectionRef.current

        if (!section) {
            return undefined
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.18 },
        )

        observer.observe(section)

        return () => observer.disconnect()
    }, [])

    return (
        <section
            className={`my-approach-section${isVisible ? " my-approach-section--visible" : ""}`}
            ref={sectionRef}
            aria-labelledby="my-approach-title"
        >
            <div className="my-approach-header">
                <p className="my-approach-label">MY APPROACH</p>
                <div className="my-approach-content">
                    <h2 id="my-approach-title">Good work starts with a good idea.</h2>
                    <p>
                        I enjoy taking ideas from the first thought and turning them into something real. Whether I’m
                        building a website, doing graphic design, creating content or editing a video, I focus on keeping things simple,
                        purposeful and visually strong.
                    </p>
                </div>
            </div>
          
            <div className="my-approach-steps">
                <article className="my-approach-step">
                    <h3 className="my-approach-title">THINK</h3>
                    <p className="my-approach-description">
                        Understand the idea, the goal and what the work needs to achieve.
                    </p>
                </article>
                <article className="my-approach-step">
                    <h3 className="my-approach-title">CREATE</h3>
                    <p className="my-approach-description">
                        Take the idea and turn it into something clear, useful and visually engaging.
                    </p>
                </article>
                <article className="my-approach-step">
                    <h3 className="my-approach-title">REFINE</h3>
                    <p className="my-approach-description">
                        Pay attention to the details and keep improving until the final result feels right.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default MyApproach
