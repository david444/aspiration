import { ApolloClient, InMemoryCache } from "@apollo/client";

//Apollo client config
const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_GIT_API_KEY}`
  },
  
});
export default client;