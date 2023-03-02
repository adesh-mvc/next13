const MenuWrapper = () => {
    return (
        <>
            <div
                className="align-self-end overflow-auto"
                id="kt_brand_tabs"
            >
                {/*begin::Header tabs wrapper*/}
                <div
                    className="header-tabs overflow-auto mx-4 ms-lg-10 mb-5 mb-lg-0"
                    id="kt_header_tabs"
                    data-kt-swapper="true"
                    data-kt-swapper-mode="prepend"
                    data-kt-swapper-parent="{default: '#kt_header_navs_wrapper', lg: '#kt_brand_tabs'}"
                >
                    {/*begin::Header tabs*/}
                    <ul className="nav flex-nowrap text-nowrap">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                data-bs-toggle="tab"
                                href="#kt_header_navs_tab_1"
                            >
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#kt_header_navs_tab_2"
                            >
                                Forms
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#kt_header_navs_tab_3"
                            >
                                Applications
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#kt_header_navs_tab_4"
                            >
                                Reports
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-bs-toggle="tab"
                                href="#kt_header_navs_tab_5"
                            >
                                Help
                            </a>
                        </li>
                    </ul>
                    {/*begin::Header tabs*/}
                </div>
                {/*end::Header tabs wrapper*/}
            </div>
        </>
    )
}

export default MenuWrapper;