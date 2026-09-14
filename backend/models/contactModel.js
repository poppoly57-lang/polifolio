import { pool } from "../config/database.js"

export async function createContactMessage({ name, email, projectType, budget, message }) {
    const result = await pool.query(
        `INSERT INTO contact_messages (name, email, project_type, budget, message)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, name, email, project_type, budget, message, created_at`,
        [name, email, projectType || null, budget || null, message],
    )

    return result.rows[0]
}
