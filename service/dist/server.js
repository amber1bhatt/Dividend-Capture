import { ApolloServer } from "apollo-server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";
const PORT = 4000;
const createApp = async () => {
    const server = new ApolloServer({
        schema: makeExecutableSchema({ typeDefs, resolvers }),
        introspection: true,
    });
    server.listen({ port: PORT });
    console.log(`Server running at http"//localhost:${PORT}${server.graphqlPath}`);
};
createApp();
