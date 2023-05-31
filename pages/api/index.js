import { ApolloServer } from '@apollo/server';
import { ApolloGateway } from "@apollo/gateway";
import { startServerAndCreateNextHandler } from '@as-integrations/next';


const { graphqlUploadExpress } = require("graphql-upload-minimal");

import itemTable from "@/db/Schema/itemSchema";
import productTable from "../../db/Schema/productSchema.js";
import adminUserTable from "../../db/Schema/adminSchema";
import uploadSchema from "../../db/Schema/uploadSchema";
import bpaSchema from "../../db/Schema/bpaSchema";
//import typeDefs from '../../db/Schema/schema-xx';
import itemResolver from "@/db/Resolvers/itemResolvers";
import productResolver from "../../db/Resolvers/productResolvers";
import adminResolver from "../../db/Resolvers/adminResolvers";
import uploadResolver from "../../db/Resolvers/uploadResolvers";
import bapResolver from '@/db/Resolvers/bpaResolver';
import connectDb from "../../db/config";
// console.log("RESOLVER:", Product)
connectDb();
// const resolvers = {
//     Query: {
//         hello: () => 'world',
//         book: () => 'C#'
//     },
// };

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
//   type Query{
//     book:String
//   }
// `;
const gateway = new ApolloGateway({
    serviceList: [
        { name: 'products', url: 'https://products-service.dev/graphql' },
        { name: 'reviews', url: 'https://reviews-service.dev/graphql' },
    ],
    introspectionHeaders: {
        Authorization: 'Bearer abc123',
    },
});
const server = new ApolloServer({
    // schema: buildSubgraphSchema({
    //     typeDefs: [productTable], resolvers: [resolvers], introspection: true, playground: true
    // })
    // gateway,

    // subscriptions: false,
    uploads: {
        maxFileSize: 10000000, // 10 MB
        maxFiles: 20
    },

    // graphqlUploadExpress: { maxFileSize: 10000, maxFiles: 10 },
    typeDefs: [itemTable, productTable, adminUserTable, bpaSchema, uploadSchema],
    resolvers: [itemResolver, productResolver, adminResolver, bapResolver, uploadResolver],
    // csrfPrevention: false,
    csrfPrevention: true,
    dataSources: () => ({}),
    introspection: true,
    // cors: { origin: "http://localhost:3000/" },

    playground: true
})


export default startServerAndCreateNextHandler(server);

// https://github.com/apollo-server-integrations/apollo-server-integration-next
//https://graphql.org/graphql-js/mutations-and-input-types/
// https://www.apollographql.com/docs/apollo-server/security/cors/#graphql-upload
// https://www.javascripttutorial.net/web-apis/javascript-filereader/
// https://pdf-lib.js.org/
// https://www.npmjs.com/package/signature_pad
// https://medium.com/@divbydiv/build-a-signature-pad-in-html-css-js-canvas-bd174d999392
// https://miro.medium.com/v2/resize:fit:700/1*kSbgHu01E-PFh2JXVoS-jw.gif
// https://www.apollographql.com/blog/announcement/frontend/using-apollo-client-with-next-js-13-releasing-an-official-library-to-support-the-app-router/
// https://www.apollographql.com/blog/apollo-client/next-js/how-to-use-apollo-client-with-next-js-13/