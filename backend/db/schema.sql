CREATE TABLE IF NOT EXISTS contact_messages (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(254) NOT NULL,
    project_type VARCHAR(80),
    budget VARCHAR(80),
    message TEXT NOT NULL CHECK (char_length(message) <= 5000),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
