import dotenv from 'dotenv';
dotenv.config();  // Load environment variables from .env file 


import { defineConfig } from 'drizzle-kit'
export default defineConfig({
    schema: "./src/database/schema.ts",
    dialect: 'postgresql',
    dbCredentials: {
        database: process.env.DB_NAME ?? "not-set",
        host: process.env.DB_HOST ?? "not-set",
        user: process.env.DB_USER ?? "not-set",
        password: process.env.DB_PSW ?? "not-set",
        port: 5432
    },
    verbose: true,
    strict: true,
})