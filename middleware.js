import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {
        let cookie = req.cookies.get('nextjs')?.value
        console.log(cookie) // => 'fast'
        const allCookies = req.cookies.getAll()
        console.log(allCookies)
        console.log('req.nextauth.token ', req.nextauth.token)
        if (req.nextauth.token?.role === 'superadmin') {
            return NextResponse.rewrite(new URL('/admin', req.url));
        } else {
            return NextResponse.rewrite(new URL('/user-login', req.url));
        }
    },
    {
        callbacks: {
            authorized: ({ token }) => token?.role === "superadmin",
        },
    }
)

export const config = { matcher: ["/user", "/admin", "/users"] }

// https://reacthustle.com/blog/nextjs-setup-role-based-authentication
// https://www.mongodb.com/developer/products/atlas/crud-operations-with-graphql//