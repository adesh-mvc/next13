import { gql } from "graphql-tag";
const typeDefs = gql`
     #AdminBook
    type AdminUser{
        id: ID
        FullName: String
        DisplayName: String
        UserName: String
        Password: String
        ThumbImage: String
    }
`