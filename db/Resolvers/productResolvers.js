import Product from "../models/product";
const productResolver = {
    Query: {
        //Products
        getProducts: async (_, args) => {
            const { limit, page, q } = args;

            try {
                var products = [];

                if (limit) {


                    const param = q ? { "name": new RegExp(`${q}`, "i") } : {};
                    console.log('args q:', param)
                    products = await Product.find(param)
                        .skip(limit * (page - 1))
                        .limit(limit);
                } else {
                    products = await Product.find({});
                }

                /* .sort( { _id: 1 } )
                .skip( pageNumber > 0 ? ( ( pageNumber - 1 ) * nPerPage ) : 0 )
                .limit( nPerPage ); */

                // console.log('total Records:', products)

                return products;
            }
            catch (err) {
                console.log(err)
            }
        },
        productDataSet: async (_, args) => {
            const { q } = args;
            // const products = await Product.find({}).limit(limit);
            // /{ name: { $regex: '.*' + q + '.*' } }
            const param = q ? { "name": new RegExp(`${q}`, "i") } : ``;
            console.log('args q count:', args)
            const numRows = await Product.count(param);

            // console.log('total Records:', ...products)
            return [{ "NumRows": numRows }]
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

            product = await Product.findByIdAndUpdate({ _id: id }, input, {
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

            return 'Proudct Deleted';
        },
    },
}


module.exports = productResolver