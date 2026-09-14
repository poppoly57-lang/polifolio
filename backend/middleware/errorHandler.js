export function notFoundHandler(_request, response) {
    response.status(404).json({ error: "Route not found" })
}

export function errorHandler(error, _request, response, _next) {
    console.error("[contact-api] unhandled error:", error.message)
    response.status(500).json({ error: "Unable to process your request" })
}
