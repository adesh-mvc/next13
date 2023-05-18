import { gql } from "graphql-tag";

const uploadSchema = gql`
# in the resolver map below.
scalar Upload
type File {  
    filename: String!
    mimetype: String!
    encoding: String!
  }
  type Query {
    _ : Boolean 
  }
  type Mutation {  
    singleUpload(file: Upload!): File!
  }
`;

module.exports = uploadSchema;