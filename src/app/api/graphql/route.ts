import { createYoga, createSchema } from "graphql-yoga";

const yoga = createYoga({
  schema: createSchema({
    typeDefs: `type Query { test: String }`,
    resolvers: {
      Query: {
        test: () => "Test from backend",
      },
    },
  }),
  graphqlEndpoint: "/api/graphql",
});

export { yoga as GET, yoga as POST };
