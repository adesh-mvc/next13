import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
export const ClientProviders = ({ children }) => {
    const client = new ApolloClient({
        uri: `http://localhost:3000/api/graphql`,
        cache: new InMemoryCache()
    })
    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}
