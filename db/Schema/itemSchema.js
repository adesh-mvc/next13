import { gql } from "graphql-tag";


const typeDefs = gql`
    type CommonItem{
        id:ID
        ItemType: String,
        Items:[subItem]
    }
     type subItem{
        RenderOrder: Int
        Title:String
     }
    input ItemInsert{
        ItemType: String,
        Items:[ItemDetail!]
    }
    input ItemDetail{
        RenderOrder: Int
        Title: String
    }

    type Query{
        getItems:[CommonItem]
    }
    type Mutation{
        newItem(input: ItemInsert): CommonItem
    }


`

module.exports = typeDefs;