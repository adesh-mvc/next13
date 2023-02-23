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

                const user = await adminBook.findOne({ UserName });
                if (!user) {
                    throw new Error("Invalid Email or Password");
                }
                console.log('userDetail', userDetail)
                const isPasswordMatched = await bcrypt.compare(Password, user.Password);
                if (!isPasswordMatched) {
                    throw new Error("Invalid Email or Password");
                }
                console.log('userDetail passowrd:', user)
                return user;
            },
        }),
    ],
    pages: {
        signIn: '/admin'
    },
    secret: process.env.JWT_SECRET
})