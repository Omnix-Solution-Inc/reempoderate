import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
  function middleware(req) {
    // Allow access
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/business-plan/:path*',
    '/profile/:path*',
    '/sessions/:path*',
    '/clients/:path*',
    '/events/:path*',
    '/proposals/:path*',
    '/payments/:path*',
    '/recipes/:path*',
  ],
}
