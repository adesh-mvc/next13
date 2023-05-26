import { gql } from 'graphql-tag';
import { BPA } from "./InterFaceHandler";
const productTable = gql`
interface BPA {
  id: ID
  BpaName:String
}

  # Products
  type Product {
    id: ID!
    name: String
    image:String
    productionCapacity: Int
    price: Float
    description: String
    BpaMst:BpaMst
  }
  
  type BpaMst implements BPA{    
    id:ID
    BpaName : String
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
    BpaProduct:[Product]
    BpaMst:[BpaMst]
    myBpa:[BPA]
  }

  type Mutation {
    #Products
    newProduct(input: ProductInput): Product
    updateProduct(id: ID!, input: ProductInput): Product
    deleteProduct(id: ID!): String
  }

`

module.exports = productTable;

// https://stackoverflow.com/questions/45227332/is-it-possible-to-implement-multiple-interfaces-in-graphql