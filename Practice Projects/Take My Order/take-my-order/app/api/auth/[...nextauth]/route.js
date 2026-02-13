import NextAuth from "next-auth";
// import AppleProvider from "next-auth/providers/apple";
// import FacebookProvider from "next-auth/providers/facebook";
// import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/models/User";
import Payment from "@/models/Payment";
import connectDB from "@/db/connectDB";

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET,
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    //
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === "github") {
        // Connect to database
        // await connectDB();

        // Connect to the database
        const client = await mongoose.connect(
          "mongodb://localhost:27017/take-order",
        );
        // Check if the user already exists in the database
        const currentUser = await User.findOne({ email: user.email });

        if (!currentUser) {
          // Create a new user
          const newUser = new User({
            email: user.email,
            name: user.name,
            username: user.email.split("@")[0],
            profilepic: user.image,
          });
          await newUser.save();
          user.name = newUser.username;
          console.log("New user created: ", newUser.email);
        }
        return true; // allow to sign in
      }
    },
    async session({ session, user, token }) {
      const dbUser = await User.find({ email: session.user.email });
      session.user.name = dbUser.username;
      return session;
    },
  },
});

const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };
