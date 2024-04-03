import mongoose from "mongoose";
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const counterSchema = new Schema(
    {
        _id: { type: String, required: true },
        seq: { type: Number, default: 0 }
    }
);

const Counter = mongoose.models.counter || mongoose.model("counter", counterSchema);
const getSequenceNextValue = async (seqName) => {
    const count = await Counter.findByIdAndUpdate(
        { "_id": seqName },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );
    return count.seq;
};

const InsertCounter = (seqName) => {
    Counter.insert({
        "_id": getSequenceNextValue(seqName),
        "seq": 1
    })
}
// if (!this.isNew) return;
//     this.case = await sequencing.getSequenceNextValue("case");
//     this.password = await bcrypt.hash(this.password, 10);
//     next();
module.exports = { Counter, getSequenceNextValue, InsertCounter };
