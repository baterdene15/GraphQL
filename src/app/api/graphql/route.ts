import { createYoga, createSchema } from "graphql-yoga";
import { NextRequest } from "next/server";

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs: `type Query { test: String }`,
    resolvers: {
      Query: {
        test: () => "Test from backend",
      },
    },
  }),
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Request: Request, Response: Response },
});

export async function GET(request: NextRequest) {
  return handleRequest(request, {});
}

export async function POST(request: NextRequest) {
  return handleRequest(request, {});
}
