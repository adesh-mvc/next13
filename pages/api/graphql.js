import { ApolloServer } from '@apollo/server';

import { startServerAndCreateNextHandler } from '@as-integrations/next';

import itemTable from "@/db/Schema/itemSchema";
import productTable from "../../db/Schema/productSchema";
import adminUserTable from "../../db/Schema/adminSchema";
//import typeDefs from '../../db/Schema/schema-xx';
import itemResolver from "@/db/Resolvers/itemResolvers";
import productResolver from "../../db/Resolvers/productResolvers";
import adminResolver from "../../db/Resolvers/adminResolvers";
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

const server = new ApolloServer({
    // schema: buildSubgraphSchema({
    //     typeDefs: [productTable], resolvers: [resolvers], introspection: true, playground: true
    // })
    typeDefs: [itemTable, productTable, adminUserTable], resolvers: [itemResolver, productResolver, adminResolver], introspection: true, playground: true
})


export default startServerAndCreateNextHandler(server);

// https://github.com/apollo-server-integrations/apollo-server-integration-next
//https://graphql.org/graphql-js/mutations-and-input-types/