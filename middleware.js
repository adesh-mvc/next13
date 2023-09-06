import { withAuth } from "next-auth/middleware";
// import { AuthOptions } from "./pages/api/auth/[...nextauth]";
import { NextResponse } from "next/server";


export default withAuth(
    // jwt: { decode: authOptions.jwt },
    // `withAuth` augments your `Request` with the user's token.
    function middleware(req) {

        console.log('pathName:', req.nextUrl.pathname)
        const { pathname } = req.nextUrl;
        let cookie = req.cookies.get('nextjs')?.value
        // console.log(cookie) // => 'fast'
        const allCookies = req.cookies.getAll()
        console.log(allCookies)
        // console.log('req.nextauth.token ::', req.nextauth.token)
        if (req.nextauth.token?.role === 'superadmin') {
            console.log('req.nextauth.token 1', req.nextUrl.pathname);
            if (req.nextUrl.pathname.startsWith('/admin')) {
                return NextResponse.rewrite(new URL('/admin', req.url))
            }
            // return NextResponse.rewrite(new URL('/admin', req.url));
            // return NextResponse.redirect(new URL('/admin', req.url))
        } else {
            return NextResponse.rewrite(new URL('/user-login', req.url));
        }


        // return NextResponse.next();
    },

    {
        callbacks: {
            authorized: ({ token }) => token?.role === "superadmin",
        },
    }
)

export const config = { matcher: ["/admin"] }

// https://reacthustle.com/blog/nextjs-setup-role-based-authentication
// https://www.mongodb.com/developer/products/atlas/crud-operations-with-graphql//

//https://nextjs.org/docs/advanced-features/middleware
// https://srini-dev.hashnode.dev/deploying-a-next-app-to-aws-ec2-with-github-actions-cicd

// https://saturncloud.io/blog/troubleshooting-502-bad-gateway-from-relocated-instance-on-aws-ec2/
// https://lyfpro-demo.pbminfotech.com/html-demo/index.html
// http://gmag.kwst.net/index.html
// https://habitrohtml.websitelayout.net/index.html
// https://designarc.biz/demos/fitzeous/theme/index-5.html




