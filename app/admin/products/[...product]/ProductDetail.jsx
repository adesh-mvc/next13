"use client";
import Link from "next/link";
import { useState } from "react";
import { Disc1, Disc2 } from "./PaStatus";
const ProductDetail = (docId) => {
    const [isDetail, setDetail] = useState(true);
    const [renderForm, setRenderForm] = useState(false);
    const ButtonAction = (formnum) => {
        console.log("ButtonAction:", formnum)
        setDetail(false)
        setRenderForm(formnum)
    }
    const renderStatus = () => {
        if (renderForm == 1) {
            alert
            return <Disc1 />
        } else if (renderForm == 2) {
            return <Disc2 />
        }
    }
    return (
        <div className="row g-5 g-xxl-8">
            <div className="col-xl-9">
                <div className="card mb-5 mb-xxl-8">
                    {isDetail ? (
                        [1, 2, 3, 4, 5].map((row) => {
                            return (<div className="card-body pb-0" key={row}>
                                {/*begin::Header*/}
                                <div className="d-flex align-items-center">
                                    {/*begin::User*/}
                                    <div className="d-flex align-items-center flex-grow-1">
                                        {/*begin::Avatar*/}
                                        <div className="symbol symbol-45px me-5">
                                            <img src="../../../assets/media/avatars/300-6.jpg" alt="" />
                                        </div>
                                        {/*end::Avatar*/}
                                        {/*begin::Info*/}
                                        <div className="d-flex flex-column">
                                            <a href="#" className="text-gray-900 text-hover-primary fs-6 fw-bold">
                                                Grace Green
                                            </a>
                                            <span className="text-gray-400 fw-bold">
                                                PHP, SQLite, Artisan CLI
                                            </span>
                                        </div>
                                        {/*end::Info*/}
                                    </div>


                                </div>
                                {/*end::Header*/}

                            </div>)
                        })
                    ) : (

                        renderStatus()
                        //  renderForm == 2 ?( <Disc2 />):null
                    )
                    }



                </div>


            </div>
            <div className="col-xl-3">
                <div className="card mb-5 mb-xxl-8">
                    {/*begin::Body*/}
                    <div className="card-body pb-0">
                        {/*begin::Header*/}
                        <div className="d-flex align-items-center">
                            {/*begin::User*/}
                            <div className="d-flex align-items-center flex-grow-1">
                                <button className="btn btn-primary" onClick={() => ButtonAction(1)} id="kt_followers_show_more_button">
                                    {/*begin::Indicator label*/}
                                    <span className="indicator-label">Button One</span>
                                    {/*end::Indicator label*/}
                                    {/*begin::Indicator progress*/}
                                    <span className="indicator-progress">
                                        Please wait...{" "}
                                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                    </span>

                                </button>

                            </div>
                            <div className="d-flex align-items-center flex-grow-1">
                                <button className="btn btn-info" onClick={() => ButtonAction(2)} id="kt_followers_show_more_button">
                                    {/*begin::Indicator label*/}
                                    <span className="indicator-label">Button two</span>
                                    {/*end::Indicator label*/}
                                    {/*begin::Indicator progress*/}
                                    <span className="indicator-progress">
                                        Please wait...{" "}
                                        <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                    </span>

                                </button>

                            </div>
                            {/*end::User*/}

                        </div>
                        {/*end::Header*/}

                    </div>
                    {/*end::Body*/}
                </div>
            </div>
        </div>)
}
export default ProductDetail;
