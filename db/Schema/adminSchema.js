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

    input AdminInsert{
        FullName: String
        DisplayName: String
        UserName: String!
        Password: String!
        ThumbImage: String
    }

    type Query{
        getAdminUsers: [AdminUser]
        getAdminUser(id:ID):AdminUser
    }

    type Mutation{
        newAdmin
    }
`