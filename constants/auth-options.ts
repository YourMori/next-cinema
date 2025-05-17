import { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare, hashSync } from "bcrypt";
import { UserRole } from "@/@types/prisma";
import { prisma } from "@/lib/prisma";

export const authOptions: AuthOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
      profile(profile) {
        console.log("GitHub Profile:", profile);
        return {
          id: profile.id,
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          role: "USER" as UserRole,
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const values = {
          email: credentials.email,
        };

        const findUser = await prisma.users.findFirst({
          where: values,
        });

        if (!findUser) {
          return null;
        }

        const isPasswordValid = await compare(credentials.password, findUser.password);

        if (!isPasswordValid) {
          return null;
        }

        return { id: String(findUser.id), name: findUser.username, email: findUser.email, role: findUser.role as UserRole, image: null };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        if (account?.provider === "credentials") {
          return true;
        }

        const email = user?.email || profile?.email;

        if (!email) {
          return false;
        }

        const findUser = await prisma.users.findFirst({
          where: {
            OR: [{ provider: account?.provider, providerId: account?.providerAccountId }, { email }],
          },
        });

        if (findUser) {
          await prisma.users.update({
            where: {
              id: findUser.id,
            },
            data: {
              provider: account?.provider,
              providerId: account?.providerAccountId,
            },
          });

          return true;
        }

        await prisma.users.create({
          data: {
            email: email ?? `unknown-${Math.random().toString(36).slice(2)}@example.com`,
            username: user?.name || "User #" + Math.floor(Math.random() * 10000),
            password: hashSync((user?.id || Date.now()).toString(), 10),
            role: "USER",
            provider: account?.provider,
            providerId: account?.providerAccountId,
          },
        });

        return true;
      } catch (error) {
        console.error("Error [SIGNIN]", error);
        return false;
      }
    },
    async jwt({ token }) {
      if (!token.email) return token;

      const findUser = await prisma.users.findFirst({
        where: {
          email: token.email,
        },
      });

      if (findUser) {
        token.id = String(findUser.id);
        token.email = findUser.email;
        token.username = findUser.username;
        token.role = findUser.role as UserRole;
      }

      return token;
    },

    session({ session, token }) {
      if (session?.user) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
};
