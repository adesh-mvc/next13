import nextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers";

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

                const userDetail = await adminBook.findOne({ UserName });
                if (!userDetail) {
                    throw new Error("Invalid Email or Password");
                }

                const isPasswordMatched = await bcrypt.compare(Password, userDetail.Password);
                if (!isPasswordMatched) {
                    throw new Error("Invalid Email or Password");
                }
                return userDetail;
            },
        }),
    ],
    pages: {
        signIn: '/admin/login'
    },
    secret: process.env.JWT_SECRET
})