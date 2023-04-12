
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, ApolloLink } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";





export const ClientProviders = ({ children }) => {

    // const client = new ApolloClient({
    //     // uri: `http://localhost:3000/api/graphql`,
    //     cache: new InMemoryCache(),
    //     link: createUploadLink()
    // });
    let client = null;
    if (!client || typeof window === "undefined") {
        const uploadLink = createUploadLink();
        const httpLink = new HttpLink({ uri: "http://localhost:3000/api/graphql" });
        client = new ApolloClient({
            link: new HttpLink({
                uri: "http://localhost:3000/api/graphql",
            }),
            // link: ApolloLink.from([uploadLink, httpLink]),
            cache: new InMemoryCache(),
        });
    }

    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}

export default ClientProviders;


