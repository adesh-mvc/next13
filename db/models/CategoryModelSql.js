const { DataTypes } = require("sequelize");
// import { connectMysql } from "../util/connect";
const db = require("@/util/sqlcon");
const Category = db.define("ke_term_mst", {
    TermId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    TermName: {
        type: DataTypes.STRING
        // allowNull: false
    },
    TermSlug: {
        type: DataTypes.STRING
        // allowNull: false
    },
    TermImage: {
        type: DataTypes.STRING
    },
    ParentId: {
        type: DataTypes.INTEGER,
    },
    RssFeedUrl: {
        type: DataTypes.TEXT
    }
    // TermStatus: {
    //     type: DataTypes.ENUM
    // }
}, {
    freezeTableName: true,
    timestamps: false
});

db.sync().then(() => {
    console.log('Book table created successfully!');
}).catch((error) => {
    console.error('Unable to create table : ', error);
});

module.exports = Category;