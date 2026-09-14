import "dotenv/config"
import cors from "cors"
import express from "express"
import contactRouter from "./routes/contactRoutes.js"
import { notFoundHandler, errorHandler } from "./middleware/errorHandler.js"
import { pool } from "./config/database.js"

const app = express()
const port = Number(process.env.PORT) || 5000
const allowedOrigins = (process.env.FRONTEND_ORIGIN || "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean)

app.use(cors({ origin: allowedOrigins }))
app.use(express.json({ limit: "20kb" }))

app.use((request, _response, next) => {
    console.log(`[contact-api] ${request.method} ${request.path}`)
    next()
})

app.get("/api/health", (_request, response) => {
    response.json({ status: "ok" })
})

app.use("/api/contact", contactRouter)
app.use(notFoundHandler)
app.use(errorHandler)

app.listen(port, async () => {
    console.log(`Contact backend listening on port ${port}`)

    try {
        await pool.query("SELECT 1")
        console.log("[contact-api] PostgreSQL connection successful")
        const tableResult = await pool.query(
            "SELECT to_regclass('public.contact_messages') AS table_name",
        )
        console.log(`[contact-api] contact_messages table: ${tableResult.rows[0].table_name ? "present" : "missing"}`)
    } catch (error) {
        console.error("[contact-api] PostgreSQL startup check failed:", error.message)
    }
})
