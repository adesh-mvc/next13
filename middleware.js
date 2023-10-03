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



// https://html.themexriver.com/Haptic-Html/index-4.html
//https://keenitsolutions.com/products/html/edulearn/edulearn-demo/index.html
//https://gramentheme.com/html/mistri/index.html
//https://gossip-themes.com/beatrix-html/preview/index.html

//https://new.axilthemes.com/demo/template/blogar/index.html
//https://projects.kajoo.studio/gamedevs/index.html
// https://html.themewant.com/echo/index.html
// https://new.axilthemes.com/demo/template/papr/index.html
// https://themegenix.net/html/sarsa-html/index-4.html
// http://html.cwsthemes.com/pressview/index.html
//https://demos.alithemes.com/html/helloworld/index.html
//https://templates.envytheme.com/depan/default/index-2.html
//https://demo.themewinter.com/html/vinazine/category-1.html
// https://max-themes.net/demos/gnews/demo1/index.html
// http://wpsoul.net/rehub_demo/index.html


// https://mysql.tutorials24x7.com/blog/guide-to-design-a-database-for-blog-management-in-mysql



// https://www.cyberciti.biz/tips/how-do-i-enable-remote-access-to-mysql-database-server.html

