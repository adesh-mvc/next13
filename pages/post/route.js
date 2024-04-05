import { connectDb } from "@/util/connect";

import CategorySql from "@/models/CategoryModelSql";
import postCategory from "@/models/categoryModel";

import Post from "@/models/PostModelSql";
import Term from "@/models/PostTermModelSql";

import { NextResponse, NextRequest } from "next/server";
Post.hasOne(Term, { foreignKey: "PostId" });
Term.belongsTo(Post, { foreignKey: "ID" });
export async function GET(req, res) {

    let data = {}

    try {

        data = await Post.findAll({
            include: [
                {
                    model: Term,
                    attributes: ["CatId", "SubCatId"]
                },
            ]
        });
        // const terms = mongoData.map(row => row.TermId)

        if (data === null) {
            console.log('Not found!');
        } else {
            // console.log(data instanceof data); // true
            await connectDb();
            const categories = await postCategory.find({});

            const NewCategories = categories.reduce((obj, value) => {
                obj[value.TermId] = value
                return obj;
            }, {});
        }
    } catch (error) {
        console.log("Fetch error:", error);
    }
    return NextResponse.json({ message: "CategorySql Listing route.", data });
}
// https://devdotcode.com/one-to-one-association-in-mysql-database-using-sequelize-async-await-with-node-js/
