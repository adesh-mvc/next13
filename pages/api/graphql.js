import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

import typeDefs from '../../db/schema';
import resolvers from "../../db/resolvers";
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
    resolvers,
    typeDefs,
    introspection: true,
    playground: true,
});

export default startServerAndCreateNextHandler(server);

// https://github.com/apollo-server-integrations/apollo-server-integration-next
//https://graphql.org/graphql-js/mutations-and-input-types/