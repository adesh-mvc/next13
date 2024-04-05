const { DataTypes } = require("sequelize");
// import { connectMysql } from "../util/connect";
const db = require("@/util/sqlcon");
const Term = db.define("ke_post_term", {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PostId: {
        type: DataTypes.INTEGER
        // allowNull: false
    },
    CatId: {
        type: DataTypes.INTEGER
        // allowNull: false
    },
    SubCatId: {
        type: DataTypes.INTEGER
    }
}, {
    freezeTableName: true,
    timestamps: false
});
Term.associate = models => {
    Term.belongsTo(models.Post);
}
db.sync().then(() => {
    console.log('PostTerm table created successfully!');
}).catch((error) => {
    console.error('Unable to create PostTerm : ', error);
});

module.exports = Term;