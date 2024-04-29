import bcrypt from 'bcrypt';

// pages/api/auth/[...nextauth].ts

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
bcrypt
import rootUser from "../../../utils/users"; // Importer les informations de l'utilisateur root

export default NextAuth({

  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials , req) {
        if (
          


















          
          credentials?.email === rootUser.email &&
          (await bcrypt.compare(
            credentials.password as string,
            rootUser.password
          ))
        ) {
          return rootUser;
        }
        throw new Error("Email ou mot de passe invalide");
      },
    }),
  ],
});