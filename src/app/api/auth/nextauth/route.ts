// [...nextauth]/route.ts
// Rename this folder to [...nextauth] in your local repo
import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth/config'

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
