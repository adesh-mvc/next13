import mongoose from "mongoose";
const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const UserSchema = new Schema({
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
    Logo: {
        trim: true
    },
    Role: {
        type: String,
        enum: ['group', 'user', 'tpa']
    }

});
UserSchema.pre("save", async function (next) {
    if (!this.isModified("Password")) {
        next();
    }
    this.Password = await bcrypt.hash(this.Password, 10);
});
module.exports = mongoose.model.UserBook || mongoose.model('UserBook', UserSchema);


