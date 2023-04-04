import { gql } from "graphql-tag";

const typeDefs = gql`
    type BpaMst{
        id:ID
        BpaType: String
        BpaName: String
        BpaCode: String
        WebLink: String
        Logo: String
        LogoAlign: String
    }

    input InsertBpa{
        BpaType: String
        BpaName: String
        BpaCode: String
        WebLink: String
        Logo: String
        LogoAlign: String
    }

    type Query{
        getBpaList:[BpaMst]
    }

    type Mutation{
        newBpa(input:InsertBpa):BpaMst
    }
`;

module.exports = typeDefs;