import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

if (!process.env.AUTH_GOOGLE_ID || !process.env.AUTH_GOOGLE_SECRET) {
    throw new Error("Missing environment variables for Google Auth")
}


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
    clientSecret: process.env.AUTH_GOOGLE_SECRET
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)