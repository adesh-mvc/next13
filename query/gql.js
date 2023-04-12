// import {gql} from 
const a = `query Products{
    getProducts {
      id
      name
      productionCapacity
      price
    }
  }
  `;
// const SINGLE_PRODUCT =
const getitems = `
  query getitems{
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

const groupItems = `
  query singleItem($ItemType: [String]){
    getSingleItem(ItemType: $ItemType) {
      id
      ItemType
      Items {
        id
        Title
      }
    }
    `;
// {
//     "ItemType": ["Species","Sports"]
//   }


const AdminCreate = `mutation($input: AdminInsert){
        newAdmin(input: $input){
          FullName
          DisplayName
          UserName
          Password
          ThumbImage
        }
      }
      `;
//   {
//     "input":{
//        "FullName":"Ravikant1",
//       "DisplayName":"Rkp1",
//       "UserName": "rkp1@gmail.com",
//       "Password": "admin@123",
//       "ThumbImage"  :"user.png"
//     }
//   }

const ALL_ADMIN = `
    query AllAdmin{
        getAdminUsers {
          id
          DisplayName
          FullName
          UserName
          Password
        }
    }
    `;