
import clientPromise from "@/lib/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth, { getServerSession } from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";


export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],

    secret: process.env.NEXTAUTH_SECRET,
    adapter: MongoDBAdapter(clientPromise),

}


export const getAuthSession = () => getServerSession(authOptions)