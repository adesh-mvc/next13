"use client"

const ActionHandler = (e) => {
    e.trigger.addClass('show menu-dropdown')
    console.log("action handler")
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
export default function TableBody(props) {
    return (
        <>
            {props.data.getProducts.map((row, index) => {

                const class_name = (index + 1) % 2 === 0 ? 'even' : 'odd';
                return (<>
                    <tr className={class_name} key={row.id}>
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
                                        href="edit-product.html"
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
                            <a
                                href="#"
                                className="btn btn-sm btn-light btn-active-light-primary"
                                data-kt-menu-trigger="click"
                                data-kt-menu-placement="bottom-end"
                                onClick={ActionHandler}

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
        </>
    )
}