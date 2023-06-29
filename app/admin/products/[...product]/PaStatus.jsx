"use client";

import { useState } from "react";

export const Disc1 = () => {
    const [statusData, setStatusData] = useState({
        // Dod: "",
        // Doa: "",
        RoomFee: "0.00",
        InvestigationFee: "0.00",
        IcuCharge: "0:00",
        ConsultationFee: "0.00",
        MedicalFee: "0.00",
        OtherFee: "0.00",
        BillAmt: "0.00"
    })
    const TotalBill = (e) => {
        const { name, value } = e.target;
        setStatusData({
            ...statusData,
            [name]: value
        });
        const bl = document.getElementsByClassName('BillAmt');
        console.log(value)
        let totalAmt = 0;
        bl.forEach(element => {
            if (typeof element.value == 'undefined') return false;
            totalAmt = totalAmt + parseFloat(element.value)
            if (!isNaN(totalAmt)) {
                console.log("BILLAmt", element.value, element.name, totalAmt)
                setStatusData({
                    ...statusData,
                    ['BillAmt']: parseFloat(totalAmt).toFixed(2)
                });
            }
        });
        console.log("TOTAL:", totalAmt)

        // setStatusData({
        //     ...statusData,
        //     ['BillAmt']: totalAmt
        // });
    }

    return (<>
        <h1>FORM TRIGGER 1</h1>
        <div className="row">

            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label">DOA</label>

                <input
                    type="text"
                    name="product_name"
                    className="form-control mb-2"
                    placeholder="DOA"
                    defaultValue=""
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label">DOD</label>

                <input
                    type="text"
                    name="product_name"
                    className="form-control mb-2"
                    placeholder="DOD"
                    defaultValue=""
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-2">
                {/*begin::Label*/}
                <label className="required form-label">Room Fee</label>

                <input
                    type="number"
                    name="RoomFee"
                    onChange={TotalBill}
                    className="form-control mb-2 BillAmt"
                    placeholder="Product name"
                    defaultValue={statusData.RoomFee}
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-2">
                {/*begin::Label*/}
                <label className="required form-label">Inv charge</label>

                <input
                    type="number"
                    name="InvestigationFee"
                    onChange={TotalBill}
                    className="form-control mb-2 BillAmt"
                    placeholder="Product name"
                    defaultValue={statusData.InvestigationFee}
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-2">
                {/*begin::Label*/}
                <label className="required form-label">IC Fee</label>

                <input
                    type="number"
                    name="IcuCharge"
                    onChange={TotalBill}
                    className="form-control mb-2 BillAmt"
                    placeholder="Product name"
                    defaultValue={statusData.IcuCharge}
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label">Cons Fee</label>

                <input
                    type="number"
                    name="ConsultationFee"
                    onChange={TotalBill}
                    className="form-control mb-2 BillAmt"
                    placeholder="Product name"
                    defaultValue={statusData.ConsultationFee}
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label">Med Fee</label>

                <input
                    type="number"
                    name="MedicalFee"
                    onChange={TotalBill}
                    className="form-control mb-2 BillAmt"
                    placeholder="Product name"
                    defaultValue={statusData.MedicalFee}
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label BillAmt">Other Fee</label>

                <input
                    type="number"
                    name="OtherFee"
                    onChange={TotalBill}
                    className="form-control mb-2 BillAmt"
                    placeholder="Other Fee"
                    defaultValue={statusData.OtherFee}
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label">Bil Amt{statusData.BillAmt}</label>

                <input
                    type="number"
                    readOnly
                    name="BillAmt"
                    className="form-control mb-2"
                    placeholder="Product name"
                    value={statusData.BillAmt}
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label">Al Amt</label>

                <input
                    type="text"
                    name="product_name"
                    className="form-control mb-2"
                    placeholder="Product name"
                    defaultValue=""
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label">Dw AL</label>

                <input
                    type="text"
                    name="product_name"
                    className="form-control mb-2"
                    placeholder="Product name"
                    defaultValue=""
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>

            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label">B Number</label>

                <input
                    type="text"
                    name="product_name"
                    className="form-control mb-2"
                    placeholder="Product name"
                    defaultValue=""
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label">IPD Number</label>

                <input
                    type="text"
                    name="product_name"
                    className="form-control mb-2"
                    placeholder="Product name"
                    defaultValue=""
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label">Detail</label>

                <input
                    type="text"
                    name="product_name"
                    className="form-control mb-2"
                    placeholder="Product name"
                    defaultValue=""
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label">Remarks</label>

                <input
                    type="text"
                    name="product_name"
                    className="form-control mb-2"
                    placeholder="Product name"
                    defaultValue=""
                />

                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
            <div className="mb-10 fv-row fv-plugins-icon-container col-3">
                {/*begin::Label*/}
                <label className="required form-label">Attachment:</label>



                {/* <div className="text-muted fs-7">
                    A product name is required and recommended to be unique.
                </div> */}

                <div className="fv-plugins-message-container invalid-feedback" />
            </div>
        </div>
    </>)
}

export const Disc2 = () => {
    return (<>
        <h1>FORM TRIGGER 2</h1>
    </>)
}