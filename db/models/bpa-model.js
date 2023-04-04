import mongoose from "mongoose";
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
// https://www.mongodb.com/community/forums/t/can-a-reference-field-in-a-mongoose-schema-pertain-to-more-than-one-data-model/153708/2
const BpaModel = new Schema({
    BpaType: {
        type: Schema.Types.ObjectId,
    },
    BpaName: {
        type: String,
        required: [true, "Item type can't be blank"],
        trim: true
    },
    BpaCode: {
        type: String
    },
    WebLink: {
        type: String
    },
    Logo: {
        type: String
    },
    LogoAlign: {
        type: String
    },
    LogoTag: {
        type: String
    },
    CrmLink: {
        type: String
    },
    IrdaCode: { type: String },
    Tolfree_1: { type: String },
    Tolfree_2: { type: String },
    PreauthType: {
        not: String,
        email: String,
        crm: String
    },
    DischargeType: {
        not: String,
        email: String,
        crm: String
    },
    ClaimDoc: {
        not: String,
        email: String,
        crm: String,
        courier: String
    },
    IsPayer: Boolean,
    IsBg: Boolean,
    AdressDetail: [
        {
            Office: String,
            AdType: String,
            OfficeDetail: [
                {
                    Dest: String,
                    Loc: String,
                    Email: String,
                    M1: String,
                    M2: String
                }
            ]

        }
    ],
    EmailDetail: [
        {
            preauth: String,
            Networking: String,
            claimdoc: String
        }
    ],
    // ServiceDetail: []

});

module.exports = mongoose.models.BpaMst || mongoose.model('BpaMst', BpaModel);
