"use client"


const TableHead = (props) => {
    return (<>
        <tr className="text-start text-gray-400 fw-bold fs-7 text-uppercase gs-0">
            <th
                className="w-10px pe-2 sorting_disabled"
                rowSpan={1}
                colSpan={1}
                aria-label=""
                style={{ width: "29.8906px" }}
            >
                <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        data-kt-check="true"
                        onChange={(event) => props.AllChecked(event.target.checked)}
                        /*  checked={props.CheckStatus} */
                        data-kt-check-target="#kt_ecommerce_products_table .form-check-input"
                        defaultValue={1}
                        /*  value={props.checkedVal} */
                        name="all"
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
                className="text-end min-w-100px sorting sorting_desc"
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
    </>);
}
export default TableHead;