import ItemModel from "@/db/models/CommonItems";
import { signIn } from "next-auth/react";

const ItemResolvers = {
    Query: {
        getItems: async () => {
            try {
                const items = await ItemModel.find({});
                return items;
            }
            catch (error) {
                console.log(error);
            }
        },
        getSingleItem: async (_, Title) => {
            console.log('where:', Title)
            try {
                const single = await ItemModel.find(Title);
                return single;
            }
            catch (error) {
                console.log('Single Item Error: ', error);
            }

        },
    },
    Mutation: {
        newItem: async (_, { input }) => {
            try {
                const { ItemType, Items } = input;
                console.log(ItemType)
                const item = await ItemModel.findOne({ ItemType: ItemType });
                if (item) {
                    throw new Error('sorry already exit');
                    // return { error: 'already exist' }
                }
                const result = await ItemModel.create({ ItemType, Items });
                return result;
            }
            catch (err) {
                console.log(err)
            }
        }
    }
}

module.exports = ItemResolvers;