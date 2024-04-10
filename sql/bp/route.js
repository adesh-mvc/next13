import { Hospital } from "@/models/sql/HospitalModel";
import { Bpa, BpaService, BpaEmail, BpaAddress } from "@/models/sql/BpaModel";
import { connectDb } from "@/util/connect";
import UserBook from "@/models/sql/user-book";
import BpaModel from "@/models/sql/bpa-model";
import { NextResponse, NextRequest } from "next/server";
// import commonData from "@/pages/api/common-data.json";


export async function GET(req, res) {
    await connectDb();
    const bpa_action = req.nextUrl.searchParams.get('name');
    if (bpa_action === 'list') {
        // console.log(await mongoUser());
        const BpaData = await Bpa.findAll({
            raw: true
        });
        const BpaServiceData = await BpaService.findAll({ raw: true });
        const serviceData = BpaServiceData.reduce((obj, row) => {
            (obj[row.bs_bpa] = obj[row.bs_bpa] || []).push(row);
            return obj;
        }, {});

        // console.log("serviceData:",serviceData[2][0]);
        await InsertBpa(BpaData, serviceData);
        return NextResponse.json({ status: 200, data: serviceData });
    } else if (bpa_action === 'delete') {

        try {
            await BpaModel.deleteMany({});
            console.log('All Data successfully deleted');
        } catch (err) {
            console.log(err);
        }
        return NextResponse.json({ message: "delete many route." });
    }
}

const mongoUser = async () => {
    const data = await UserBook.find({}, { "SqlId": 1, _id: 1 });
    return data;
}
const IsBpaExist = async () => {
    const mongodbBpa = await BpaModel.find({}, { "SqlId": 1, "_id": false });
    return mongodbBpa.reduce((object, doc) => {
        object.push(doc.SqlId);
        return object
    }, [])
}
const current_bpa_type = (bpa_tp) => {
    let tp_id = ``;
    // commonData.bpa_type.forEach(tp => {
    //     if (bpa_tp !== tp.SQL) return false;
    //     tp_id = tp.Id
    // })
    return tp_id;
}
const current_preauth_type = (pt) => {
    let current_pt = pt.split(",").map(Number);
    let pt_arr = [];
    // commonData.bpa_preauth_type.forEach(bpt => {
    //     if (!current_pt.includes(bpt.SQL)) return false;
    //     pt_arr.push(bpt.Id);
    // });
    return pt_arr;
}
const current_claim_doc = (cd) => {
    let current_cd = cd.split(",").map(Number);
    let cd_arr = [];
    // commonData.bpa_claim_doc.forEach(bcd => {
    //     if (!current_cd.includes(bcd.SQL)) return false;
    //     cd_arr.push(bcd.Id);
    // });
    return cd_arr;
}
const InsertServiceData = (serviceDoc) => {

    const Cash = serviceDoc.cash ? true : false;
    const Cashless = serviceDoc.Cashless ? true : false;

    const cash_patient_1 = serviceDoc.cash_patient_1 ? true : false;
    const cash_patient_opd_1 = serviceDoc.cash_patient_opd_1 ? true : false;
    const cash_patient_ipd_1 = serviceDoc.cash_patient_ipd_1 ? true : false;

    const cash_patient_2 = serviceDoc.cash_patient_2 ? true : false;
    const cash_patient_opd_2 = serviceDoc.cash_patient_opd_2 ? true : false;
    const cash_patient_ipd_2 = serviceDoc.cash_patient_ipd_2 ? true : false;

    const cash_patient_3 = serviceDoc.cash_patient_3 ? true : false;
    const cash_patient_opd_3 = serviceDoc.cash_patient_opd_3 ? true : false;
    const cash_patient_ipd_3 = serviceDoc.cash_patient_ipd_3 ? true : false;

    const cash_doc_1 = serviceDoc.cash_doc_1 ? true : false;
    const cash_doc_1_txt = serviceDoc.cash_doc_1_txt ? serviceDoc.cash_doc_1_txt : ``;
    const cash_doc_2 = serviceDoc.cash_doc_2 ? true : false;
    const cash_doc_2_txt = serviceDoc.cash_doc_2_txt ? serviceDoc.cash_doc_2_txt : ``;
    const cash_doc_3 = serviceDoc.cash_doc_3 ? true : false;
    const cash_doc_3_txt = serviceDoc.cash_doc_3_txt ? serviceDoc.cash_doc_3_txt : ``;
    const cash_doc_4 = serviceDoc.cash_doc_4 ? true : false;
    const cash_doc_4_txt = serviceDoc.cash_doc_4_txt ? serviceDoc.cash_doc_4_txt : ``;
    const cash_doc_5 = serviceDoc.cash_doc_5 ? true : false;
    const cash_doc_5_txt = serviceDoc.cash_doc_5_txt ? serviceDoc.cash_doc_5_txt : ``;
    const cash_doc_6 = serviceDoc.cash_doc_6 ? true : false;
    const cash_doc_6_txt = serviceDoc.cash_doc_6_txt ? serviceDoc.cash_doc_6_txt : ``;



    const cashless_patient_1 = serviceDoc.cashless_patient_1 ? true : false;
    const cashless_patient_opd_1 = serviceDoc.cashless_patient_opd_1 ? true : false;
    const cashless_patient_ipd_1 = serviceDoc.cashless_patient_ipd_1 ? true : false;

    const cashless_patient_2 = serviceDoc.cashless_patient_2 ? true : false;
    const cashless_patient_opd_2 = serviceDoc.cashless_patient_opd_2 ? true : false;
    const cashless_patient_ipd_2 = serviceDoc.cashless_patient_ipd_2 ? true : false;

    const cashless_patient_3 = serviceDoc.cashless_patient_3 ? true : false;
    const cashless_patient_opd_3 = serviceDoc.cashless_patient_opd_3 ? true : false;
    const cashless_patient_ipd_3 = serviceDoc.cashless_patient_ipd_3 ? true : false;

    const cashless_doc_1 = serviceDoc.cashless_doc_1 ? true : false;
    const cashless_doc_1_txt = serviceDoc.cashless_doc_1_txt ? serviceDoc.cashless_doc_1_txt : ``;
    const cashless_doc_2 = serviceDoc.cashless_doc_2 ? true : false;
    const cashless_doc_2_txt = serviceDoc.cashless_doc_2_txt ? serviceDoc.cashless_doc_1_txt : ``;
    const cashless_doc_3 = serviceDoc.cashless_doc_3 ? true : false;
    const cashless_doc_3_txt = serviceDoc.cashless_doc_3_txt ? serviceDoc.cashless_doc_1_txt : ``;
    const cashless_doc_4 = serviceDoc.cashless_doc_4 ? true : false;
    const cashless_doc_4_txt = serviceDoc.cashless_doc_4_txt ? serviceDoc.cashless_doc_1_txt : ``;
    const cashless_doc_5 = serviceDoc.cashless_doc_5 ? true : false;
    const cashless_doc_5_txt = serviceDoc.cashless_doc_5_txt ? serviceDoc.cashless_doc_1_txt : ``;
    const cashless_doc_6 = serviceDoc.cashless_doc_6 ? true : false;
    const cashless_doc_6_txt = serviceDoc.cashless_doc_6_txt ? serviceDoc.cashless_doc_1_txt : ``;


    return { service: { Cash, Cashless } };
}
const getBpaAllEmails = async () => {
    const maildata = await BpaEmail.findAll({
        raw: true
    });
    const bpa_mail = maildata.reduce((cb, doc) => {
        const { be_id, be_bpa, ...newDoc } = doc;
        if (newDoc.be_preauth.trim() !== '' || newDoc.be_network.trim() !== '' || newDoc.be_claim.trim() !== '') {
            (cb[doc.be_bpa] = cb[doc.be_bpa] || []).push(newDoc);
        }

        return cb;
    }, {})
    // console.log("bpa_mail", bpa_mail)
    return bpa_mail;
}
const getBpaAllAddress = async () => {
    const address = await BpaAddress.findAll({
        raw: true
    });
    const bpa_address = address.reduce((cb, doc) => {
        const { bd_id, bd_bpa, ...newDoc } = doc;
        if (newDoc.name.trim() !== '' || newDoc.designation.trim() !== '' || newDoc.mobile.trim() !== '' || newDoc.alt_mobile.trim() !== '' || newDoc.email.trim() !== '') {
            (cb[doc.bd_bpa] = cb[doc.bd_bpa] || []).push(newDoc);
        }

        return cb;
    }, {})
    // console.log("bpa_address", bpa_address)
    return bpa_address;
}

const InsertBpa = async (bpa_table, service_table) => {

    const sqlids = await IsBpaExist();
    const bpaMails = await getBpaAllEmails();
    const bpaAddress = await getBpaAllAddress();
    // console.log(bpaAddress)
    bpa_table.forEach((bpaRow, index) => {
        let bpaId = bpaRow.bpa_id;
        let currService = service_table[bpaId];
        // console.log(bpaMails[bpaId])

        const serviceData2 = currService?.length ? InsertServiceData(currService[currService?.length - 1]) : ``;
        console.log(JSON.stringify(serviceData2.service))
        if (sqlids.includes(bpaId)) return false;
        const serviceData = currService?.length ? InsertServiceData(currService[currService?.length - 1]) : ``;
        // Current bpa type
        let tp = current_bpa_type(bpaRow.bpa_type);
        let bp = bpaRow.bpa_preauth ? current_preauth_type(bpaRow.bpa_preauth) : ``;
        let dp = bpaRow.bpa_discharge ? current_preauth_type(bpaRow.bpa_discharge) : ``;
        let bcd = bpaRow.bpa_claimdoc ? current_claim_doc(bpaRow.bpa_claimdoc) : ``;

        const ed = [];
        if (bpaMails[bpaId]?.length) {
            bpaMails[bpaId].forEach((email) => {
                ed.push({
                    preauth: email.be_preauth,
                    networking: email.be_network,
                    claimdoc: email.be_claim
                });
            })

        }
        const ad = [];
        if (bpaAddress[bpaId]?.length) {
            bpaAddress[bpaId].forEach((email) => {
                const od = [{
                    Dest: email.name,
                    Loc: email.designation,
                    Email: email.email,
                    M1: email.mobile,
                    M2: email.alt_mobile
                }];
                if (email.name_2 || email.designation_2 || email.mobile_2 || email.alt_mobile_2 || email?.email_2) {
                    od.push({ Dest: email.designation_2, Loc: email.name_2, Email: email.email_2, M1: email.mobile_2, M2: email.alt_mobile_2 });
                }
                if (email.name_3 || email.designation_3 || email.mobile_3 || email.alt_mobile_3 || email.email_3) {
                    od.push({ Dest: email.designation_3, Loc: email.name_3, Email: email.email_3, M1: email.mobile_3, M2: email.alt_mobile_3 });
                }
                if (email.name_4 || email.designation_4 || email.mobile_4 || email.alt_mobile_4 || email.email_4) {
                    od.push({ Dest: email.designation_4, Loc: email.name_4, Email: email.email_4, M1: email.mobile_4, M2: email.alt_mobile_4 });
                }
                if (email.name_5 || email.designation_5 || email.mobile_5 || email.alt_mobile_5 || email.email_5) {
                    od.push({ Dest: email.designation_5, Loc: email.name_5, Email: email.email_5, M1: email.mobile_5, M2: email.alt_mobile_5 });
                }
                ad.push(
                    {
                        Office: email?.address_type ? email?.address_type : ``,
                        AdType: email?.address ? email?.address : ``,
                        // OfficeDetail: od
                        OfficeDetail: od
                    }
                );
                // ad[`OfficeDetail`] = od

            })

        }
        // console.log(bpaMails[bpaId]?.length, ed)
        let currentDoc = {
            SqlId: bpaId,
            BpaType: tp,
            BpaName: bpaRow.bpa_name,
            BpaCode: bpaRow.bpa_code,
            WebLink: bpaRow.bpa_web,
            Logo: bpaRow.bpa_logo,
            LogoAlign: ``,
            LogoTag: bpaRow.bpa_tag,
            CrmLink: bpaRow.bpa_crm,
            IrdaCode: bpaRow.bpa_irda,
            Tolfree_1: bpaRow.bpa_tollfree_1,
            Tolfree_2: bpaRow.bpa_tollfree_2,
            AnyCashlessEmail: bpaRow.any_cashless_email,
            PreauthType: bp,
            DischargeType: dp,
            ClaimDoc: bcd,

            IsPayer: bpaRow.bpa_payer ? true : false,
            IsBg: bpaRow.is_bg ? true : false,
            Services: [serviceData.service],
            Service: [],
            ServiceText: [],
            AdressDetail: ad,
            EmailDetail: []
        };
        console.log(bpaMails[bpaId]?.length, bpaId, "ed:", ad)
        const myBpa = new BpaModel(currentDoc);
        myBpa.save();
    });
}