"use client";

import { useQuery, gql } from "@apollo/client";

const GET_PRODUCT = gql`
query Products($limit: Int!, $offset: Int){
  getProducts {
    id
    name
    productionCapacity
    price
    image
  }
  productDataSet(limit: $limit, offset: $offset) {
    NumRows   
  }
}
`;
export default function ProductList() {
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: {
      "limit": 2,
      "offset": 0,
    }
  });
  if (loading) {
    return null;
  }

  if (error) {
    console.error(error);
    return null;
  }

  // console.log(data)
  // const product = useQuery(GET_PRODUCT);
  console.log('useQuery', data)
  return (
    <>
      <div className="toolbar mb-n1 pt-3 mb-lg-n3 pt-lg-6" id="kt_toolbar">
        {/*begin::Container*/}
        <div
          id="kt_toolbar_container"
          className=" container-xxl  d-flex flex-stack flex-wrap gap-2"
        >
          {/*begin::Page title*/}
          <div className="page-title d-flex flex-column align-items-start me-3 py-2 py-lg-0 gap-2">
            {/*begin::Title*/}
            <h1 className="d-flex text-dark fw-bold m-0 fs-3">Products</h1>
            {/*end::Title*/}
            {/*begin::Breadcrumb*/}
            <ul className="breadcrumb breadcrumb-dot fw-semibold text-gray-600 fs-7">
              {/*begin::Item*/}
              <li className="breadcrumb-item text-gray-600">
                <a
                  href="/"
                  className="text-gray-600 text-hover-primary"
                >
                  Home{" "}
                </a>
              </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item text-gray-600">eCommerce </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item text-gray-600">Catalog </li>
              {/*end::Item*/}
              {/*begin::Item*/}
              <li className="breadcrumb-item text-gray-500">Products </li>
              {/*end::Item*/}
            </ul>
            {/*end::Breadcrumb*/}
          </div>
          {/*end::Page title*/}
          {/*begin::Actions*/}
          <div className="d-flex align-items-center">
            {/*begin::Button*/}
            <a
              href="#"
              className="btn btn-icon btn-color-primary bg-body w-35px h-35px w-lg-40px h-lg-40px me-3"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_upgrade_plan"
            >
              {/*begin::Svg Icon | path: icons/duotune/files/fil008.svg*/}
              <span className="svg-icon svg-icon-2 svg-icon-md-1">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16 14C16.4 13.6 16.4 12.9 16 12.5C15.6 12.1 15.4 12.6 15 13L11 16L9 15C8.6 14.6 8.4 14.1 8 14.5C7.6 14.9 8.1 15.6 8.5 16L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z"
                    fill="currentColor"
                  />
                  <path
                    d="M10.4343 15.4343L9.25 14.25C8.83579 13.8358 8.16421 13.8358 7.75 14.25C7.33579 14.6642 7.33579 15.3358 7.75 15.75L10.2929 18.2929C10.6834 18.6834 11.3166 18.6834 11.7071 18.2929L16.25 13.75C16.6642 13.3358 16.6642 12.6642 16.25 12.25C15.8358 11.8358 15.1642 11.8358 14.75 12.25L11.5657 15.4343C11.2533 15.7467 10.7467 15.7467 10.4343 15.4343Z"
                    fill="currentColor"
                  />
                  <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </a>
            {/*end::Button*/}
            {/*begin::Button*/}
            <a
              href="#"
              className="btn btn-icon btn-color-success bg-body w-35px h-35px w-lg-40px h-lg-40px me-3"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_create_campaign"
            >
              {/*begin::Svg Icon | path: icons/duotune/files/fil005.svg*/}
              <span className="svg-icon svg-icon-2 svg-icon-md-1">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM16 13.5L12.5 13V10C12.5 9.4 12.6 9.5 12 9.5C11.4 9.5 11.5 9.4 11.5 10L11 13L8 13.5C7.4 13.5 7 13.4 7 14C7 14.6 7.4 14.5 8 14.5H11V18C11 18.6 11.4 19 12 19C12.6 19 12.5 18.6 12.5 18V14.5L16 14C16.6 14 17 14.6 17 14C17 13.4 16.6 13.5 16 13.5Z"
                    fill="currentColor"
                  />
                  <rect
                    x={11}
                    y={19}
                    width={10}
                    height={2}
                    rx={1}
                    transform="rotate(-90 11 19)"
                    fill="currentColor"
                  />
                  <rect
                    x={7}
                    y={13}
                    width={10}
                    height={2}
                    rx={1}
                    fill="currentColor"
                  />
                  <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </a>
            {/*end::Button*/}
            {/*begin::Button*/}
            <a
              href="#"
              className="btn btn-icon btn-color-warning bg-body w-35px h-35px w-lg-40px h-lg-40px me-3"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_create_app"
            >
              {/*begin::Svg Icon | path: icons/duotune/general/gen005.svg*/}
              <span className="svg-icon svg-icon-2 svg-icon-md-1">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM12.5 18C12.5 17.4 12.6 17.5 12 17.5H8.5C7.9 17.5 8 17.4 8 18C8 18.6 7.9 18.5 8.5 18.5L12 18C12.6 18 12.5 18.6 12.5 18ZM16.5 13C16.5 12.4 16.6 12.5 16 12.5H8.5C7.9 12.5 8 12.4 8 13C8 13.6 7.9 13.5 8.5 13.5H15.5C16.1 13.5 16.5 13.6 16.5 13ZM12.5 8C12.5 7.4 12.6 7.5 12 7.5H8C7.4 7.5 7.5 7.4 7.5 8C7.5 8.6 7.4 8.5 8 8.5H12C12.6 8.5 12.5 8.6 12.5 8Z"
                    fill="currentColor"
                  />
                  <rect
                    x={7}
                    y={17}
                    width={6}
                    height={2}
                    rx={1}
                    fill="currentColor"
                  />
                  <rect
                    x={7}
                    y={12}
                    width={10}
                    height={2}
                    rx={1}
                    fill="currentColor"
                  />
                  <rect x={7} y={7} width={6} height={2} rx={1} fill="currentColor" />
                  <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="currentColor" />
                </svg>
              </span>
              {/*end::Svg Icon*/}
            </a>
            {/*end::Button*/}
            {/*begin::Daterange*/}
            <a
              href="#"
              className="btn btn-flex bg-body h-35px h-lg-40px px-5"
              id="kt_dashboard_daterangepicker"
              data-bs-toggle="tooltip"
              data-bs-dismiss="click"
              data-bs-trigger="hover"
              data-bs-original-title="Select dashboard daterange"
              data-kt-initialized={1}
            >
              <span className="me-4">
                <span
                  className="text-muted fw-semibold me-1"
                  id="kt_dashboard_daterangepicker_title"
                >
                  Today:
                </span>
                <span
                  className="text-primary fw-bold"
                  id="kt_dashboard_daterangepicker_date"
                >
                  Mar 31
                </span>
              </span>
              {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
              <span className="svg-icon svg-icon-4 m-0">
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/*end::Svg Icon*/}{" "}
            </a>
            {/*end::Daterange*/}
          </div>
          {/*end::Actions*/}
        </div>
        {/*end::Container*/}
      </div>



      <div
        id="kt_content_container"
        className="d-flex flex-column-fluid align-items-start  container-xxl "
      >
        {/*begin::Post*/}
        <div className="content flex-row-fluid" id="kt_content">
          {/*begin::Products*/}
          <div className="card card-flush">
            {/*begin::Card header*/}
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
                    data-kt-ecommerce-product-filter="search"
                    className="form-control form-control-solid w-250px ps-14"
                    placeholder="Search Product"
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
                <a href="add-product.html" className="btn btn-primary">
                  Add Product
                </a>
                {/*end::Add product*/}
              </div>
              {/*end::Card toolbar*/}
            </div>
            {/*end::Card header*/}
            {/*begin::Card body*/}
            <div className="card-body pt-0">
              {/*begin::Table*/}
              <div
                id="kt_ecommerce_products_table_wrapper"
                className="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div className="table-responsive">
                  <table
                    className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer"
                    id="kt_ecommerce_products_table"
                  >
                    {/*begin::Table head*/}
                    <thead>
                      {/*begin::Table row*/}
                      <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
                        <th
                          className="w-10px pe-2 sorting_disabled"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="
          
              
          
      "
                          style={{ width: "29.8906px" }}
                        >
                          <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              data-kt-check="true"
                              data-kt-check-target="#kt_ecommerce_products_table .form-check-input"
                              defaultValue={1}
                            />
                          </div>
                        </th>
                        <th
                          className="min-w-200px sorting"
                          tabIndex={0}
                          aria-controls="kt_ecommerce_products_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Product: activate to sort column ascending"
                          style={{ width: "282.922px" }}
                        >
                          Product
                        </th>
                        <th
                          className="text-end min-w-100px sorting"
                          tabIndex={0}
                          aria-controls="kt_ecommerce_products_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="SKU: activate to sort column ascending"
                          style={{ width: "143.375px" }}
                        >
                          SKU
                        </th>
                        <th
                          className="text-end min-w-70px sorting"
                          tabIndex={0}
                          aria-controls="kt_ecommerce_products_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Qty: activate to sort column ascending"
                          style={{ width: "129.641px" }}
                        >
                          Qty
                        </th>
                        <th
                          className="text-end min-w-100px sorting"
                          tabIndex={0}
                          aria-controls="kt_ecommerce_products_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Price: activate to sort column ascending"
                          style={{ width: "143.375px" }}
                        >
                          Price
                        </th>
                        <th
                          className="text-end min-w-100px sorting"
                          tabIndex={0}
                          aria-controls="kt_ecommerce_products_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Rating: activate to sort column ascending"
                          style={{ width: "143.375px" }}
                        >
                          Rating
                        </th>
                        <th
                          className="text-end min-w-100px sorting"
                          tabIndex={0}
                          aria-controls="kt_ecommerce_products_table"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Status: activate to sort column ascending"
                          style={{ width: "143.375px" }}
                        >
                          Status
                        </th>
                        <th
                          className="text-end min-w-70px sorting_disabled"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Actions"
                          style={{ width: "139.797px" }}
                        >
                          Actions
                        </th>
                      </tr>
                      {/*end::Table row*/}
                    </thead>
                    {/*end::Table head*/}
                    {/*begin::Table body*/}
                    <tbody className="fw-semibold text-gray-600">
                      {data.getProducts.map((row, index) => {

                        const class_name = (index + 1) % 2 === 0 ? 'even' : 'odd';
                        return (<>
                          <tr className={class_name} >
                            {/*begin::Checkbox*/}
                            <td>
                              <div className="form-check form-check-sm form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue={row.id}
                                />
                              </div>
                            </td>
                            {/*end::Checkbox*/}
                            {/*begin::Category-*/}
                            <td>
                              <div className="d-flex align-items-center">
                                {/*begin::Thumbnail*/}
                                <a
                                  href="edit-product.html"
                                  className="symbol symbol-50px"
                                >
                                  <span
                                    className="symbol-label"
                                    style={{
                                      backgroundImage:
                                        `url(${row.image})`
                                    }}
                                  />
                                </a>
                                {/*end::Thumbnail*/}
                                <div className="ms-5">
                                  {/*begin::Title*/}
                                  <a
                                    href="edit-product.html"
                                    className="text-gray-800 text-hover-primary fs-5 fw-bold"
                                    data-kt-ecommerce-product-filter="product_name"
                                  >
                                    Product 1
                                  </a>
                                  {/*end::Title*/}
                                </div>
                              </div>
                            </td>
                            {/*end::Category-*/}
                            {/*begin::SKU-*/}
                            <td className="text-end pe-0">
                              <span className="fw-bold">03665009</span>
                            </td>
                            {/*end::SKU-*/}
                            {/*begin::Qty-*/}
                            <td className="text-end pe-0" data-order={49}>
                              <span className="fw-bold ms-3">49</span>
                            </td>
                            {/*end::Qty-*/}
                            {/*begin::Price-*/}
                            <td className="text-end pe-0">60.00</td>
                            {/*end::Price-*/}
                            {/*begin::Rating*/}
                            <td className="text-end pe-0" data-order="rating-4">
                              <div className="rating justify-content-end">
                                <div className="rating-label checked">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-2">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}{" "}
                                </div>
                                <div className="rating-label checked">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-2">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}{" "}
                                </div>
                                <div className="rating-label checked">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-2">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}{" "}
                                </div>
                                <div className="rating-label checked">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-2">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}{" "}
                                </div>
                                <div className="rating-label ">
                                  {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                                  <span className="svg-icon svg-icon-2">
                                    <svg
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                        fill="currentColor"
                                      />
                                    </svg>
                                  </span>
                                  {/*end::Svg Icon*/}{" "}
                                </div>
                              </div>
                            </td>
                            {/*end::Rating*/}
                            {/*begin::Status-*/}
                            <td className="text-end pe-0" data-order="Inactive">
                              {/*begin::Badges*/}
                              <div className="badge badge-light-danger">Inactive</div>
                              {/*end::Badges*/}
                            </td>
                            {/*end::Status-*/}
                            {/*begin::Action-*/}
                            <td className="text-end">
                              <a
                                href="#"
                                className="btn btn-sm btn-light btn-active-light-primary"
                                data-kt-menu-trigger="click"
                                data-kt-menu-placement="bottom-end"
                              >
                                Actions
                                {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                                <span className="svg-icon svg-icon-5 m-0">
                                  <svg
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </span>
                                {/*end::Svg Icon*/}{" "}
                              </a>
                              {/*begin::Menu*/}
                              <div
                                className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                                data-kt-menu="true"
                              >
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a href="edit-product.html" className="menu-link px-3">
                                    Edit
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                                {/*begin::Menu item*/}
                                <div className="menu-item px-3">
                                  <a
                                    href="#"
                                    className="menu-link px-3"
                                    data-kt-ecommerce-product-filter="delete_row"
                                  >
                                    Delete
                                  </a>
                                </div>
                                {/*end::Menu item*/}
                              </div>
                              {/*end::Menu*/}
                            </td>
                            {/*end::Action-*/}
                          </tr>
                        </>)
                      })}



                      <tr className="even">
                        {/*begin::Checkbox*/}
                        <td>
                          <div className="form-check form-check-sm form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                            />
                          </div>
                        </td>
                        {/*end::Checkbox*/}
                        {/*begin::Category-*/}
                        <td>
                          <div className="d-flex align-items-center">
                            {/*begin::Thumbnail*/}
                            <a
                              href="edit-product.html"
                              className="symbol symbol-50px"
                            >
                              <span
                                className="symbol-label"
                                style={{
                                  backgroundImage:
                                    "url(../../../assets/media/stock/ecommerce/10.gif)"
                                }}
                              />
                            </a>
                            {/*end::Thumbnail*/}
                            <div className="ms-5">
                              {/*begin::Title*/}
                              <a
                                href="edit-product.html"
                                className="text-gray-800 text-hover-primary fs-5 fw-bold"
                                data-kt-ecommerce-product-filter="product_name"
                              >
                                Product 10
                              </a>
                              {/*end::Title*/}
                            </div>
                          </div>
                        </td>
                        {/*end::Category-*/}
                        {/*begin::SKU-*/}
                        <td className="text-end pe-0">
                          <span className="fw-bold">01612001</span>
                        </td>
                        {/*end::SKU-*/}
                        {/*begin::Qty-*/}
                        <td className="text-end pe-0" data-order={8}>
                          <span className="badge badge-light-warning">Low stock</span>
                          <span className="fw-bold text-warning ms-3">8</span>
                        </td>
                        {/*end::Qty-*/}
                        {/*begin::Price-*/}
                        <td className="text-end pe-0">237.00</td>
                        {/*end::Price-*/}
                        {/*begin::Rating*/}
                        <td className="text-end pe-0" data-order="rating-3">
                          <div className="rating justify-content-end">
                            <div className="rating-label checked">
                              {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}{" "}
                            </div>
                            <div className="rating-label checked">
                              {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}{" "}
                            </div>
                            <div className="rating-label checked">
                              {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}{" "}
                            </div>
                            <div className="rating-label ">
                              {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}{" "}
                            </div>
                            <div className="rating-label ">
                              {/*begin::Svg Icon | path: icons/duotune/general/gen029.svg*/}
                              <span className="svg-icon svg-icon-2">
                                <svg
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11.1359 4.48359C11.5216 3.82132 12.4784 3.82132 12.8641 4.48359L15.011 8.16962C15.1523 8.41222 15.3891 8.58425 15.6635 8.64367L19.8326 9.54646C20.5816 9.70867 20.8773 10.6186 20.3666 11.1901L17.5244 14.371C17.3374 14.5803 17.2469 14.8587 17.2752 15.138L17.7049 19.382C17.7821 20.1445 17.0081 20.7069 16.3067 20.3978L12.4032 18.6777C12.1463 18.5645 11.8537 18.5645 11.5968 18.6777L7.69326 20.3978C6.99192 20.7069 6.21789 20.1445 6.2951 19.382L6.7248 15.138C6.75308 14.8587 6.66264 14.5803 6.47558 14.371L3.63339 11.1901C3.12273 10.6186 3.41838 9.70867 4.16744 9.54646L8.3365 8.64367C8.61089 8.58425 8.84767 8.41222 8.98897 8.16962L11.1359 4.48359Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                              {/*end::Svg Icon*/}{" "}
                            </div>
                          </div>
                        </td>
                        {/*end::Rating*/}
                        {/*begin::Status-*/}
                        <td className="text-end pe-0" data-order="Scheduled">
                          {/*begin::Badges*/}
                          <div className="badge badge-light-primary">Scheduled</div>
                          {/*end::Badges*/}
                        </td>
                        {/*end::Status-*/}
                        {/*begin::Action-*/}
                        <td className="text-end">
                          <a
                            href="#"
                            className="btn btn-sm btn-light btn-active-light-primary"
                            data-kt-menu-trigger="click"
                            data-kt-menu-placement="bottom-end"
                          >
                            Actions
                            {/*begin::Svg Icon | path: icons/duotune/arrows/arr072.svg*/}
                            <span className="svg-icon svg-icon-5 m-0">
                              <svg
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                            {/*end::Svg Icon*/}{" "}
                          </a>
                          {/*begin::Menu*/}
                          <div
                            className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4"
                            data-kt-menu="true"
                          >
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a href="edit-product.html" className="menu-link px-3">
                                Edit
                              </a>
                            </div>
                            {/*end::Menu item*/}
                            {/*begin::Menu item*/}
                            <div className="menu-item px-3">
                              <a
                                href="#"
                                className="menu-link px-3"
                                data-kt-ecommerce-product-filter="delete_row"
                              >
                                Delete
                              </a>
                            </div>
                            {/*end::Menu item*/}
                          </div>
                          {/*end::Menu*/}
                        </td>
                        {/*end::Action-*/}
                      </tr>
                    </tbody>
                    {/*end::Table body*/}
                  </table>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start">
                    <div
                      className="dataTables_length"
                      id="kt_ecommerce_products_table_length"
                    >
                      <label>
                        <select
                          name="kt_ecommerce_products_table_length"
                          aria-controls="kt_ecommerce_products_table"
                          className="form-select form-select-sm form-select-solid"
                        >
                          <option value={10}>10</option>
                          <option value={25}>25</option>
                          <option value={50}>50</option>
                          <option value={100}>100</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="kt_ecommerce_products_table_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="kt_ecommerce_products_table_previous"
                        >
                          <a
                            href="#"
                            aria-controls="kt_ecommerce_products_table"
                            data-dt-idx={0}
                            tabIndex={0}
                            className="page-link"
                          >
                            <i className="previous" />
                          </a>
                        </li>
                        <li className="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="kt_ecommerce_products_table"
                            data-dt-idx={1}
                            tabIndex={0}
                            className="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="kt_ecommerce_products_table"
                            data-dt-idx={2}
                            tabIndex={0}
                            className="page-link"
                          >
                            2
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="kt_ecommerce_products_table"
                            data-dt-idx={3}
                            tabIndex={0}
                            className="page-link"
                          >
                            3
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="kt_ecommerce_products_table"
                            data-dt-idx={4}
                            tabIndex={0}
                            className="page-link"
                          >
                            4
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="kt_ecommerce_products_table"
                            data-dt-idx={5}
                            tabIndex={0}
                            className="page-link"
                          >
                            5
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next"
                          id="kt_ecommerce_products_table_next"
                        >
                          <a
                            href="#"
                            aria-controls="kt_ecommerce_products_table"
                            data-dt-idx={6}
                            tabIndex={0}
                            className="page-link"
                          >
                            <i className="next" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/*end::Table*/}{" "}
            </div>
            {/*end::Card body*/}
          </div>
          {/*end::Products*/}{" "}
        </div>
        {/*end::Post*/}
      </div>

    </>
  )
}