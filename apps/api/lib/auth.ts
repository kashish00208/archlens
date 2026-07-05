import { betterAuth } from "better-auth";
import { Pool } from "pg";

const database = new Pool({
  connectionString: "postgresql://postgres:password@localhost:5432/database",
});

export const auth = betterAuth({
  socialProviders:{
    github:{
      clientId:process.env.GITHUB_CLIENT_ID as string,
      clientSecret:process.env.GITHUB_CLIENT_SECRET
    }
  },
  database: database,
  baseURL: "http://localhost:3000/",
  emailAndPassword: { enabled: true },
});
