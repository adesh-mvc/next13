import { gql } from 'graphql-tag';

const productTable = gql`
  # Products
  type Product {
    id: ID
    name: String
    productionCapacity: Int
    price: Float
    description: String
  }

  input ProductInput {
    name: String!
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

/* 

mutation ($input: ProductInput) {
newProduct (input: $input){
  name
  productionCapacity
  price
  description
}
}

{
  "input":{
     "name":"Candy",
    "description":"You can use variables to simplify mutation client logic just like you can with queries",
    "price": 699.50,
    "productionCapacity": 5
  }
}
}
*/