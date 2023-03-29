
import { getClient, clientNoCache } from "@/lib/client";

import { gql } from "@apollo/client";
const GET_ITEMS = gql`
query{
    getItems {
      id
      ItemType
      Items {
        id
        Title
      }
    }
  }
`;
const GET_GROUP_ITEMS = gql`
query($ItemType: String!){
    getSingleItem(ItemType: $ItemType) {
      id
      ItemType
      Items {
        id
        Title
      }
    }
  }
`
export default async function ProductList() {
    const client = getClient({ clientNoCache: false });
    const { data } = await client.query({
        query: GET_GROUP_ITEMS, variables: {
            ItemType: "Species"
        }
    });
    console.log(data)

    // const getAllCountries = () => {
    //     client
    //         .query({
    //             query: GET_ITEMS
    //         })
    //         .then((res) => {
    //             console.log('rettuen: ', res.data);
    //         })
    //         .catch((err) => console.log(err));
    // };
    // getAllCountries()
    return (
        <h1>Product table </h1>
    )
}