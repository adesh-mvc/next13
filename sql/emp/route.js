import { connectDb } from "@/util/connect";
import { Empanelment, EmpanelService } from "@/models/sql/EmpanelmentModel";
import UserBook from "@/models/sql/user-book";
import BpaModel from "@/models/sql/bpa-model";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req, res) {
    const action = req.nextUrl.searchParams.get('name');
    await connectDb();
    if (action === 'list') {
        const emp_list = await Empanelment.findAll({ raw: true });


        await InsertEmpanel(emp_list);
        return NextResponse.json({ "message": "list response", emp_list })
    } else if (action === 'delete') {

    }

}

const InsertEmpanel = async (empanelment) => {
    const data_hl = await hospitalList();
    const data_bl = await bpaList();
    // console.log(data_hl, data_bl);
    empanelment.forEach((emp, index) => {
        const hd = data_hl[emp.empanel_hos]?.length ? data_hl[emp.empanel_hos][0]._id : ``;
        const bd = data_bl[emp.empanel_bpa]?.length ? data_bl[emp.empanel_bpa][0]._id : ``;
        console.log(data_hl[emp.empanel_hos]?.length, typeof (bd), typeof (hd))
        if (typeof (hd) == String && typeof (bd) == String) return false;
        console.log("index", index);

        const currentDoc = {

        };
    })
}
const hospitalList = async () => {
    const hospital_list = await UserBook.find({}, { "SqlId": 1, "_id": true });
    return hospital_list.reduce((cb, d) => {
        // const { SqlId, ...HospitalData } = d;
        (cb[d.SqlId] = cb[d.SqlId] || []).push(d);
        return cb;
    }, {});

}
const bpaList = async () => {
    const hospital_list = await BpaModel.find({}, { "SqlId": 1, "_id": true });
    return hospital_list.reduce((cb, d) => {
        // const { SqlId, ...BpaData } = d;
        (cb[d.SqlId] = cb[d.SqlId] || []).push(d);
        return cb;
    }, {});
}