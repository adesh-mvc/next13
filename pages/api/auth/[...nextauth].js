import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import adminBook from "@/db/models/admin-book";
import bcrypt from "bcryptjs";
import connectDb from "@/db/config";


export const AuthOptions = {
    session: {
        strategy: "jwt",
        maxAge: 60 * 15, // 30 days
        updateAge: 60 * 7, // 24 hours
    },
    providers: [
        CredentialsProvider({
            // id: "domain-login",
            // name: "Domain Account",
            async authorize(credentials, req) {
                connectDb();

                const { UserName, Password, Role } = credentials;
                var res = '';
                // where login Super admin  as master panel
                if (Role === 'superadmin') {
                    res = await adminBook.findOne({ UserName });
                }

                if (!res) {
                    throw new Error("Invalid Email or Password");
                }
                // console.log('userDetail', res)
                const isPasswordMatched = await bcrypt.compare(Password, res.Password);
                if (!isPasswordMatched) {
                    throw new Error("Invalid Email or Password");
                }

                return { id: res._id.toString(), name: res.FullName, email: res.UserName, image: res.ThumbImage, role: Role };

            },

        }),
    ],
    callbacks: {
        async jwt(params) {

            //update token
            if (params.user?.role) {
                params.token.role = params.user.role;
            }
            if (params.account) {
                params.token.accessToken = params.account.providerAccountId
                // token.id = profile.id
            }
            console.log("params", params.token)
            return params.token
        },
        async signIn({ user, account, profile, email, credentials }) {
            console.log(profile)
            return true
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token and user id from a provider.
            // if (token) {
            //     session.user.email = token.email;
            //     session.user.username = token.userName;
            //     session.user.accessToken = token.accessToken;
            // }

            return session
        }
    },
    pages: {
        signIn: '/user-login',
        signIn: '/login'
    },
    theme: {
        colorScheme: "light", // "auto" | "dark" | "light"
        brandColor: "", // Hex color code
        logo: "", // Absolute URL to image
        buttonText: "" // Hex color code
    },

    secret: process.env.NEXTAUTH_SECRET,
};


export default NextAuth(AuthOptions);