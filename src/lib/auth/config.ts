// NextAuth Configuration
// Handles Google, Facebook and LinkedIn OAuth for protected routes

import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"
import LinkedInProvider from "next-auth/providers/linkedin"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "placeholder",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "placeholder",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "placeholder",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "placeholder",
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID || "placeholder",
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "placeholder",
      issuer: "https://www.linkedin.com/oauth",
      jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      authorization: {
        params: { scope: "openid profile email" },
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) {
        (session.user as typeof session.user & { id: string }).id = token.sub
      }
      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id
      }
      return token
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}
