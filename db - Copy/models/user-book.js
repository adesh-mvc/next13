import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const AdminSchema = new Schema({
    FullName: {
        type: String,
        trim: true
    },
    DisplayName: {
        type: String,
        trim: true
    },
    UserName: {
        type: String,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true,
        trim: true
    },
    Password: {
        type: String,
        required: true,
        trim: true
    },
    ThumbImage: {
        trim: true
    }

});

module.exports = mongoose.model.AdminBook || mongoose.model('AdminBook', AdminSchema);


