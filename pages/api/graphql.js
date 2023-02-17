import { ApolloServer } from '@apollo/server';

import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { buildSubgraphSchema } from '@apollo/subgraph';
import productTable from "../../db/Schema";
//import typeDefs from '../../db/Schema/schema-xx';
import productResolver from "../../db/Resolvers";
import connectDb from "../../db/config"
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
    typeDefs: [productTable], resolvers: [productResolver], introspection: true, playground: true
})


export default startServerAndCreateNextHandler(server);

// https://github.com/apollo-server-integrations/apollo-server-integration-next
//https://graphql.org/graphql-js/mutations-and-input-types/