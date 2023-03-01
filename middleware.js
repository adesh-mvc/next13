import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {

        console.log('req.nextauth.token ', req.nextauth.token)
        return NextResponse.rewrite(new URL('/admin', req.nextUrl))
    },
    {
        callbacks: {
            authorized: ({ token }) => token?.role === "admin",
        },
    }
)

export const config = { matcher: ["/admin"] }