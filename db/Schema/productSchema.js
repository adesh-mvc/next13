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
 type DataTable{
    NumRows: Int
    Page: Int
  
 }
type tabCol{
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
    productionCapacity: Int
    price: Float
    description: String
  }

  type Query {
    getProducts(limit:Int page:Int q:String):[Product]
    productDataSet(q:String):[DataTable]
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