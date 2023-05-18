import mongoose from "mongoose";

const { Schema } = mongoose;
mongoose.Promise = global.Promise;


const Item = new Schema({
    ItemType: {
        type: String,

        trim: true
    },
    Items: [{
        RenderOrder: Number,
        Title: String
    }]
});

module.exports = mongoose.models.CommonItem || mongoose.model('CommonItem', Item);

