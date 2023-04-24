"use client"

import React from "react"
import classNames from "classnames"
import { usePagination, DOTS } from "./usePagination";

const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }
    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };
    let lastPage = paginationRange[paginationRange.length - 1];
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
                    <ul
                        className={classNames('pagination', { [className]: className })}
                    >
                        {/* Left navigation arrow */}
                        <li
                            className={classNames('paginate_button page-item previous', {
                                disabled: currentPage === 1
                            })}
                            onClick={onPrevious}
                        >
                            <a href={void (0)} data-dt-idx="0" tabindex="0" class="page-link"><i class="previous"></i></a>
                        </li>
                        {paginationRange.map(pageNumber => {

                            // If the pageItem is a DOT, render the DOTS unicode character
                            if (pageNumber === DOTS) {
                                return <li className="paginate_button page-item dots">&#8230;</li>;
                            }

                            // Render our Page Pills
                            return (
                                <li
                                    className={classNames('paginate_button page-item', {
                                        active: pageNumber === currentPage
                                    })}
                                    onClick={() => onPageChange(pageNumber)}
                                    data-page={pageNumber}
                                >
                                    <a href={void (0)} tabindex="0" class="page-link">{pageNumber}</a>

                                </li>
                            );
                        })}
                        {/*  Right Navigation arrow */}
                        <li
                            className={classNames('paginate_button page-item next', {
                                disabled: currentPage === lastPage
                            })}
                            onClick={onNext}
                        >
                            <a href={void (0)} aria-controls="kt_ecommerce_products_table_next" data-dt-idx="6" tabindex="0" class="page-link"><i class="next"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Pagination;