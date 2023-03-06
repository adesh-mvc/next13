import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;


const Item = new Schema({
    ItemType: {
        type: String
    },
    Items: []
});

export default module.exports = mongoose.model.CommonItem || mongoose.model('CommonItem', Item);

