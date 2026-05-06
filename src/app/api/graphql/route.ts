import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const server = new ApolloServer({
  typeDefs: `
    type Query { test: String }
    type Mutation { createMessage(text: String!): String }
  `,
  resolvers: {
    Query: {
      test: () => "Test from backend",
    },
    Mutation: {
      createMessage: (_: unknown, { text }: { text: string }) =>
        `Created: ${text}`,
    },
  },
});

const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
