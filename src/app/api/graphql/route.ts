import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import prisma from "../../../config/config";
import { PrismaClient } from "@prisma/client";
import { resolvers } from "../../../graphql/resolvers/resolver";
import { typeDefs } from "../../../graphql/typeDefs/types";

// export type Context = {
//   prisma: PrismaClient;
// };

const server = new ApolloServer({
  resolvers: resolvers,
  typeDefs: typeDefs,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({
    req,
    res,
    // prisma,
  }),
});
export { handler as POST, handler as GET };
