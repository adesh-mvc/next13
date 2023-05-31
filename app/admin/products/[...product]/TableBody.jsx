"use client"
// import "./dbtable.css";
import { useState, useEffect } from "react"


// check all checkbox


const ActionHandler = (e) => {
    const activeMenu = document.querySelectorAll('.show.menu-dropdown');
    if (activeMenu.length > 0) {
        activeMenu.forEach(element => {
            e.target.closest('td').lastChild.removeAttribute("style");
            element.closest('td').lastChild.classList.remove('show');
            element.classList.remove('show', 'menu-dropdown');
            console.log("action handler", document.querySelectorAll('.show.menu-dropdown'));
        });
    }
    e.target.closest('td').lastChild.style.cssText = 'z-index: 107; position: fixed; inset:  102px 0px auto auto; margin: 0px; transform: translate(-59px, 234px);'
    e.target.classList.add('show', 'menu-dropdown');
    e.target.closest('td').lastChild.classList.add('show');

    // var items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]:not([data-kt-menu-static="true"])');
    // var menu;
    // var item;
    // var sub;
    // var menuObj;

    // if (items && items.length > 0) {
    //     for (var i = 0, len = items.length; i < len; i++) {
    //         item = items[i];
    //         menuObj = KTMenu.getInstance(item);

    //         if (menuObj && menuObj.getItemSubType(item) === 'dropdown') {
    //             menu = menuObj.getElement();
    //             sub = menuObj.getItemSubElement(item);

    //             if (item === e.target || item.contains(e.target)) {
    //                 continue;
    //             }

    //             if (sub === e.target || sub.contains(e.target)) {
    //                 continue;
    //             }

    //             menuObj.hide(item);
    //         }
    //     }
    // }

}
const delete_row = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }
    })
}
export default function TableBody(props) {
    // const { toggleCheck, CheckStatus } = props;
    // window.addEventListener('click', function () {
    //     console.log("clicked outside ")
    // })


    const [checkBody, setCheckBody] = useState([])

    console.log("checkBody", props.checkedbox)
    // props.getData(checkBody)

    return (
        <>
            {props.data.getProducts ? (
                props.data.getProducts.map((row, index) => {

                    const class_name = (index + 1) % 2 === 0 ? 'even' : 'odd';
                    const documentId = row.id;
                    return (<>
                        <tr key={documentId} className={class_name} >
                            {/*begin::Checkbox*/}
                            <td>
                                <div className="form-check form-check-sm form-check-custom form-check-solid">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name={`index[${documentId}]`}
                                        onClick={props.currentToggle}
                                        // onChange={(e) => props.currentToggle}
                                        defaultValue={console.log("default:", documentId)}
                                        data-row={documentId}
                                        /*     defaultChecked={false} */
                                        checked={props.checkedbox[`index[${documentId}]`]}
                                    // defaultValue={documentId}
                                    />
                                </div>
                            </td>
                            {/*end::Checkbox*/}
                            {/*begin::Category-*/}
                            <td>
                                <div className="d-flex align-items-center">
                                    {/*begin::Thumbnail*/}
                                    <a
                                        href={void (0)}
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
                                            href={`/admin/products/edit/${row.id}`}
                                            className="text-gray-800 text-hover-primary fs-5 fw-bold"
                                            data-kt-ecommerce-product-filter="product_name"
                                        >
                                            {row.name}
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
                                <span className="fw-bold ms-3">{row.productionCapacity}</span>
                            </td>
                            {/*end::Qty-*/}
                            {/*begin::Price-*/}
                            <td className="text-end pe-0">{row.price}</td>
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


                                <div className="dropdown">
                                    <button
                                        className="btn btn-sm btn-light btn-active-light-primary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        action
                                    </button>
                                    <ul
                                        className="dropdown-menu dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        {/*   <li>
                                            <a className="dropdown-item active" href="#">
                                                Action
                                            </a>
                                        </li> */}
                                        <li>

                                            <a className="dropdown-item" href={`/admin/products/edit/${row.id}`}>
                                                <i class="bi bi-pencil-square text-primary"> edit</i>
                                            </a>
                                        </li>
                                        <li>
                                            <hr className="dropdown-divider" />
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href={void (0)} onClick={delete_row}>
                                                <i class="bi bi-trash text-danger"></i> delete
                                            </a>
                                        </li>
                                        {/* 
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Separated link
                                            </a>
                                        </li> */}
                                    </ul>
                                </div>


                            </td>
                            {/*end::Action-*/}
                        </tr>
                    </>)
                })
            ) : ''}
        </>
    )
}