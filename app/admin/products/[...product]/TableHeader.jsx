"use client"

const TableHeader = ({ searchAction, searchString }) => {
    return (<>
        <div className="card-header align-items-center py-5 gap-2 gap-md-5">
            {/*begin::Card title*/}
            <div className="card-title">
                {/*begin::Search*/}
                <div className="d-flex align-items-center position-relative my-1">
                    {/*begin::Svg Icon | path: icons/duotune/general/gen021.svg*/}
                    <span className="svg-icon svg-icon-1 position-absolute ms-4">
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                opacity="0.5"
                                x="17.0365"
                                y="15.1223"
                                width="8.15546"
                                height={2}
                                rx={1}
                                transform="rotate(45 17.0365 15.1223)"
                                fill="currentColor"
                            />
                            <path
                                d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                fill="currentColor"
                            />
                        </svg>
                    </span>
                    {/*end::Svg Icon*/}{" "}
                    <input
                        type="text"
                        key={`searchbox`}
                        autoFocus
                        data-kt-ecommerce-product-filter="search"
                        className="form-control form-control-solid w-250px ps-14"
                        placeholder="Search Product"
                        defaultValue={searchString}
                        onBlur={searchAction}
                    />
                </div>
                {/*end::Search*/}
            </div>
            {/*end::Card title*/}
            {/*begin::Card toolbar*/}
            <div className="card-toolbar flex-row-fluid justify-content-end gap-5">
                <div className="w-100 mw-150px">
                    {/*begin::Select2*/}
                    <select
                        className="form-select form-select-solid select2-hidden-accessible"
                        data-control="select2"
                        data-hide-search="true"
                        data-placeholder="Status"
                        data-kt-ecommerce-product-filter="status"
                        data-select2-id="select2-data-7-wpg3"
                        tabIndex={-1}
                        aria-hidden="true"
                        data-kt-initialized={1}
                    >
                        <option data-select2-id="select2-data-9-kckz" />
                        <option value="all">All</option>
                        <option value="published">Published</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    <span
                        className="select2 select2-container select2-container--bootstrap5"
                        dir="ltr"
                        data-select2-id="select2-data-8-ttot"
                        style={{ width: "100%" }}
                    >
                        <span className="selection">
                            <span
                                className="select2-selection select2-selection--single form-select form-select-solid"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-disabled="false"
                                aria-labelledby="select2-3ohv-container"
                                aria-controls="select2-3ohv-container"
                            >
                                <span
                                    className="select2-selection__rendered"
                                    id="select2-3ohv-container"
                                    role="textbox"
                                    aria-readonly="true"
                                    title="Status"
                                >
                                    <span className="select2-selection__placeholder">
                                        Status
                                    </span>
                                </span>
                                <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                >
                                    <b role="presentation" />
                                </span>
                            </span>
                        </span>
                        <span className="dropdown-wrapper" aria-hidden="true" />
                    </span>
                    {/*end::Select2*/}
                </div>
                {/*begin::Add product*/}
                <a href="/admin/products/add" className="btn btn-primary">
                    Add Product
                </a>
                {/*end::Add product*/}
            </div>
            {/*end::Card toolbar*/}
        </div>
    </>)
}
export default TableHeader;