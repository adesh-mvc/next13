<<<<<<< HEAD
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";


const ClientProviders = ({ children }) => {
=======
import { ApolloClient, gql, InMemoryCache } from "@apollo/client";
export const ClientProviders = ({ children }) => {
>>>>>>> 5414a781e67bfc4094e5a0c20d81f5b68ef7cd07
    const client = new ApolloClient({
        uri: `http://localhost:3000/api/graphql`,
        cache: new InMemoryCache()
    })
    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}
<<<<<<< HEAD
export default ClientProviders;


=======
>>>>>>> 5414a781e67bfc4094e5a0c20d81f5b68ef7cd07
