import { gql } from 'graphql-tag';

const productTable = gql`
  # Products
  type Product {
    id: ID
    name: String
    image:String
    productionCapacity: Int
    price: Float
    description: String
  }

  input ProductInput {
    name: String!
    image:String,
    productionCapacity: Int!
    price: Float!
    description: String
  }

  type Query {
    getProducts: [Product]
    getProduct(id: ID!): Product
  }

  type Mutation {
    #Products
    newProduct(input: ProductInput): Product
    updateProduct(id: ID!, input: ProductInput): Product
    deleteProduct(id: ID!): String
  }

`

module.exports = productTable