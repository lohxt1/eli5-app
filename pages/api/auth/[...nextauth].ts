// pages/api/auth/[...nextauth].ts
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { type NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";
import { isEmailValid } from "@/utils/helpers";

export const authOptions: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USERNAME,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_SERVER_USERNAME,
      maxAge: 24 * 60 * 60,
    }),
  ],
  session: { strategy: "jwt" },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn: async ({ user }) => {
      // if (!isEmailValid(user.email)) {
      //   return false;
      // }
      return true;
    },
    session: async ({ session, token }) => {
      if (session?.user && token?.uid) {
        session.user.id = token.uid;
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      // if (!isEmailValid(token.email)) {
      //   return {};
      // }
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
