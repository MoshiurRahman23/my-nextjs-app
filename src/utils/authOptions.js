import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { signIn } from "next-auth/react";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
