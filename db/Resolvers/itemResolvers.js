import ItemModel from "@/db/models/CommonItems";

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
        }
    },
    Mutation: {
        newItem: async (_, { input }) => {
            try {
                const { ItemType, Items } = input;
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