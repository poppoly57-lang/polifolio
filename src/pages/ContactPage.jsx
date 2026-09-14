import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { useState } from "react"
import "../styles/ContactPage.css"

function ContactPage() {
    const [formValues, setFormValues] = useState({
        fullName: "",
        email: "",
        projectType: "",
        budget: "",
        projectDetails: "",
    })
    const [formErrors, setFormErrors] = useState({})
    const [submissionState, setSubmissionState] = useState("idle")
    const [submissionMessage, setSubmissionMessage] = useState("")

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues((currentValues) => ({ ...currentValues, [name]: value }))
        setFormErrors((currentErrors) => ({ ...currentErrors, [name]: "" }))
        setSubmissionState("idle")
        setSubmissionMessage("")
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const errors = {}

        if (!formValues.fullName.trim()) errors.fullName = "Please enter your name."
        if (!formValues.email.trim()) {
            errors.email = "Please enter your email address."
        } else if (!/^\S+@\S+\.\S+$/.test(formValues.email)) {
            errors.email = "Please enter a valid email address."
        }
        if (!formValues.projectType) errors.projectType = "Please choose a project type."
        if (!formValues.projectDetails.trim()) errors.projectDetails = "Please tell me a little about your project."

        setFormErrors(errors)
        if (Object.keys(errors).length > 0) {
            setSubmissionState("idle")
            setSubmissionMessage("")
            return
        }

        const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || "http://localhost:5000/api/contact"

        setSubmissionState("submitting")
        setSubmissionMessage("")

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formValues.fullName.trim(),
                    email: formValues.email.trim(),
                    projectType: formValues.projectType,
                    budget: formValues.budget,
                    message: formValues.projectDetails.trim(),
                }),
            })

            if (!response.ok) throw new Error("Contact form request failed")

            setFormValues({ fullName: "", email: "", projectType: "", budget: "", projectDetails: "" })
            setSubmissionState("success")
            setSubmissionMessage("Thanks for reaching out. Your message has been received.")
        } catch {
            setSubmissionState("error")
            setSubmissionMessage("Something went wrong while sending your message. Please try again.")
        }
    }

    return (
        <>
            <Navigation />
            <main className="contact-page">
                <section className="contact-page-intro" aria-labelledby="contact-page-title">
                    <p className="contact-page-label">GET IN TOUCH</p>
                    <h1 className="contact-page-title" id="contact-page-title">Let&apos;s create something together.</h1>
                    <p className="contact-page-description">
                        Have a project in mind, a new idea you want to explore, or simply want to talk about what you&apos;re working on? Tell me a little about it and I&apos;ll get back to you.
                    </p>
                </section>
                <section className="contact-page-workspace" aria-label="Contact details and project inquiry">
                    <div className="contact-page-information">
                        <div className="contact-page-info-group">
                            <p className="contact-page-info-label">BASED IN</p>
                            <p className="contact-page-info-value">Kampala, Uganda</p>
                        </div>
                        <div className="contact-page-info-group">
                            <p className="contact-page-info-label">AVAILABLE FOR</p>
                            <p className="contact-page-info-value">New projects &amp; collaborations</p>
                        </div>
                        <div className="contact-page-info-group">
                            <p className="contact-page-info-label">PROJECTS I WORK ON</p>
                            <ul className="contact-page-project-list">
                                <li>Web Design</li>
                                <li>Content Creation</li>
                                <li>Video Editing</li>
                                <li>Graphic Design</li>
                            </ul>
                        </div>
                    </div>
                    <form className="contact-page-form" onSubmit={handleSubmit} noValidate>
                        <div className="contact-page-form-heading">
                            <p className="contact-page-form-number">01</p>
                            <h2 className="contact-page-form-title">YOUR DETAILS</h2>
                        </div>
                        <div className="contact-page-fields">
                            <div className="contact-page-field">
                                <label className="contact-page-field-label" htmlFor="contact-full-name">FULL NAME</label>
                                <input className="contact-page-input" id="contact-full-name" name="fullName" type="text" placeholder="Your name" value={formValues.fullName} onChange={handleChange} required aria-invalid={Boolean(formErrors.fullName)} aria-describedby={formErrors.fullName ? "contact-full-name-error" : undefined} />
                                {formErrors.fullName && <p className="contact-page-error" id="contact-full-name-error">{formErrors.fullName}</p>}
                            </div>
                            <div className="contact-page-field">
                                <label className="contact-page-field-label" htmlFor="contact-email">EMAIL ADDRESS</label>
                                <input className="contact-page-input" id="contact-email" name="email" type="email" placeholder="you@example.com" value={formValues.email} onChange={handleChange} required aria-invalid={Boolean(formErrors.email)} aria-describedby={formErrors.email ? "contact-email-error" : undefined} />
                                {formErrors.email && <p className="contact-page-error" id="contact-email-error">{formErrors.email}</p>}
                            </div>
                        </div>
                        <div className="contact-page-form-heading contact-page-form-heading-project">
                            <p className="contact-page-form-number">02</p>
                            <h2 className="contact-page-form-title">YOUR PROJECT</h2>
                        </div>
                        <div className="contact-page-fields">
                            <div className="contact-page-field">
                                <label className="contact-page-field-label" htmlFor="contact-project-type">PROJECT TYPE</label>
                                <select className="contact-page-select" id="contact-project-type" name="projectType" value={formValues.projectType} onChange={handleChange} required aria-invalid={Boolean(formErrors.projectType)} aria-describedby={formErrors.projectType ? "contact-project-type-error" : undefined}>
                                    <option value="">Choose a project type</option>
                                    <option>Web Design</option>
                                    <option>Content Creation</option>
                                    <option>Video Editing</option>
                                    <option>Graphic Design</option>
                                    <option>Other</option>
                                </select>
                                {formErrors.projectType && <p className="contact-page-error" id="contact-project-type-error">{formErrors.projectType}</p>}
                            </div>
                            <div className="contact-page-field">
                                <label className="contact-page-field-label" htmlFor="contact-budget">BUDGET <span>(OPTIONAL)</span></label>
                                <select className="contact-page-select" id="contact-budget" name="budget" value={formValues.budget} onChange={handleChange}>
                                    <option value="">Not sure yet</option>
                                    <option>Under UGX 500,000</option>
                                    <option>UGX 500,000 – 1,000,000</option>
                                    <option>UGX 1,000,000 – 2,000,000</option>
                                    <option>UGX 2,000,000+</option>
                                </select>
                            </div>
                        </div>
                        <div className="contact-page-field contact-page-details-field">
                            <label className="contact-page-field-label" htmlFor="contact-project-details">PROJECT DETAILS</label>
                            <textarea className="contact-page-textarea" id="contact-project-details" name="projectDetails" placeholder="Tell me a little about your project, what you need, and what you have in mind..." value={formValues.projectDetails} onChange={handleChange} required aria-invalid={Boolean(formErrors.projectDetails)} aria-describedby={formErrors.projectDetails ? "contact-project-details-error" : undefined} />
                            {formErrors.projectDetails && <p className="contact-page-error" id="contact-project-details-error">{formErrors.projectDetails}</p>}
                        </div>
                        <button className="contact-page-submit" type="submit" disabled={submissionState === "submitting"}>
                            {submissionState === "submitting" ? "SENDING..." : "SEND MESSAGE"} <span aria-hidden="true">→</span>
                        </button>
                        {submissionMessage && <p className={`contact-page-feedback contact-page-feedback--${submissionState}`} role="status">{submissionMessage}</p>}
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default ContactPage
