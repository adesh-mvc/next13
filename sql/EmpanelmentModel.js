const { DataTypes } = require("sequelize");

const db = require("@/util/sqlcon");
export const Empanelment = db.define("empanelment", {
    empanel_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    empanel_hos: { type: DataTypes.INTEGER },
    empanel_bpa: { type: DataTypes.INTEGER },
    empanel_name: { type: DataTypes.STRING },
    empanel_payer: { type: DataTypes.STRING },
    empanel_ppn: { type: DataTypes.STRING },
    apl_ppn_trf: { type: DataTypes.INTEGER },
    empanel_addr: { type: DataTypes.STRING },
    empanel_preauth: { type: DataTypes.STRING },
    empanel_net: { type: DataTypes.STRING },
    empanel_claim: { type: DataTypes.STRING },
    empanel_app_no: { type: DataTypes.STRING },
    empanel_app_date: { type: DataTypes.DATE },
    empanel_reg_no: { type: DataTypes.STRING },
    empanel_status: { type: DataTypes.TINYINT },

    tbo_status: { type: DataTypes.STRING },
    mou_start: { type: DataTypes.DATE },
    mou_end: { type: DataTypes.DATE },
    username: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    ppn_year: { type: DataTypes.STRING },
    disc_tarrif: { type: DataTypes.STRING },
    disc_pharmacy: { type: DataTypes.STRING },
    disc_implant: { type: DataTypes.STRING },
    ppn_remarks: { type: DataTypes.STRING },
    soc_year: { type: DataTypes.STRING },
    soc_tarrif: { type: DataTypes.STRING },
    soc_pharmacy: { type: DataTypes.STRING },
    soc_implant: { type: DataTypes.STRING },
    soc_remarks: { type: DataTypes.STRING },
    empanel_step: { type: DataTypes.STRING },
    createda_at: { type: DataTypes.DATE },
    bg_no: { type: DataTypes.STRING },
    bg_amt: { type: DataTypes.STRING },
    bg_issued: { type: DataTypes.DATE },
    bg_expiry: { type: DataTypes.DATE }
}, {
    freezeTableName: true,
    timestamps: false
});



export const EmpanelService = db.define("empanel_service", {
    es_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    es_empanel: { type: DataTypes.INTEGER },
    cash: { type: DataTypes.TINYINT },
    cash_patient_1: { type: DataTypes.TINYINT },
    cash_patient_opd_1: { type: DataTypes.TINYINT },
    cash_patient_ipd_1: { type: DataTypes.TINYINT },
    cash_patient_2: { type: DataTypes.TINYINT },
    cash_patient_opd_2: { type: DataTypes.TINYINT },
    cash_patient_ipd_2: { type: DataTypes.TINYINT },
    cash_patient_3: { type: DataTypes.TINYINT },
    cash_patient_opd_3: { type: DataTypes.TINYINT },
    cash_patient_ipd_3: { type: DataTypes.TINYINT },
    cash_doc_1: { type: DataTypes.TINYINT },
    cash_doc_2: { type: DataTypes.TINYINT },
    cash_doc_3: { type: DataTypes.TINYINT },
    cash_doc_4: { type: DataTypes.TINYINT },
    cash_doc_5: { type: DataTypes.TINYINT },
    cash_doc_6: { type: DataTypes.TINYINT },
    cash_doc_txt: { type: DataTypes.STRING },
    cashless: { type: DataTypes.TINYINT },
    cashless_patient_1: { type: DataTypes.TINYINT },
    cashless_patient_opd_1: { type: DataTypes.TINYINT },
    cashless_patient_ipd_1: { type: DataTypes.TINYINT },
    cashless_patient_2: { type: DataTypes.TINYINT },
    cashless_patient_opd_2: { type: DataTypes.TINYINT },
    cashless_patient_ipd_2: { type: DataTypes.TINYINT },
    cashless_patient_3: { type: DataTypes.TINYINT },
    cashless_patient_opd_3: { type: DataTypes.TINYINT },
    cashless_patient_ipd_3: { type: DataTypes.TINYINT },
    cashless_doc_1: { type: DataTypes.TINYINT },
    cashless_doc_2: { type: DataTypes.TINYINT },
    cashless_doc_3: { type: DataTypes.TINYINT },
    cashless_doc_4: { type: DataTypes.TINYINT },
    cashless_doc_5: { type: DataTypes.TINYINT },
    cashless_doc_6: { type: DataTypes.TINYINT },
    cashless_doc_txt: { type: DataTypes.STRING }

}, {
    freezeTableName: true,
    timestamps: false
});