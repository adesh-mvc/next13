
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
        const uploadLink = createUploadLink({
            uri: "http://localhost:3000/api/graphql",
            headers: { 'Apollo-Require-Preflight': 'true' },

            // uri: 'http://localhost:4000', // Apollo Server is served from port 4000
            headers: {
                "keep-alive": "true"
            }
        });
        const httpLink = new HttpLink({ uri: "http://localhost:3000/api/graphql" });
        client = new ApolloClient({
            // link: new HttpLink({
            //     uri: "http://localhost:3000/api/graphql",
            // }),
            link: httpLink,
            // link: ApolloLink.from([httpLink, uploadLink]),
            cache: new InMemoryCache(),

            // cors: {
            //     origin: true,
            //     credentials: true, // true if you need cookies/authentication
            //     methods: ['GET', 'POST', 'OPTIONS'],
            // },
        });
    }

    return (
        <ApolloProvider client={client}>{children}</ApolloProvider>
    )
}

export default ClientProviders;


