// const BpaModel = require('../models/bpa-model');
import BpaModel from "../models/bpa-model";
const bapResolver = {
    Query: {
        getBpaList: async () => {
            try {
                const bpa = await BpaModel.find({});

                return bpa;
            }
            catch (err) {
                console.log(err)
            }
        },


    },


    Mutation: {
        newBpa: async (_, { input }) => {
            try {
                const createRes = await BpaModel.create(input);
                return createRes;
            } catch (err) {
                console.log(err)
            }
        }
    }
}
module.exports = bapResolver;