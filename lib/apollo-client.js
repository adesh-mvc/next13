
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
            uri: "http://localhost:3000/api/",
            headers: { 'Apollo-Require-Preflight': 'true' },

            // uri: 'http://localhost:4000', // Apollo Server is served from port 4000
            headers: {
                "keep-alive": "true"
            }
        });
        const httpLink = new HttpLink({ uri: "http://localhost:3000/api/" });
        client = new ApolloClient({
            // link: new HttpLink({
            //     uri: "http://localhost:3000/api/graphql",
            // }),
            headers: {
                mode: "no-cors",
                "Access-Control-Allow-Origin": "*",
            },
            link: uploadLink,
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


/* 
Cross-Origin Resource Sharing (CORS) is an HTTP-header-based protocol that enables a server to dictate which origins can access its resources.
*/

