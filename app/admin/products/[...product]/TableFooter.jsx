export default function TableFooter(props) {
    return (
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
                        {(() => {
                            // {`/admin/products/list/${i + 1}`}
                            const totalpage = props.pageCount;
                            const rows = [];
                            for (let i = 0; i < totalpage; i++) {
                                rows.push(
                                    <li className={`paginate_button page-item ${!i ? `active` : ''}`}>
                                        <a
                                            href={void (0)}
                                            aria-controls="kt_ecommerce_products_table"
                                            data-page={i}
                                            data-dt-idx={1}
                                            tabIndex={i}
                                            onClick={props.pagination}
                                            className="page-link"
                                        >
                                            {i + 1}
                                        </a>
                                    </li>
                                );
                            }
                            return rows;
                        })()}


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
    )
}