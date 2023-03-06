const Product = require('./models/product');

const resolvers = {
    Query: {
        //Products
        getProducts: async () => {
            try {
                const products = await Product.find({});
                return products;
            }
            catch (err) {
                console.log(err)
            }
        },

        getProduct: async (_, { id }) => {
            const product = await Product.findById(id);
            if (!product) {
                throw new Error('Product not found.');
            }
            return product;
        },
    },

    Mutation: {
        // products
        newProduct: async (_, { input }) => {
            try {
                const product = new Product(input);

                const result = await product.save();

                return result;
            } catch (err) {
                console.log(err)
            }
        },
        updateProduct: async (_, { id, input }) => {
            let product = await Product.findById(id);

            if (!product) {
                throw new Error('Product not found.')
            }

            product = await Product.findOneAndUpdate({ _id, id }, input, {
                new: true
            })

            return product;
        },
        deleteProduct: async (_, { id }) => {
            const product = await Product.findById(id);

            if (!product) {
                throw new Error('Product not found')
            }
            await findOneDelete({ _id, id });

            return 'Producto eliminado';
        },
    },
}


module.exports = resolvers


mutation($input: ItemInsert){
    newItem(input: $input) {
        ItemType
      Items {
            RenderOrder
            Title
        }
    }
}


{
    "input": {
        "ItemType": "Technology",
            "Items": [{
                "RenderOrder": 1,
                "Title": "Knowledge"
            },
            {
                "RenderOrder": 3,
                "Title": "Equipment"
            },
            {
                "RenderOrder": 2,
                "Title": "Change"
            }
            ]
    }
}