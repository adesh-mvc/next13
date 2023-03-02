import mongoose from "mongoose";
import bcrypt from "bcryptjs";
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
        type: String,
        trim: true
    },
    Role: {
        type: String,
        default: 'superadmin'
    }

});

AdminSchema.pre("save", async function (next) {
    console.log("Password Hash:", this.Password)
    if (!this.isModified("Password")) {
        next();
    }

    this.Password = await bcrypt.hash(this.Password, 10);
});

export default module.exports = mongoose.models.AdminBook || mongoose.model('AdminBook', AdminSchema);


