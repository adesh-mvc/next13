import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import adminBook from "@/db/models/admin-book";
import bcrypt from "bcryptjs";
import connectDb from "@/db/config";

export default NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
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
                const userData = await res;
                console.log('userDetail passowrd:', userData)
                // return {
                //     login: user._id.toString(),
                //     username: user.UserName,
                //     thumb: user.ThumbImage,
                //     fullname: user.FullName
                // }
                return userData
            },

        }),
    ],
    callbacks: {
        async signIn({ user }) {
            console.log('SignIN:', user)
            return user;
        },
        async session({ session, user, token }) {
            return session
        },
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