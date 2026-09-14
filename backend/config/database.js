import "dotenv/config"
import pg from "pg"

const { Pool } = pg

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not configured")
}

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
})

export async function closeDatabase() {
    await pool.end()
}