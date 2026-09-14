# Contact backend

This is the Express/PostgreSQL backend for the portfolio contact form.

## Setup

1. Install dependencies:

```bash
cd backend
npm install
```

2. Create a local environment file:

```bash
Copy-Item .env.example .env
```

Set `DATABASE_URL` in `backend/.env` to a PostgreSQL database and adjust `FRONTEND_ORIGIN` if the Vite server uses another origin. Multiple origins can be comma-separated.

3. Create the database and table. After creating a PostgreSQL database named `polyfolio`, run `backend/db/schema.sql` with `psql` or a PostgreSQL client:

```bash
psql "$env:DATABASE_URL" -f db/schema.sql
```

4. Configure the frontend endpoint. Copy the root `.env.example` to `.env` and keep:

```env
VITE_CONTACT_FORM_ENDPOINT=http://localhost:5000/api/contact
```

Do not put database credentials in the frontend `.env` file.

## Run

Start the backend in development mode:

```bash
npm run dev
```

Or run it without nodemon:

```bash
npm start
```

The API listens on `http://localhost:5000` by default.

## API

`POST /api/contact`

JSON body:

```json
{
  "name": "A visitor",
  "email": "visitor@example.com",
  "projectType": "Web Design",
  "budget": "Not sure yet",
  "message": "I would like to discuss a website project."
}
```

Successful inserts return `201`. Invalid or missing required fields return `400`. Database and unexpected server errors return `500`.

A health check is available at `GET /api/health`.

## Testing

With the backend running, test validation with PowerShell:

```powershell
Invoke-RestMethod http://localhost:5000/api/contact -Method Post -ContentType "application/json" -Body '{"name":"A visitor","email":"visitor@example.com","projectType":"Web Design","budget":"Not sure yet","message":"A website inquiry."}'
```

Test invalid input:

```powershell
Invoke-RestMethod http://localhost:5000/api/contact -Method Post -ContentType "application/json" -Body '{"name":"","email":"invalid","message":""}'
```

The React form sends the same fields to `VITE_CONTACT_FORM_ENDPOINT`, shows a loading state, clears only after a `2xx` response, and shows an error when the backend or database request fails.
