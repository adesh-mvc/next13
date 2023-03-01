import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import adminBook from "@/db/models/admin-book";
import bcrypt from "bcryptjs";
import connectDb from "@/db/config";
import { parse } from "graphql";

export default NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            // id: "domain-login",
            // name: "Domain Account",
            async authorize(credentials, req) {
                connectDb();

                const { UserName, Password } = credentials;

                const res = await adminBook.findOne({ UserName });
                if (!res) {
                    throw new Error("Invalid Email or Password");
                }
                console.log('userDetail', res)
                const isPasswordMatched = await bcrypt.compare(Password, res.Password);
                if (!isPasswordMatched) {
                    throw new Error("Invalid Email or Password");
                }
                //  const userData = await res;
                // console.log('userDetail passowrd:', res)
                console.log(typeof res);
                // return {
                //     login: user._id.toString(),
                //     username: user.UserName,
                //     thumb: user.ThumbImage,
                //     fullname: user.FullName
                // }
                return { id: res._id.toString(), name: res.FullName, email: res.UserName, image: res.ThumbImage, role: 'admin' };

            },

        }),
    ],
    callbacks: {
        async jwt(params) {
            console.log("params", params)
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
        // async session({ session, token, user }) {
        //     // Send properties to the client, like an access_token and user id from a provider.
        //     session.accessToken = token.accessToken
        //     session.user.id = token.id

        //     return session
        // }
    },
    pages: {
        signIn: '/login'
    },
    // callbacks: {
    //     async signIn({ user, account, profile, email, credentials }) {
    //         console.log(user)
    //         return true
    //     },
    //     async redirect({ url, baseUrl }) {
    //         console.log('fkg')
    //         return baseUrl
    //     },
    //     async session({ session, user, token }) {
    //         return session
    //     },
    // },
    secret: process.env.NEXTAUTH_SECRET,
})