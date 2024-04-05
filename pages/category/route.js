import { connectDb } from "@/util/connect";
import CategorySql from "@/models/CategoryModelSql";
import postCategory from "@/models/categoryModel";
import { NextResponse, NextRequest } from "next/server";
export async function GET(req, res) {

    let data = {}
    try {
        data = await CategorySql.findAll();
        const mongoData = await postCategory.find({});


        if (data === null) {
            console.log('Not found!');
        } else {
            // console.log(data instanceof data); // true
            await connectDb();

            // const category_q = new category({
            //     firstname: FirstName,
            //     lastname: LastName,
            //     email: EmailId,
            //     username: UserName,
            //     password: Password,
            //     case: 46446464646546
            // });
            // await postCategory.create(data);
            // Function call 

            const categoryData = [];

            data.forEach(row => {
                // categoryData.push(
                //     {
                //         TermId: row.TermId,
                //         TermName: row.TermName,
                //         TermSlug: row.TermSlug,
                //         TermImage: row.TermImage,
                //         ParentId: row.ParentId,
                //         RssFeedUrl: row.RssFeedUrl
                //     }
                // );
                if (mongoData.includes(row.TermId)) return false;
                const cat = new postCategory({
                    TermId: row.TermId,
                    TermName: row.TermName,
                    TermSlug: row.TermSlug,
                    TermImage: row.TermImage,
                    ParentId: row.ParentId,
                    RssFeedUrl: row.RssFeedUrl
                });
                cat.save();

            });

            // const cat = new postCategory(categoryData[0]);
            // await postCategory.insertMany(categoryData);
            // await postCategory.insertMany(categoryData).then(function () {
            //     console.log("Data inserted") // Success 
            // }).catch(function (error) {
            //     console.log(error)     // Failure 
            // });
        }
    } catch (error) {
        console.log("Fetch error:", error);
    }

    return NextResponse.json({ message: "CategorySql Listing route." });
}
// https://www.squash.io/how-to-check-if-array-contains-value-in-javascript/#:~:text=values%20in%20JavaScript.-,Method%201%3A%20Using%20the%20includes()%20Method,the%20specified%20value%20or%20not.