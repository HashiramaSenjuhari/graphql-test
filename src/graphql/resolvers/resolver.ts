import { sendStatusCode } from "next/dist/server/api-utils";
import prisma from "../../config/config";
// import { } from "../../app/api/graphql/route";

export const resolvers = {
  Query: {
    users: async (_, args) => {
      return await prisma.user.findMany();
    },
    user: async (_, { id }) => {
      return await prisma.user.findUnique({
        where: {
          id: id,
        },
      });
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const { name, email, password } = input;
      const user = await prisma.user.findFirst({
        where: {
          name: name,
        },
      });
      if (user)
        return {
          message: "User already exists",
          sendStatusCode: 409,
        };
      return await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });
    },
    updateUser: async (_, { id, input }) => {
      const { name, email } = input;
      const user = await prisma.user.findFirst({
        where: {
          id,
        },
      });
      if (!user) {
        return {
          message: "User not found",
          statusCode: 404,
        };
      }
      return await prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
          email,
        },
      });
    },
    deleteUser: async (_, { id }) => {
      return await prisma.user.delete({
        where: {
          id,
        },
      });
    },
  },
};
