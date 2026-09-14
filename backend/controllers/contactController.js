import { createContactMessage } from "../models/contactModel.js"

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const fieldLimits = {
    name: 120,
    email: 254,
    projectType: 80,
    budget: 80,
    message: 5000,
}

function cleanText(value) {
    return typeof value === "string" ? value.trim().replace(/[<>]/g, "") : ""
}

export async function submitContactMessage(request, response, next) {
    console.log("[contact-api] contact request received")
    const name = cleanText(request.body?.name)
    const email = cleanText(request.body?.email).toLowerCase()
    const projectType = cleanText(request.body?.projectType)
    const budget = cleanText(request.body?.budget)
    const message = cleanText(request.body?.message)

    const errors = {}
    if (!name) errors.name = "Name is required"
    if (!email) errors.email = "Email is required"
    else if (!emailPattern.test(email)) errors.email = "A valid email is required"
    if (!message) errors.message = "Message is required"

    if (name.length > fieldLimits.name) errors.name = "Name is too long"
    if (email.length > fieldLimits.email) errors.email = "Email is too long"
    if (projectType.length > fieldLimits.projectType) errors.projectType = "Project type is too long"
    if (budget.length > fieldLimits.budget) errors.budget = "Budget is too long"
    if (message.length > fieldLimits.message) errors.message = "Message is too long"

    if (Object.keys(errors).length > 0) {
        console.log("[contact-api] validation failed:", Object.keys(errors).join(", "))
        response.status(400).json({ error: "Please correct the submitted fields", fields: errors })
        return
    }

    console.log("[contact-api] validation passed; saving contact message")

    try {
        const savedMessage = await createContactMessage({ name, email, projectType, budget, message })
        console.log(`[contact-api] database insert succeeded: ${savedMessage.id}`)
        response.status(201).json({
            message: "Contact message received",
            contact: {
                id: savedMessage.id,
                createdAt: savedMessage.created_at,
            },
        })
    } catch (error) {
        console.error("[contact-api] database insert failed:", error.message)
        next(error)
    }
}
