import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
const link = createHttpLink({
  uri: "api/graphql",
  credentials: "same-origin",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
